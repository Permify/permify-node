import {ClientMiddleware, createChannel, createClientFactory, ChannelCredentials} from 'nice-grpc';

import {
    PermissionDefinition,
    SchemaDefinition,
    DataDefinition,
    TenancyDefinition,
    WatchDefinition,
    BundleDefinition
} from './generated/base/v1/service';

import {Config} from "./config";

/**
 * Create a new gRPC service client for of Permify.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param conf A configuration object for bootstrap connection
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Permission API of Permify.
 */
export function newClient(conf: Config, ...interceptors: ClientMiddleware[]) {
    const channel = (conf.insecure)
    ? createChannel(conf.endpoint, ChannelCredentials.createInsecure())
    : createChannel(conf.endpoint, ChannelCredentials.createSsl(conf.cert, conf.pk, conf.certChain));
    
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return {
        permission: factory.create(PermissionDefinition, channel),
        schema: factory.create(SchemaDefinition, channel),
        data: factory.create(DataDefinition, channel),
        bundle: factory.create(BundleDefinition, channel),
        tenancy: factory.create(TenancyDefinition, channel),
        watch: factory.create(WatchDefinition, channel)
    };
}