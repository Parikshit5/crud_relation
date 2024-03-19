import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AccountReportMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        // console.log("This is a class based Middleware implemented for account report ");
        let protocol=req.protocol; //http https
        let host=req.get('host');  //localhost
        let url=req.originalUrl;   //users
        let method=req.method;     //get post
        let date=new Date().toDateString();
        console.log(protocol+"://"+host+url+" "+method+" "+date);
        next();
    }

}