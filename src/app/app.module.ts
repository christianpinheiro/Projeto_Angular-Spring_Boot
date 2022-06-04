import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MensagemModule } from './mensagem/mensagem.module';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    MensagemModule,
    LoginModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
