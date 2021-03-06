import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { EmprestimoReadComponent } from './components/views/emprestimo/emprestimo-read/emprestimo-read.component';
import { EmprestimoCreateComponent } from './components/views/emprestimo/emprestimo-create/emprestimo-create.component';
import { EmprestimoDeleteComponent } from './components/views/emprestimo/emprestimo-delete/emprestimo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    EmprestimoReadComponent,
    EmprestimoCreateComponent,
    EmprestimoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
