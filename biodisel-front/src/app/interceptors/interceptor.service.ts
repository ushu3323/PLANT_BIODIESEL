import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Basic '+ btoa('uwu:cordero13')
    });

    const reqClone = req.clone({
      headers 
    });

    return next.handle( reqClone);
  }
}
