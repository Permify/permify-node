<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Permify/permify/raw/master/assets/logo-permify-dark.png">
    <img alt="Permify logo" src="https://github.com/Permify/permify/raw/master/assets/logo-permify-light.png" width="40%">
  </picture>
</div>
<h1 align="center">
    Permify NodeJS Client
</h1>

<p align="center">
    <a href="https://github.com/Permify/permify-node/releases" target="_blank"><img src="https://img.shields.io/github/package-json/v/permify/permify-node?style=for-the-badge" alt="GitHub package.json version" /></a>&nbsp;
    <a href="https://github.com/Permify/permify-node?tab=readme-ov-file#Apache-2.0-1-ov-file" target="_blank"><img src="https://img.shields.io/github/license/Permify/permify?style=for-the-badge" alt="Permify Licence" /></a>&nbsp;
    <a href="https://discord.gg/MJbUjwskdH" target="_blank"><img src="https://img.shields.io/discord/950799928047833088?style=for-the-badge&logo=discord&label=DISCORD" alt="Permify Discord Channel" /></a>&nbsp;
</p>

This client makes it easy to interact with [Permify](https://github.com/Permify/permify) from your Node.js application, providing type-safe access to Permify's authorization capabilities.

## Features

- Full TypeScript support
- Promise-based API
- Support for all Permify gRPC endpoints
- Built-in error handling
- Interceptor support for authentication and logging
- Streaming support for real-time updates

# Installation

Use npm to install:

```shell
npm install @permify/permify-node
```

Use yarn to install (Please be aware that Yarn versions greater than v1.10.0 and less than v2 are not supported):

```shell
yarn add @permify/permify-node
```

# Getting Started

## Prerequisites

- Node.js 14.x or later
- A running instance of Permify server (local or cloud)
- Basic understanding of Permify's authorization model

## Basic Usage

### 1. Initialize the Client

First, create a new client instance to connect to your Permify server:

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
  endpoint: "localhost:3478", // Replace with your Permify server URL
  cert: undefined, // Optional: SSL certificate
  insecure: true, // Set to false in production
  timeout: 5000, // Request timeout in milliseconds
});
```

### 2. Tenant Management

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
  endpoint: "localhost:3478",
  cert: undefined,
  insecure: true,
});

client.tenancy
  .create({
    id: "t1",
    name: "Tenant 1",
  })
  .then((response) => {
    console.log(response);
    // handle response
  });
```

### 3. Schema Management

Define your authorization model using Permify's schema language. Here's a more comprehensive example:

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
  endpoint: "localhost:3478",
  cert: undefined,
  insecure: true,
});

let schema = `
    entity user {}
    
    entity document {
       relation viewer @user
       
       action view = viewer
    }
`;

// Write the schema
client.tenancy
  .create({
    tenantId: "t1",
    schema: schema,
  })
  .then((response) => {
    // handle response
  });
```

### 4. Relationship Management

Create relationships between entities to define access rules. Here are some common patterns:

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
  endpoint: "localhost:3478",
  cert: undefined,
  insecure: true,
});

client.relationship
  .write({
    tenantId: "t1",
    metadata: {
      schemaVersion: "",
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
          id: "1",
        },
      },
    ],
  })
  .then((response) => {
    // handle response
  });
```

### 5. Permission Checks

Verify if a user has a specific permission on a resource. Here are different ways to perform checks:

```typescript
import * as permify from "@permify/permify-node";

const client = permify.grpc.newClient({
  endpoint: "localhost:3478",
  cert: undefined,
  insecure: true,
});

client.permission
  .check({
    tenantId: "t1",
    metadata: {
      snapToken: "",
      schemaVersion: "",
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
  .then((response) => {
    if (response.can === permify.grpc.base.CheckResult.CHECK_RESULT_ALLOWED) {
      console.log("RESULT_ALLOWED");
    } else {
      console.log("RESULT_DENIED");
    }
  });
```

## Advanced Usage

### 1. Real-time Updates with Streaming

Subscribe to permission changes in real-time:

```typescript
import * as permify from "@permify/permify-node";

function main() {
  const client = permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined,
    insecure: true,
  });

  let res = client.permission.lookupEntityStream({
    tenantId: "t1",
    metadata: {
      snapToken: "",
      schemaVersion: "",
      depth: 20,
    },
    entityType: "document",
    permission: "view",
    subject: {
      type: "user",
      id: "1",
    },
  });

  handle(res);
}

async function handle(
  res: AsyncIterable<permify.grpc.payload.PermissionLookupEntityStreamResponse>
) {
  for await (const response of res) {
    // response.entityId
  }
}
```

### 2. Interceptors

#### Access Token Interceptor:

```typescript
import * as permify from "@permify/permify-node";

const client = new permify.grpc.newClient(
  {
    endpoint: "localhost:3478",
    cert: undefined,
    insecure: true,
  },
  permify.grpc.newAccessTokenInterceptor("YOUR_TOKEN")
);
```

### Certs

```typescript
import * as permify from "@permify/permify-node";
import fs from "fs";

const cert = fs.readFileSync("path/to/cert.pem");

const client = new permify.grpc.newClient(
  {
    endpoint: "localhost:3478",
    cert: cert,
    insecure: true,
  },
  permify.grpc.newAccessTokenInterceptor("YOUR_TOKEN")
);
```

## Error Handling

All API calls return Promises that can be handled with try/catch:

```typescript
try {
  const response = await client.tenancy.create({
    id: "t1",
    name: "Production Tenant",
  });
  console.log("Tenant created:", response);
} catch (error) {
  console.error("Error creating tenant:", error);
  // Handle specific error types
  if (error.code === grpc.status.ALREADY_EXISTS) {
    console.log("Tenant already exists");
  }
}
```

## Resources

- [Permify Website](https://permify.co)
- [Comprehensive Documentation](https://docs.permify.co/docs)
- [API Reference](https://docs.permify.co/docs/api-overview)
- [GitHub Repository](https://github.com/Permify/permify)

## Contributing

Contributions are welcome! Please read our [contributing guidelines](https://github.com/Permify/permify-node/CONTRIBUTING.md) to get started.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

- [Permify playground](https://play.permify.co)
- [Permify GitHub Repository](https://github.com/Permify/permify)

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
