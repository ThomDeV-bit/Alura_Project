import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Response } from 'express';

export interface IGlobalResponse<T> {
  MENSAGEM: string;
  STATUS: string;
  RESPOSTA: T[];
}

export class GlobalResponse<T>
  implements NestInterceptor<T, IGlobalResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IGlobalResponse<T>> {
    const hhtpContext = context.switchToHttp();
    const response = hhtpContext.getResponse<Response>();
    const STATUS =
      response.statusCode >= 200 && response.statusCode <= 299
        ? 'SUCESSO'
        : 'ERRO';
    let MENSAGEM = response.req.method;
    switch (MENSAGEM) {
      case 'GET':
        MENSAGEM = 'Consulta realizada com sucesso';

        break;
      case 'POST':
        MENSAGEM = 'Executado com sucesso';

        break;
      case 'DELETE':
        MENSAGEM = 'Deletado com sucesso';

        break;
      case 'PUT':
        MENSAGEM = 'Alteração realizada com sucesso';

        break;

      default:
        'Nenhuma requisição realizada';
        break;
    }
    return next.handle().pipe(
      map((responseBody) => ({
        STATUS,
        MENSAGEM,
        RESPOSTA: Array.isArray(responseBody) ? responseBody : [responseBody],
      })),
    );
  }
}
