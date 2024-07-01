/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, KoaTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WarehouseController } from './../src/warehouse/warehouse_controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BooksController } from './../src/books/books_controller';
import type { Context, Next, Middleware, Request as KRequest, Response as KResponse } from 'koa';
import type * as KoaRouter from '@koa/router';


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "BookID": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ShelfId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_ShelfId.number_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"double"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_BookID.number_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"double"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Book": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BookID"},
            "name": {"dataType":"string","required":true},
            "author": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "image": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new KoaTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(router: KoaRouter) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        router.put('/warehouses/book',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.placeBookOnShelf)),

            async function WarehouseController_placeBookOnShelf(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"count":{"dataType":"double","required":true},"shelf":{"ref":"ShelfId","required":true},"bookId":{"ref":"BookID","required":true}}},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'placeBookOnShelf',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/warehouses/book/:bookId/shelf/:shelf',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.getCopiesOnShelf)),

            async function WarehouseController_getCopiesOnShelf(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    bookId: {"in":"path","name":"bookId","required":true,"ref":"BookID"},
                    shelf: {"in":"path","name":"shelf","required":true,"ref":"ShelfId"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'getCopiesOnShelf',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/warehouses/book/:bookId',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.getCopies)),

            async function WarehouseController_getCopies(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    bookId: {"in":"path","name":"bookId","required":true,"ref":"BookID"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'getCopies',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/warehouses/order/:orderId',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.getOrder)),

            async function WarehouseController_getOrder(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    orderId: {"in":"path","name":"orderId","required":true,"ref":"OrderId"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'getOrder',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/warehouses/order',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.placeOrder)),

            async function WarehouseController_placeOrder(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    body: {"in":"body","name":"body","required":true,"ref":"Record_BookID.number_"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'placeOrder',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/warehouses/orders',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.listOrders)),

            async function WarehouseController_listOrders(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'listOrders',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.delete('/warehouses/order/:orderId',
            ...(fetchMiddlewares<Middleware>(WarehouseController)),
            ...(fetchMiddlewares<Middleware>(WarehouseController.prototype.removeOrder)),

            async function WarehouseController_removeOrder(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    orderId: {"in":"path","name":"orderId","required":true,"ref":"OrderId"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseController();

            return templateService.apiHandler({
              methodName: 'removeOrder',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.post('/books',
            ...(fetchMiddlewares<Middleware>(BooksController)),
            ...(fetchMiddlewares<Middleware>(BooksController.prototype.createOrUpdateBook)),

            async function BooksController_createOrUpdateBook(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    book: {"in":"body","name":"book","required":true,"ref":"Book"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BooksController();

            return templateService.apiHandler({
              methodName: 'createOrUpdateBook',
              controller,
              context,
              validatedArgs,
              successStatus: 200,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.delete('/books/:id',
            ...(fetchMiddlewares<Middleware>(BooksController)),
            ...(fetchMiddlewares<Middleware>(BooksController.prototype.deleteBook)),

            async function BooksController_deleteBook(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BooksController();

            return templateService.apiHandler({
              methodName: 'deleteBook',
              controller,
              context,
              validatedArgs,
              successStatus: 200,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/books',
            ...(fetchMiddlewares<Middleware>(BooksController)),
            ...(fetchMiddlewares<Middleware>(BooksController.prototype.listBooks)),

            async function BooksController_listBooks(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    filters: {"in":"query","name":"filters","dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BooksController();

            return templateService.apiHandler({
              methodName: 'listBooks',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        router.get('/books/:id',
            ...(fetchMiddlewares<Middleware>(BooksController)),
            ...(fetchMiddlewares<Middleware>(BooksController.prototype.getBook)),

            async function BooksController_getBook(context: Context, next: Next) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BooksController();

            return templateService.apiHandler({
              methodName: 'getBook',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
