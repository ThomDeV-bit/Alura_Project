import { pinoHttp } from 'pino-http';

export const pinoMock = pinoHttp({
    enabled: true,
    level: 'debug',
    transport: {
        targets: [
            {
                level: 'debug',
                target: 'pino-http-print',
                options: {
                    colorize: true,
                },
            },
            {
                level: 'debug',
                target: 'pino-pretty',
                options: {
                    colorize: true,
                },
            },
        ],
    },
});
// transport: {
//     targets: [
//         {
//             level: 'debug',
//             target: 'pino-http-print',
//             options: {
//                 colorize: true,
//             },
//         },
//         {
//             level: 'debug',
//             target: 'pino-pretty',
//             options: {
//                 colorize: true,
//             },
//         },
//     ],
// },
