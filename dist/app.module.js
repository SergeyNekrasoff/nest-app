"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const db_connection_1 = require("./db.connection");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const chat_module_1 = require("./chat/chat.module");
const documents_module_1 = require("./documents/documents.module");
const config_1 = require("@nestjs/config");
const image_module_1 = require("./image/image.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const jwt_strategy_1 = require("./auth/strategies/jwt.strategy");
const email_module_1 = require("./email/email.module");
const email_service_1 = require("./email/email.service");
const event_emitter_1 = require("@nestjs/event-emitter");
const typed_event_emitter_module_1 = require("./events/typed-event-emitter.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                ...db_connection_1.default,
                autoLoadEntities: true,
                synchronize: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            chat_module_1.ChatModule,
            documents_module_1.DocumentsModule,
            image_module_1.ImageModule,
            email_module_1.EmailModule,
            event_emitter_1.EventEmitterModule.forRoot(),
            typed_event_emitter_module_1.TypedEventEmitterModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            jwt_strategy_1.JwtStrategy,
            email_service_1.EmailService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map