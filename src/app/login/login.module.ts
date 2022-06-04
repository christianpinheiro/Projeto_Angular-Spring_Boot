import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MensagemModule } from '../mensagem/mensagem.module';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { StorageService } from '../services/storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    CommonModule,
    MensagemModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [StorageService],
})
export class LoginModule { }
