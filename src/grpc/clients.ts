import {ClientMiddleware, createChannel, createClientFactory} from 'nice-grpc';
// add ChannelCredentials

import {
    PermissionClient,
    PermissionDefinition,
    SchemaClient,
    SchemaDefinition,
    RelationshipClient,
    RelationshipDefinition
} from './generated/base/v1/service';

/**
 * Create a new gRPC service client for the Permission API of Permify.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your Permify instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Permission API of Permify.
 */
export function newPermissionClient(apiEndpoint: string, ...interceptors: ClientMiddleware[]): PermissionClient {
    const channel = createChannel(apiEndpoint);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(PermissionDefinition, channel);
}

/**
 * Create a new gRPC service client for the Schema API of Permify.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your Permify instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Schema API of Permify.
 */
export function newSchemaClient(apiEndpoint: string, ...interceptors: ClientMiddleware[]): SchemaClient {
    const channel = createChannel(apiEndpoint);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(SchemaDefinition, channel);
}

/**
 * Create a new gRPC service client for the Relationship API of Permify.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param apiEndpoint The API endpoint of your Permify instance.
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Relationship API of Permify.
 */
export function newRelationshipClient(apiEndpoint: string, ...interceptors: ClientMiddleware[]): RelationshipClient {
    const channel = createChannel(apiEndpoint);
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return factory.create(RelationshipDefinition, channel);
}
