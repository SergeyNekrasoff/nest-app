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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async validateUser(userData) {
        const email = userData.email;
        const password = userData.password;
        const user = await this.usersRepository.findOne({ where: { email } });
        const isMatch = bcrypt.compareSync(password, user.password);
        return user;
    }
    async create(createUserDto) {
        const hash = await bcrypt.hashSync(createUserDto.password, 6);
        const user = this.usersRepository.create({
            username: createUserDto.username,
            password: hash,
            email: createUserDto.email
        });
        return this.usersRepository.save(user);
    }
    async findAll() {
        return this.usersRepository.find();
    }
    async findById(id) {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    async findOne(email) {
        return this.usersRepository.findOne({ where: { email } });
    }
    async update(id, updateUserDto) {
        const user = await this.usersRepository.update(id, updateUserDto);
        if (!user) {
            throw new Error('User not found');
        }
        return this.findById(id);
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
    async getUser(id) {
        return await this.usersRepository.findOne({
            where: { id },
            relations: ['profile'],
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map