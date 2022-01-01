import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DiscountEditorComponent } from 'src/services/discount.editor.component';
import { DiscountService } from 'src/services/discount.service';
import { PaDiscountDisplayComponent } from 'src/services/pa.discount.display.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompositeProductComponent } from './components/composite-product.component';
import { NewProductComponent } from './components/new-product-component/new-product.component';
import { ProductTableComponent } from './components/product-table-component/product-table.component';
import { ProductAttributeSuccessWhiteText } from './directives/addsuccsswhitetext.directive';
import { SimpleDataSource } from './model/datasource.model';
import { Model } from './model/repository.model';
import { PaDiscountPipe } from './pipes/discount.pipe';
import { ProductComponent } from './product.component';
import { ReactiveProductComponent } from './reactive-form/reactive-product.component';
import { LogService } from './serviceProviders/log.service';
import { PaStructureDirective } from './structuralDirectives/pa.structure.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReactiveProductComponent,
    ProductAttributeSuccessWhiteText,
    PaStructureDirective,
    PaDiscountDisplayComponent,
    DiscountEditorComponent,
    PaDiscountPipe,
    CompositeProductComponent,
    NewProductComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DiscountService, Model, SimpleDataSource, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
