export class BookDetail {
    public title: string;
    public infoLink: string;
    public imageLinks: string;
    public imgBook: string = '../assets/book.jpg';
    public isFavorite: boolean = true;

    constructor(obj?: any) {
        this.title = obj && obj.title || null;
        this.infoLink = obj && obj.infoLink || null;
        this.imageLinks = obj && obj.imageLinks || this.imgBook;
    }
}
