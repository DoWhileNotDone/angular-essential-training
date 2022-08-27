import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { CategoryListPipe } from "./category-list.pipe";
import { FavouriteDirective } from "./favourite.directive";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { MockXHRBackend } from "./mock-xhr-backend";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        routing        
    ],
    declarations: [
        AppComponent,
        CategoryListPipe,
        FavouriteDirective,
        MediaItemComponent,
        MediaItemListComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
    providers: [
        {
            provide: HttpXhrBackend,
            useClass: MockXHRBackend,
        }
    ],
})
export class AppModule {}

