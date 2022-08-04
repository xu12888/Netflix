import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';


const models = TypegooseModule.forFeature([User])

@Global() //定义为全局模块
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/topfullstack',{
      
    }),
    models,  // 导入模型
  ], // 连接数据库
  providers: [DbService],
  exports: [DbService, models],  //导出的模型  
})
export class DbModule {}
