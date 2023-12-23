import { BooksApiResponseItem } from "./books.types";

const DEFAULT_IMAGE_URL = '../assets/book.jpg';

export class BookDetail {
    public id: string;
    public title: string;
    public detailsUrl: string;
    public imageUrl: string;
    public isFavorite: boolean = false;

    constructor(book: Partial<BookDetail>) {
        if (!book.id) {
            throw Error('Invalid book');
        } 

        this.id = book.id;
        this.title = book.title ?? '';
        this.detailsUrl = book.detailsUrl ?? '';
        this.imageUrl = book.imageUrl ?? DEFAULT_IMAGE_URL;
    }

    public static fromApi(book: BooksApiResponseItem): BookDetail {
        const id = book?.id;
        const title = book?.volumeInfo?.title;
        const detailsUrl = book?.volumeInfo?.infoLink;
        const imageUrl = book?.volumeInfo?.imageLinks?.thumbnail;

        return new BookDetail({
            id,
            title,
            detailsUrl,
            imageUrl
        })
    }
}
