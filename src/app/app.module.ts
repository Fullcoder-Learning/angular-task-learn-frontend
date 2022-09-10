import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { FinishTaskModalComponent } from './components/finish-task-modal/finish-task-modal.component';
import { DeleteTaskModalComponent } from './components/delete-task-modal/delete-task-modal.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { ResetModalComponent } from './components/reset-modal/reset-modal.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { Error404Component } from './pages/error404/error404.component';
// cargamos el httpclientmodule:
import {HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavbarComponent,
    TaskTableComponent,
    FinishTaskModalComponent,
    DeleteTaskModalComponent,
    UsersComponent,
    UserFormComponent,
    LoginComponent,
    RegisterModalComponent,
    ResetModalComponent,
    ResetPasswordComponent,
    Error404Component,
    AlertComponent,
    DeleteUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // importar modulo para peticiones rest
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
