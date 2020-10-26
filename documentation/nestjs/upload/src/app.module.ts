import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MulterModule.register({
    dest: './files',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
