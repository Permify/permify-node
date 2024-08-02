import {ClientMiddleware, createChannel, createClientFactory, ChannelCredentials} from 'nice-grpc';

import {
    TenancyService, 
    BundleService, 
    DataService, 
    WatchService, 
    SchemaService, 
    PermissionService
} from '@buf/permifyco_permify.grpc_node/base/v1/service_pb';


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
    let channel;
    if (conf.cert != null) {
        channel = createChannel(conf.endpoint, ChannelCredentials.createSsl(conf.cert));
    } else {
        channel = createChannel(conf.endpoint);
    }
    let factory = createClientFactory();
    for (const interceptor of interceptors) {
        factory = factory.use(interceptor);
    }
    return {
        permission: factory.create(PermissionService, channel),
        schema: factory.create(SchemaService, channel),
        data: factory.create(DataService, channel),
        bundle: factory.create(BundleService, channel),
        tenancy: factory.create(TenancyService, channel),
        watch: factory.create(WatchService, channel)
    };
}