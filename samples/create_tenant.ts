import * as permify from '../src/grpc';


const request = new permify.payload.TenantCreateRequest({
    id: "t144444",
    name: "lvksv" 
});
request.setId("t13333");
request.setName("lsjv");

const client = permify.newClient({
    endpoint: "localhost:3478",
    cert: null
});

client.tenancy.create(request).then((response: any) => {
    console.log(response);

    // handle response
})