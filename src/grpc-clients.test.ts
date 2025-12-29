import * as permify from ".";
import { Any } from "./grpc/generated/google/protobuf/any";

describe("clients test", () => {
  it("permission client check", (done) => {
    // Initialize the Permify gRPC client
    let client = permify.grpc.newClient({
      endpoint: "localhost:3478",
      cert: undefined,
      pk: undefined,
      certChain: undefined,
      insecure: true,
    });

    // Define the schema
    let schema = `
            entity user {}
            
            entity document {
               relation viewer @user
               
               action view = viewer
            }
        `;

    // Write the schema
    client.schema
      .write({
        tenantId: "t1",
        schema: schema,
      })
      .then((response1_1: permify.grpc.payload.SchemaWriteResponse) => {
        // Perform the permission check
        client.permission
          .check({
            tenantId: "t1",
            metadata: {
              snapToken: "",
              schemaVersion: response1_1.schemaVersion,
              depth: 20,
            },
            entity: {
              type: "document",
              id: "1",
            },
            permission: "view",
            subject: {
              type: "user",
              id: "3",
            },
          })
          .then((response1_2: permify.grpc.payload.PermissionCheckResponse) => {
            // Verify the response
            expect(response1_2.can).toBe(
              permify.grpc.base.CheckResult.CHECK_RESULT_DENIED
            );
            done();
          });
      });
  });

  it("permission client lookup entity", (done) => {
    // Initialize the Permify gRPC client
    let client = permify.grpc.newClient({
      endpoint: "localhost:3478",
      cert: undefined,
      pk: undefined,
      certChain: undefined,
      insecure: true,
    });

    // Create a BooleanValue message
    const booleanValue = permify.grpc.base.BooleanValue.fromJSON({
      data: true,
    });

    // Create an Any message to wrap the BooleanValue
    const anyMessage = Any.fromJSON({
      typeUrl: "type.googleapis.com/base.v1.BooleanValue",
      value: permify.grpc.base.BooleanValue.encode(booleanValue).finish(),
    });

    // Define the schema
    let schema = `
            entity user {}
            
            entity document {
               relation viewer @user
               
               attribute public boolean 
               
               action view = viewer
            }
        `;

    // Write the schema
    client.schema
      .write({
        tenantId: "t1",
        schema: schema,
      })
      .then((response2_1: permify.grpc.payload.SchemaWriteResponse) => {
        // Write the data
        client.data
          .write({
            tenantId: "t1",
            metadata: {
              schemaVersion: response2_1.schemaVersion,
            },
            attributes: [
              {
                entity: {
                  type: "document",
                  id: "1",
                },
                attribute: "public",
                value: anyMessage,
              },
            ],
            tuples: [
              {
                entity: {
                  type: "document",
                  id: "1",
                },
                relation: "viewer",
                subject: {
                  type: "user",
                  id: "1",
                },
              },
              {
                entity: {
                  type: "document",
                  id: "3",
                },
                relation: "viewer",
                subject: {
                  type: "user",
                  id: "1",
                },
              },
              {
                entity: {
                  type: "document",
                  id: "4",
                },
                relation: "viewer",
                subject: {
                  type: "user",
                  id: "1",
                },
              },
            ],
          })
          .then((response2_2: permify.grpc.payload.DataWriteResponse) => {
            // Perform Lookup Entity Stream
            const response2_3 = client.permission.lookupEntityStream({
              tenantId: "t1",
              metadata: {
                snapToken: response2_2.snapToken,
                schemaVersion: response2_1.schemaVersion,
                depth: 20,
              },
              entityType: "document",
              permission: "view",
              subject: {
                type: "user",
                id: "1",
              },
            });

            // Handle the stream response
            handle(response2_3, ["1", "3", "4"]);

            // Wait for the stream to complete
            setTimeout(() => {
              done();
            }, 1000);
          });
      });
  });

  it("permission client bulk check", (done) => {
    // Initialize the Permify gRPC client
    let client = permify.grpc.newClient({
      endpoint: "localhost:3478",
      cert: undefined,
      pk: undefined,
      certChain: undefined,
      insecure: true,
    });

    // Define the schema
    let schema = `
            entity user {}
            
            entity document {
                relation viewer @user
                
                action view = viewer
            }
        `;

    // Write the schema
    client.schema
      .write({
        tenantId: "t1",
        schema: schema,
      })
      .then((response_schema: permify.grpc.payload.SchemaWriteResponse) => {
        // Write the data to make one check true
        client.data
          .write({
            tenantId: "t1",
            metadata: {
              schemaVersion: response_schema.schemaVersion,
            },
            tuples: [
              {
                entity: {
                  type: "document",
                  id: "1",
                },
                relation: "viewer",
                subject: {
                  type: "user",
                  id: "user1",
                },
              },
            ],
          })
          .then((_response_data: permify.grpc.payload.DataWriteResponse) => {
            // Perform the bulk permission check
            client.permission
              .bulkCheck({
                tenantId: "t1",
                metadata: {
                  snapToken: "",
                  schemaVersion: response_schema.schemaVersion,
                  depth: 20,
                },
                items: [
                  {
                    entity: {
                      type: "document",
                      id: "1",
                    },
                    permission: "view",
                    subject: {
                      type: "user",
                      id: "user1",
                    },
                  },
                  {
                    entity: {
                      type: "document",
                      id: "2",
                    },
                    permission: "view",
                    subject: {
                      type: "user",
                      id: "user2",
                    },
                  },
                ],
              })
              .then(
                (
                  response_bulk: permify.grpc.payload.PermissionBulkCheckResponse
                ) => {
                  // Verify the response
                  // Expecting 2 results
                  expect(response_bulk.results.length).toBe(2);

                  // First check should be ALLOWED because we added the tuple
                  expect(response_bulk.results[0].can).toBe(
                    permify.grpc.base.CheckResult.CHECK_RESULT_ALLOWED
                  );

                  // Second check should be DENIED
                  expect(response_bulk.results[1].can).toBe(
                    permify.grpc.base.CheckResult.CHECK_RESULT_DENIED
                  );
                  done();
                }
              );
          });
      });
  });
});

// Helper function to handle the stream response
async function handle(
  res: AsyncIterable<permify.grpc.payload.PermissionLookupEntityStreamResponse>,
  expected: string[]
) {
  for await (const response of res) {
    expect(expected.includes(response.entityId)).toBe(true);
  }
}
