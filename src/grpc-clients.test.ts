import {newClient} from "./grpc";
import {
    PermissionLookupEntityStreamResponse
} from "./grpc/generated/base/v1/service";
import {CheckResult} from "./grpc/generated/base/v1/base";

describe("clients test", () => {

    it("permission client check", (done) => {
        let client = newClient({
            endpoint: "localhost:3478",
            cert: null
        })

        client.schema.write({
            tenantId: "t1",
            schema: `
            entity user {}
            
            entity document {
               relation viewer @user
               
               action view = viewer
            }
            `
        }).then((response) => {
            client.permission.check({
                tenantId: "t1",
                metadata: {
                    snapToken: "",
                    schemaVersion: response.schemaVersion,
                    depth: 20
                },
                entity: {
                    type: "document",
                    id: "1"
                },
                permission: "view",
                subject: {
                    type: "user",
                    id: "3"
                }
            }).then((response) => {
                expect(response.can).toBe(CheckResult.RESULT_DENIED)
                done();
            })
        })
    });

    it("permission client lookup entity", (done) => {
        let client = newClient({
            endpoint: "localhost:3478",
            cert: null
        })

        client.schema.write({
            tenantId: "t1",
            schema: `
            entity user {}
            
            entity document {
               relation viewer @user
               
               action view = viewer
            }
            `
        }).then((swResponse) => {
            client.relationship.write({
                tenantId: "t1",
                metadata: {
                    schemaVersion: swResponse.schemaVersion
                },
                tuples: [{
                    entity: {
                        type: "document",
                        id: "1"
                    },
                    relation: "viewer",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                }, {
                    entity: {
                        type: "document",
                        id: "3"
                    },
                    relation: "viewer",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                },{
                    entity: {
                        type: "document",
                        id: "4"
                    },
                    relation: "viewer",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                }]
            }).then((response) => {
                let res = client.permission.lookupEntityStream({
                    tenantId: "t1",
                    metadata: {
                        snapToken: response.snapToken,
                        schemaVersion: swResponse.schemaVersion,
                        depth: 20
                    },
                    entityType: "document",
                    permission: "view",
                    subject: {
                        type: "user",
                        id: "1"
                    }
                })
                handle(res, ["1", "3", "4"])
                setTimeout(() => {
                    done();
                }, 1000)
            });
        });

    });
});

async function handle(res: AsyncIterable<PermissionLookupEntityStreamResponse>, expected: string[]) {
    for await (const response of res) {
        expect(expected.includes(response.entityId)).toBe(true)
    }
}

