import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAttributeSuccessWhiteText } from './directives/addsuccsswhitetext.directive';
import { ProductComponent } from './product.component';
import { ReactiveProductComponent } from './reactive-form/reactive-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReactiveProductComponent,
    ProductAttributeSuccessWhiteText
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
