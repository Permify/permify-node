import { ClientMiddleware, createChannel, createClientFactory, ChannelCredentials, RawClient } from 'nice-grpc';
import type { FromTsProtoServiceDefinition, TsProtoServiceDefinition } from 'nice-grpc/lib/service-definitions/ts-proto';
import {
    PermissionDefinition,
    SchemaDefinition,
    DataDefinition,
    TenancyDefinition,
    WatchDefinition,
    BundleDefinition
} from './generated/base/v1/service';
import { Config } from './config';

// Helper type to extract the client type from a service definition
type ClientFromDefinition<T extends TsProtoServiceDefinition> = RawClient<FromTsProtoServiceDefinition<T>>;

/**
 * Return type for the Permify gRPC client.
 * This explicit type ensures proper type preservation through export layers.
 */
export type PermifyClient = {
    permission: ClientFromDefinition<typeof PermissionDefinition>;
    schema: ClientFromDefinition<typeof SchemaDefinition>;
    data: ClientFromDefinition<typeof DataDefinition>;
    bundle: ClientFromDefinition<typeof BundleDefinition>;
    tenancy: ClientFromDefinition<typeof TenancyDefinition>;
    watch: ClientFromDefinition<typeof WatchDefinition>;
};

/**
 * Create a new gRPC service client for Permify.
 * The client can be configured with multiple client interceptors. For authentication interceptors,
 * see the interceptors in this package.
 *
 * @param conf A configuration object for bootstrap connection
 * @param interceptors A list of interceptors that should be used for the client.
 *
 * @returns A new gRPC service client for the Permission API of Permify.
 */
export function newClient(conf: Config, ...interceptors: ClientMiddleware[]): PermifyClient {
    const channel = conf.insecure
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