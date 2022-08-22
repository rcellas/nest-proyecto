import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  // aquí iria la llamada a la base de datos

  // todos los libros
  findAll(params): any {
    let msg = `findAll funcionando. Parámetros:`;

    if (params.order !== undefined) {
      msg = msg + ` order: ${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }

  // un libro
  findBook(bookId: string) {
    return `findBook funcionando con bookId: ${bookId}`;
  }
  // nuevo libro
  createBook() {
    return 'createBook funcionando nuevo libro';
  }

  // borrar libro
  deleteBook(bookId: string) {
    return `deleteBook funcionando con bookId: ${bookId}`;
  }

  updateBook(bookId: string) {
    return `updateBook funcionando con bookId: ${bookId}`;
  }
}
