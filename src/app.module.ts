import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
  imports: [],
  // si esto no esta dado de alta, no se puede usar el servicio en el controlador
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
