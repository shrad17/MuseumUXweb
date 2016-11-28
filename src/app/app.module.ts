import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { SubeventComponent } from './events/event-list/subevent.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCartAddComponent } from './shop-cart/shop-cart-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventListComponent,
    SubeventComponent,
    EventDetailComponent,
    ShopCartComponent,
    ShopCartAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
