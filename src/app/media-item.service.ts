import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { MediaItem, MediaItemsResponse } from "./media-item.interfaces";

@Injectable({
    providedIn: 'root'
})
export class MediaItemService {

    constructor(private http: HttpClient) {}

    get(medium: string) {
        const getOptions = {
            params: {
                medium
            } 
        };
        return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
        .pipe(
            map(
                (response: MediaItemsResponse) => response.mediaItems
            ),
            catchError(this.handleError)
        );
    }

    add(mediaItem: MediaItem) {
        return this.http.post<MediaItem>('mediaitems', mediaItem).pipe(catchError(this.handleError));

    }

    delete(mediaItem: MediaItem) {
        return this.http.delete<MediaItem>(`mediaitems/${mediaItem.id}`).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('oops');
    }
}