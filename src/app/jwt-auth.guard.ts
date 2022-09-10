import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// importar angular-jwt:
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthGuard implements CanActivate {
  // recuperar token:
  token: any = localStorage.getItem('token');
  // crear el objeto helper de jwt:
  jwtHelperService: JwtHelperService = new JwtHelperService;


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // validar si hay token y comprobar que no esta caducado:
      if(this.token){
        console.log(this.token);
        if(this.jwtHelperService.isTokenExpired(this.token)){
          // para evitar problemas de inicio de sesión refrescamos la pantalla con una redirección total:
          window.location.href = '/login';
        }
      }else{
        console.log("No has iniciado sesión");
        // para evitar problemas de inicio de sesión refrescamos la pantalla con una redirección total:
        window.location.href = '/login';
      }
      // este return lo tenemos que dejar ahí, si no se cumple todo lo anterior nos dará acceso a la ruta:
      return true;
  }
  
}
