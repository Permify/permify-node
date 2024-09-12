<h1 align="center">
    <img src="https://raw.githubusercontent.com/Permify/permify/master/assets/permify-logo.svg" alt="Permify logo" width="336px" /><br />
    Permify NodeJS Client
</h1>

<p align="center">
    <a href="https://github.com/Permify/permify-node/releases" target="_blank"><img src="https://img.shields.io/github/package-json/v/permify/permify-node?style=for-the-badge" alt="GitHub package.json version" /></a>&nbsp;
    <a href="https://github.com/Permify/permify-node?tab=readme-ov-file#Apache-2.0-1-ov-file" target="_blank"><img src="https://img.shields.io/github/license/Permify/permify?style=for-the-badge" alt="Permify Licence" /></a>&nbsp;
    <a href="https://discord.gg/MJbUjwskdH" target="_blank"><img src="https://img.shields.io/discord/950799928047833088?style=for-the-badge&logo=discord&label=DISCORD" alt="Permify Discord Channel" /></a>&nbsp;
</p>

This client makes it easy to interact with [Permify](https://github.com/Permify/permify) from your Node.js application.

# Installation

Use npm to install:

```shell
npm config set @buf:registry https://buf.build/gen/npm/v1/
npm install @permify/permify-node
```

Use yarn to install (Please be aware that Yarn versions greater than v1.10.0 and less than v2 are not supported):

```shell
yarn config set npmScopes.buf.npmRegistryServer https://buf.build/gen/npm/v1/
yarn add @permify/permify-node
```

# How to use

### Create a new tenant

```typescript
import * as permify from "@permify/permify-node";


const request = new permify.grpc.payload.TenantCreateRequest();
request.setId("t1");
request.setName("Tenant 1");

const client = permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined,
    insecure: true
});

client.tenancy.create(request).then((response) => {
    console.log(response);
    // handle response
})
```

### Write Schema

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
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
client.schema.write(schemaWriteRequest).then((response) => {
    // handle response
})
```

### Write Relationships

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined,
    insecure: true
});

// Create and set the RelationshipWriteRequest
let relationshipWriteRequest = new permify.grpc.payload.SchemaWriteRequest();
relationshipWriteRequest.setTenantId("t1");
relationshipWriteRequest.setMetadata(new permify.grpc.payload.SchemaWriteRequestMetadata());

// Create the tuple list
let tupleList = [];
let tuples = [{
        entity: {
            type: "document",
            id: "1"
        },
        relation: "viewer",
        subject: {
            type: "user",
            id: "1"
        }
    }];

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

relationshipWriteRequest.setTuplesList(tupleList);

client.relationship.write(relationshipWriteRequest).then((response) => {
    // handle response
})
```

### Check

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined,
    insecure: true
});

// Create and set the PermissionCheckRequest
let permissionCheckRequest = new permify.grpc.payload.PermissionCheckRequest();
permissionCheckRequest.setTenantId("t1");
permissionCheckRequest.setMetadata(new permify.grpc.payload.PermissionCheckRequestMetadata());

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
client.permission.check(permissionCheckRequest).then((response: permify.grpc.payload.PermissionCheckResponse) => {
    if (response.can === permify.grpc.base.CheckResult.CHECK_RESULT_ALLOWED) {
        console.log("RESULT_ALLOWED")
    } else {
        console.log("RESULT_DENIED")
    }
});
```

### Streaming Calls

```typescript
import * as permify from "@permify/permify-node";

function main() {
    const client = permify.grpc.newClient({
        endpoint: "localhost:3478",
        cert: undefined,
        insecure: true
    });

    // Create and set the PermissionLookupEntityRequest
    let lookupEntityStreamRequest = new permify.grpc.payload.PermissionLookupEntityRequest();
    lookupEntityStreamRequest.setTenantId("t1");

    // Set the request metadata
    lookupEntityStreamRequest.setMetadata(new permify.grpc.payload.PermissionLookupEntityRequestMetadata());

    // Set the entity type and permission
    lookupEntityStreamRequest.setEntityType("document");
    lookupEntityStreamRequest.setPermission("view");

    // Set the subject details
    let subject = new permify.grpc.payload.Subject();
    subject.setType("user");
    subject.setId("1");
    lookupEntityStreamRequest.setSubject(subject);

    // Perform the lookup entity stream
    const res = client.permission.lookupEntityStream(lookupEntityStreamRequest);
    handle(res)
}

async function handle(res: AsyncIterable<permify.grpc.payload.PermissionLookupEntityStreamResponse>) {
    for await (const response of res) {
        // response.toObject().entityId
    }
}
```

### Interceptors

#### Access Token Interceptor

```typescript
import * as permify from "@permify/permify-node";

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined,
    insecure: true
}, permify.grpc.newAccessTokenInterceptor("YOUR_TOKEN"))
```

### Certs

```typescript
import * as permify from "@permify/permify-node";
import fs from 'fs';

const cert = fs.readFileSync('path/to/cert.pem');

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: cert,
    insecure: true
}, permify.grpc.newAccessTokenInterceptor("YOUR_TOKEN"))
```

Permify is an **open-source authorization service** for creating and maintaining fine-grained authorizations accross
your individual applications and services.

* [Permify website](https://permify.co)
* [Permify documentation](https://docs.permify.co/docs)
* [Permify playground](https://play.permify.co)
* [Permify GitHub Repository](https://github.com/Permify/permify)

## Community & Support

Join our [Discord channel](https://discord.gg/MJbUjwskdH) for issues, feature requests, feedbacks or anything else. We
love to talk about authorization and access control :heart:

<p align="left">
<a href="https://discord.gg/MJbUjwskdH">
 <img height="70px" width="70px" alt="permify | Discord" src="https://user-images.githubusercontent.com/39353278/187209316-3d01a799-c51b-4eaa-8f52-168047078a14.png" />
</a>
<a href="https://twitter.com/GetPermify">
  <img height="70px" width="70px" alt="permify | Twitter" src="https://user-images.githubusercontent.com/39353278/187209323-23f14261-d406-420d-80eb-1aa707a71043.png"/>
</a>
<a href="https://www.linkedin.com/company/permifyco">
  <img height="70px" width="70px" alt="permify | Linkedin" src="https://user-images.githubusercontent.com/39353278/187209321-03293a24-6f63-4321-b362-b0fc89fdd879.png" />
</a>
</p>
