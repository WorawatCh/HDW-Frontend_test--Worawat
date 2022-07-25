import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogModule } from './modules/catalog/catalog.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
     FormsModule, 
     ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
