export type BooksApiResponse = {
    totalItems: number;
    items: any[];
}

export type BooksApiResponseItem = {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks: {
            thumbnail: string;
        };
        infoLink: string;
    }
}
