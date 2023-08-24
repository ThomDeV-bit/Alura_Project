/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Response } from 'express';




export interface BaseResponse<T> {

    STATUS: string
    MENSAGEM: string
    RESPOSTA: T[]


}

@Injectable()


export class GlobalResponse<T> implements NestInterceptor<T, BaseResponse<T>> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    intercept(context: ExecutionContext, next: CallHandler): Observable<BaseResponse<T>> {

        const hhtpContext = context.switchToHttp()
        const response = hhtpContext.getResponse<Response>()

        return next.handle().pipe(map(responseBody => ({
            STATUS: String(

                response.statusCode >= 200 && response.statusCode <= 299
                    ? response.statusCode
                    : 'ERRO'
            ),
            MENSAGEM: 'Consulta criada com sucesso',
            RESPOSTA: Array.isArray(responseBody) ? responseBody : [responseBody]
        }))
        )
    }
}