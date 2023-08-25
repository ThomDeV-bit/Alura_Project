/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common"

import { Response } from "express"
import { Observable, map } from "rxjs"


export interface ISearGlobalResponse<T> {

    MENSAGEM: string
    STATUS: string
    RESPOSTA: T[]

}

export class GlobalSearchResponse<T> implements NestInterceptor<T, ISearGlobalResponse<T>>{
    intercept(context: ExecutionContext, next: CallHandler): Observable<ISearGlobalResponse<T>> {
        const hhtpContext = context.switchToHttp()
        const response = hhtpContext.getResponse<Response>()
        const MENSAGEM = response.req.method 
        switch (MENSAGEM) {
            case "GET":
                
                break;
        
            default:
                break;
        }

        return next.handle().pipe(
            map(responseBody => ({
    
            
                STATUS: String(
                    response.statusCode >= 200 && response.statusCode <= 299
                        ? 'SUCESSO'
                        : 'ERRO'),
                MENSAGEM: String(
                    response.req.method == 'POST'
                        ? 'Executado com sucesso'
                        : 'error' || response.req.method == 'GET'
                            ? 'Consulta realizada com sucesso'
                            : 'Erro' || response.req.method == 'PUT'
                                ? 'Editado com sucesso'
                                : 'ERRO' || response.req.method == 'DELETE'
                                    ? 'Excluido com sucesso'
                                    : 'ERRO'),

                RESPOSTA: Array.isArray(responseBody) ? responseBody : [responseBody]
            })
            ))
    }
}