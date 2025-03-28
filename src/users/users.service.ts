import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  /**
   * this is function is used to validate User password in User Entity.
   * @param userData this will type of User in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  async validateUser(userData: User): Promise<User> {
    const email = userData.email
    const password = userData.password
    const user = await this.usersRepository.findOne({ where: { email } })

    const isMatch: boolean = bcrypt.compareSync(password, user.password)

    // if (!user || !isMatch) {
    //   console.log(`is not match`)
    //   throw new UnauthorizedException('Invalid credentials')
    // }

    return user
  }

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hash = await bcrypt.hashSync(createUserDto.password, 6)
    const user = this.usersRepository.create({
      username: createUserDto.username,
      password: hash,
      email: createUserDto.email
    })
    
    return this.usersRepository.save(user)
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */
  async findById(id: number): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }

  /**
   * this function used to get data of use whose email is passed in parameter
   * @param email is type of string, which represent the email of user.
   * @returns promise of user
   */
  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } })
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of update user
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.update(id, updateUserDto)
    if (!user) {
      throw new Error('User not found')
    }
    return this.findById(id)
  }

  /**
   * this function is used to remove or delete user from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async getUser(id: any): Promise<User> {
    return await this.usersRepository.findOne({
      where: { id },
      relations: ['profile'],
    })
  }
}
