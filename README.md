<h1 align="center">
    <img src="https://raw.githubusercontent.com/Permify/permify/master/assets/permify-logo.svg" alt="Permify logo" width="336px" /><br />
    Permify NodeJS Client
</h1>

<p align="center">
    <a href="https://github.com/Permify/permify" target="_blank"><img src="https://img.shields.io/github/package-json/v/permify/permify-node?style=for-the-badge" alt="GitHub package.json version" /></a>&nbsp;
    <a href="https://github.com/Permify/permify" target="_blank"><img src="https://img.shields.io/github/license/Permify/permify?style=for-the-badge" alt="Permify Licence" /></a>&nbsp;
    <a href="https://discord.gg/MJbUjwskdH" target="_blank"><img src="https://img.shields.io/discord/950799928047833088?style=for-the-badge&logo=discord&label=DISCORD" alt="Permify Discord Channel" /></a>&nbsp;
</p>

# Installation

Use npm to install:

```shell
npm install @permify/permify-node
```

Use yarn to install:

```shell
yarn add @permify/permify-node
```

# How to use

### Write Schema

```typescript
const permify = require("@permify/permify-node");

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
})

client.schema.write({
    schema: `
    entity user {}
    entity document {
         relation viewer @user
         action view = viewer
    }
    `
}).then((response) => {
    // handle response
})
```

### Write Relationships

```typescript
const permify = require("@permify/permify-node");

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
})

client.relationship.write({
    metadata: {
        schemaVersion: ""
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
    }]
}).then((response) => {
    // handle response
})
```

### Check

```typescript
const permify = require("@permify/permify-node");
const {PermissionCheckResponse_Result} = require("@permify/permify-node/dist/src/grpc/generated/base/v1/service");

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
})

client.permission.check({
    metadata: {
        snapToken: "",
        schemaVersion: "",
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
    if (response.can === PermissionCheckResponse_Result.RESULT_ALLOWED) {
        console.log("RESULT_ALLOWED")
    } else {
        console.log("RESULT_DENIED")
    }
})
```

### Streaming Calls

```typescript
const permify = require("@permify/permify-node");
const {PermissionLookupEntityStreamResponse} = require("@permify/permify-node/dist/src/grpc/generated/base/v1/service");

function main() {
    const client = new permify.grpc.newClient({
        endpoint: "localhost:3478",
    })

    let res = client.permission.lookupEntityStream({
        metadata: {
            snapToken: "",
            schemaVersion: "",
            depth: 20
        },
        entityType: "document",
        permission: "view",
        subject: {
            type: "user",
            id: "1"
        }
    })

    handle(res)
}

async function handle(res: AsyncIterable<PermissionLookupEntityStreamResponse>) {
    for await (const response of res) {
        // response.entityId
    }
}
```

### Interceptors

#### Access Token Interceptor

```typescript
const permify = require("@permify/permify-node");
const {newAccessTokenInterceptor} = require("@permify/permify-node/dist/src/grpc");

const client = new permify.grpc.newClient({
    endpoint: "localhost:3478",
}, newAccessTokenInterceptor("YOUR_TOKEN"))
```

### Certs

```typescript
import {grpc as permifyGrpcClient} from "@permify/permify-node";
import {newAccessTokenInterceptor} from "@permify/permify-node/dist/src/grpc";
import fs from 'fs';

const cert = fs.readFileSync('path/to/cert.pem');

const client = new permifyGrpcClient.newClient({
    endpoint: "localhost:3478",
    cert: cert,
}, newAccessTokenInterceptor("YOUR_TOKEN"))
```

Permify is an **open-source authorization service** for creating and maintaining fine-grained authorizations accross
your individual applications and services.

* [Permify website](https://permify.co)
* [Permify documentation](https://docs.permify.co/docs/intro)
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
