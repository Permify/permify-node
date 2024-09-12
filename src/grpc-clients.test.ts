import * as permify from ".";
import { Any } from "google-protobuf/google/protobuf/any_pb";

describe("clients test", () => {

    it("permission client check", (done) => {
        // Initialize the Permify gRPC client
        let client = permify.grpc.newClient({
            endpoint: "localhost:3478",
            cert: undefined,
            insecure: true
        });

        // Define the schema
        let schema = `
            entity user {}
            
            entity document {
               relation viewer @user
               
               action view = viewer
            }
        `;

        // Create and set the SchemaWriteRequest
        let schemaWriteRequest = new permify.grpc.payload.SchemaWriteRequest();
        schemaWriteRequest.setTenantId("t1");
        schemaWriteRequest.setSchema(schema);

        // Write the schema
        client.schema.write(schemaWriteRequest).then((response1_1: permify.grpc.payload.SchemaWriteResponse) => {
            const schemaVersion = response1_1.toObject().schemaVersion;

            // Create and set the PermissionCheckRequest
            let permissionCheckRequest = new permify.grpc.payload.PermissionCheckRequest();
            permissionCheckRequest.setTenantId("t1");

            // Set the request metadata
            let permissionCheckRequestMetadata = new permify.grpc.payload.PermissionCheckRequestMetadata();
            permissionCheckRequestMetadata.setSchemaVersion(schemaVersion);
            permissionCheckRequestMetadata.setDepth(20);
            permissionCheckRequest.setMetadata(permissionCheckRequestMetadata);

            // Set the entity details
            let permissionCheckRequestEntity = new permify.grpc.payload.Entity();
            permissionCheckRequestEntity.setType("document");
            permissionCheckRequestEntity.setId("1");
            permissionCheckRequest.setEntity(permissionCheckRequestEntity);

            // Set the permission to check
            permissionCheckRequest.setPermission("view");

            // Set the subject details
            let permissionCheckRequestSubject = new permify.grpc.payload.Subject();
            permissionCheckRequestSubject.setType("user");
            permissionCheckRequestSubject.setId("3");
            permissionCheckRequest.setSubject(permissionCheckRequestSubject);

            // Perform the permission check
            client.permission.check(permissionCheckRequest).then((response1_2: permify.grpc.payload.PermissionCheckResponse) => {
                // Verify the response
                expect(response1_2.toObject().can).toBe(permify.grpc.base.CheckResult.CHECK_RESULT_DENIED);
                done();
            });
        });
    });

    it("permission client lookup entity", (done) => {
        // Initialize the Permify gRPC client
        let client = permify.grpc.newClient({
            endpoint: "localhost:3478",
            cert: undefined,
            insecure: true
        });

        // Create a BooleanValue message
        let booleanValue = new permify.grpc.base.BooleanValue();
        booleanValue.setData(true);

        // Create an Any message to wrap the BooleanValue
        let anyMessage = new Any();
        anyMessage.setTypeUrl('type.googleapis.com/base.v1.BooleanValue');
        anyMessage.setValue(booleanValue.serializeBinary());

        // Define the schema
        let schema = `
            entity user {}
            
            entity document {
               relation viewer @user
               
               attribute public boolean 
               
               action view = viewer
            }
        `;

        // Create and set the SchemaWriteRequest
        let schemaWriteRequest = new permify.grpc.payload.SchemaWriteRequest();
        schemaWriteRequest.setTenantId("t1");
        schemaWriteRequest.setSchema(schema);

        // Write the schema
        client.schema.write(schemaWriteRequest).then((response2_1: permify.grpc.payload.SchemaWriteResponse) => {
            const schemaVersion2 = response2_1.toObject().schemaVersion;

            // Create and set the DataWriteRequest
            let dataWriteRequest = new permify.grpc.payload.DataWriteRequest();
            dataWriteRequest.setTenantId("t1");

            // Set the request metadata
            let dataWriteRequestMetadata = new permify.grpc.payload.DataWriteRequestMetadata();
            dataWriteRequestMetadata.setSchemaVersion(schemaVersion2);
            dataWriteRequest.setMetadata(dataWriteRequestMetadata);

            // Create the attribute list
            let attributeList = [];
            const attributes = [
                {
                    entity: {
                        type: "document",
                        id: "1"
                    },
                    attribute: "public",
                    value: anyMessage
                }
            ];

            attributes.forEach(a => {
                let attribute = new permify.grpc.payload.Attribute();

                let entity = new permify.grpc.payload.Entity();
                entity.setType(a.entity.type);
                entity.setId(a.entity.id);

                attribute.setEntity(entity);
                attribute.setAttribute(a.attribute);
                attribute.setValue(a.value);

                attributeList.push(attribute);
            });

            dataWriteRequest.setAttributesList(attributeList);

            // Create the tuple list
            let tupleList = [];
            const tuples = [
                {
                    entity: {
                        type: "document",
                        id: "1"
                    },
                    relation: "viewer",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                },
                {
                    entity: {
                        type: "document",
                        id: "3"
                    },
                    relation: "viewer",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                },
                {
                    entity: {
                        type: "document",
                        id: "4"
                    },
                    relation: "viewer",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                }
            ];

            tuples.forEach(t => {
                let tuple = new permify.grpc.payload.Tuple();

                let entity = new permify.grpc.payload.Entity();
                entity.setType(t.entity.type);
                entity.setId(t.entity.id);

                let subject = new permify.grpc.payload.Subject();
                subject.setType(t.subject.type);
                subject.setId(t.subject.id);

                tuple.setEntity(entity);
                tuple.setRelation(t.relation);
                tuple.setSubject(subject);

                tupleList.push(tuple);
            });

            dataWriteRequest.setTuplesList(tupleList);

            // Write the data
            client.data.write(dataWriteRequest).then((response2_2: permify.grpc.payload.DataWriteResponse) => {
                // Create and set the PermissionLookupEntityRequest
                let lookupEntityStreamRequest = new permify.grpc.payload.PermissionLookupEntityRequest();
                lookupEntityStreamRequest.setTenantId("t1");

                // Set the request metadata
                let lookupEntityStreamRequestMetadata = new permify.grpc.payload.PermissionLookupEntityRequestMetadata();
                lookupEntityStreamRequestMetadata.setSnapToken(response2_2.toObject().snapToken);
                lookupEntityStreamRequestMetadata.setSchemaVersion(schemaVersion2);
                lookupEntityStreamRequestMetadata.setDepth(20);
                lookupEntityStreamRequest.setMetadata(lookupEntityStreamRequestMetadata);

                // Set the entity type and permission
                lookupEntityStreamRequest.setEntityType("document");
                lookupEntityStreamRequest.setPermission("view");

                // Set the subject details
                let subject = new permify.grpc.payload.Subject();
                subject.setType("user");
                subject.setId("1");
                lookupEntityStreamRequest.setSubject(subject);

                // Perform the lookup entity stream
                const response2_3 = client.permission.lookupEntityStream(lookupEntityStreamRequest);

                // Handle the stream response
                handle(response2_3, ["1", "3", "4"]);

                // Wait for the stream to complete
                setTimeout(() => {
                    done();
                }, 1000);
            });
        });
    });
});

// Helper function to handle the stream response
async function handle(res: AsyncIterable<permify.grpc.payload.PermissionLookupEntityStreamResponse>, expected: string[]) {
    for await (const response of res) {
        expect(expected.includes(response.toObject().entityId)).toBe(true);
    }
}
