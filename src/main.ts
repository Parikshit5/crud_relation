import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';


function globalMiddleWareOne(req:Request,res:Response,next:NextFunction){
  console.log("This is the global middleware number 1")
  next();
}

function globalMiddleWareTwo(req:Request,res:Response,next:NextFunction){
  console.log("This is the global middleware number 2")
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('account_report')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);

}
bootstrap();
