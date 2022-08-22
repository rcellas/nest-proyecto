import { Controller, Delete, Get, Param, Post, Put,Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  // metodo que sirve para inyectar el servicio en el controlador
  // private es para que solo se pueda usar dentro de la clase
  // readonly es para que no se pueda modificar el valor y emcapsular el servicio
  constructor(private readonly booksService: BooksService) {}
  @Get()
  findAll(@Query('order') order: string) { 
    let params = []; 

    if (order !== undefined) {
       params.push(`'${order}'`); 
    }

    return this.booksService.findAll(params); 
  }
  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }
  @Post()
  createBook() {
    return 'createBook funcionando';
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.booksService.deleteBook(bookId);
  }
  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string) {
    return `updateBook funcionando con bookId: ${bookId}`;
  }
}
