import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'


@Crud({
    model:User
})
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly mode){} // 导入数据库中User模块数据
}
