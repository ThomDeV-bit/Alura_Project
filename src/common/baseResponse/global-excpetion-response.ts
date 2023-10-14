import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Response } from 'express';
import { IGlobalResponse } from './global-response';

@Catch()
export class GlobalExceptionResponse implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();

        const { httpAdapter } = this.httpAdapterHost;

        const response = ctx.getResponse<Response>();

        const STATUS = response.req.statusCode > 299 ? 'ERRO' : 'SUCESSO';

        let MENSAGEM = response.req.method;
        switch (MENSAGEM) {
            case 'GET':
                MENSAGEM = 'Erro ao Consultar';

                break;
            case 'POST':
                MENSAGEM = 'Erro ao Executar';

                break;
            case 'DELETE':
                MENSAGEM = 'Erro ao Deletar';

                break;
            case 'PUT':
                MENSAGEM = 'Erro ao Alterar';

                break;

            default:
                'Nenhuma requisição realizada';
                break;
        }
        const responseBody: IGlobalResponse<any> = {
            MENSAGEM,
            STATUS,
            RESPOSTA: [response.req.body],
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, response.req.statusCode);
    }
}
