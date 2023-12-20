export class BookDetail {
    public title: string;
    public infoLink: string;
    public imageLinks: string;

    constructor(obj?: any) {
        this.title = obj && obj.title || null;
        this.infoLink = obj && obj.infoLink || null;
        this.imageLinks = obj && obj.imageLinks || null;
    }
}
