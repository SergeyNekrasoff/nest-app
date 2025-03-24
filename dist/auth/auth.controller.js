"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../users/entities/user.entity");
const public_decorator_1 = require("./decorators/public.decorator");
const utils_1 = require("../utils");
const typed_event_emitter_class_1 = require("../events/typed-event-emitter.class");
let AuthController = class AuthController {
    constructor(authService, eventEmitter) {
        this.authService = authService;
        this.eventEmitter = eventEmitter;
    }
    async login(payload) {
        return this.authService.login(payload);
    }
    async signUp(payload) {
        const user = {
            id: payload.id,
            username: payload.username,
            email: payload.email,
            password: payload.password
        };
        this.eventEmitter.emit('user.welcome', {
            name: payload.username,
            email: payload.email,
        });
        this.eventEmitter.emit('user.verify-email', {
            name: payload.username,
            email: payload.email,
            otp: (0, utils_1.generateOTP)(),
        });
        return this.authService.register(user);
    }
    async logout() {
        return { status: 200, message: 'Logged out successfully' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'User login' }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'User register' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        typed_event_emitter_class_1.TypedEventEmitter])
], AuthController);
//# sourceMappingURL=auth.controller.js.map