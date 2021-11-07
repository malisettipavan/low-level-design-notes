
enum ResponseTypes {
    OK_Response = "OK",
    ERR_Response = "ERROR"
}

class PostResponse {
    
    status : string;
    message : any;

    constructor(status : string, message : any){
        this.status = status;
        this.message = message;
    }
    
    static ok(message : any) : PostResponse {
        return new PostResponse(ResponseTypes.OK_Response, message);
    }

    static error(message : any) : PostResponse {
        return new PostResponse(ResponseTypes.ERR_Response, message);
    }

}

export {PostResponse};