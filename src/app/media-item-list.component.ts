import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MediaItemService } from "./media-item.service";
import { MediaItem } from "./media-item.interfaces";

@Component({
    'selector': 'mw-media-item-list',
    'templateUrl': './media-item-list.component.html',
    'styleUrls': [
        './media-item-list.component.css',
    ],
})
export class MediaItemListComponent implements OnInit{

    medium: string = '';
    mediaItems: MediaItem[];

    constructor(
      private mediaItemService: MediaItemService,
      private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
      this.activatedRoute.paramMap
        .subscribe(
          paramMap => {
            let medium = paramMap.get('medium');
            if (medium.toLowerCase() === 'all') {
              medium = '';
            }
            this.getMediaItems(medium);
          }
        );
    }

    getMediaItems(medium: string) {
      this.medium = medium;
      this.mediaItemService.get(medium).subscribe(
        mediaItems  => this.mediaItems = mediaItems
      );
    }

    onMediaItemDelete(mediaItem) {
      this.mediaItemService.delete(mediaItem).subscribe(
        () => this.getMediaItems(this.medium)
      );
    }

    onMediaItemWatch(mediaItem) {
      mediaItem.watchedOn = Date.now();
    }
}
