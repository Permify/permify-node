import {CallOptions, ClientMiddleware, ClientMiddlewareCall} from 'nice-grpc';
import {Metadata} from 'nice-grpc-common';

/**
 * Create a simple gRPC `Interceptor` that attaches a given access token to any request
 * a client sends. The token is attached with the `Bearer` auth-scheme.
 *
 * The interceptor does not insert the access token if the intercepted call
 * already has an `Authorization` header.
 *
 * @param token The access token that should be added to the gRPC request.
 *
 * @returns A gRPC client middleware (interceptor) that attaches the given token to each request, if no other authorization header is present.
 */
export const newAccessTokenInterceptor = (token: string): ClientMiddleware =>
    async function* <Request, Response>(call: ClientMiddlewareCall<Request, Response>, options: CallOptions) {
        options.metadata ??= new Metadata();
        if (!options.metadata.has('authorization')) {
            options.metadata.set('authorization', `Bearer ${token}`);
        }
        return yield* call.next(call.request, options);
    };
