import * as permify from '../src';


const request = new permify.grpc.payload.TenantCreateRequest({
    id: "t144444",
    name: "lvksv" 
});
request.setId("t13333");
request.setName("lsjv");

const client = permify.grpc.newClient({
    endpoint: "localhost:3478",
    cert: undefined
});

client.tenancy.create(request).then((response) => {
    console.log(response);

    // handle response
})