import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    'selector': 'mw-media-item',
    'templateUrl': './media-item.component.html',
    'styleUrls': [
        './media-item.component.css',
    ],
})
export class MediaItemComponent {
    @Input('mediaItem') mediaItem;
    @Output() delete = new EventEmitter();
    @Output() watch = new EventEmitter();
    onDelete = () => this.delete.emit(this.mediaItem);
    onWatch = () => this.watch.emit(this.mediaItem);
}
