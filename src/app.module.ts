import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://user:pass@localhost:27020/main?authSource=admin',
      { retryAttempts: 10 },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
