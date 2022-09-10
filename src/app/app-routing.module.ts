import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import {UsersComponent} from './pages/users/users.component';
import {LoginComponent} from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import {Error404Component} from './pages/error404/error404.component';
// importar el guard:
import { JwtAuthGuard } from './jwt-auth.guard';


const routes: Routes = [
  // securizar las rutas con canActivate y el jwtAuthGuard:
  {path: '', canActivate: [JwtAuthGuard], component: TasksComponent},
  {path: 'users', canActivate: [JwtAuthGuard], component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset/:id/:token', component: ResetPasswordComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
