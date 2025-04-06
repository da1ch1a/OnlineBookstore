import { BookId } from 'Domain/models/Book/BookId/BookId';
import { IBookRepository } from '../../../models/Book/IBookRepository';

export class ISBNDuplicationCheckDomainService {
  constructor(private bookRepository: IBookRepository) {}

  async execute(isbn: BookId): Promise<boolean> {
    // データベースに問い合わせて重複があるか確認する
    const duplicateISBNBook = await this.bookRepository.find(isbn);
    const isDuplicateISBN = !!duplicateISBNBook;

    return isDuplicateISBN;
  }
}
