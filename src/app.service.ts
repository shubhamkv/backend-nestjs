import { Injectable } from '@nestjs/common';
import { Book, books } from './Data';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }
}
