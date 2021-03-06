import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService], // inject (Injectable) into other parts of our application.
  bootstrap: [AppComponent]
})
export class AppModule { }
