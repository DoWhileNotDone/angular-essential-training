export interface MediaItem {
    id: number,
    name: string,
    medium: string,
    category: string ,
    year: number,
    watchedOn: number,
    isFavorite: boolean,  
}

export interface MediaItemsResponse {
    mediaItems: MediaItem[],
}