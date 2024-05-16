import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { VideoGame } from '../models/VideoGame';
import { ErrorHandlerService } from "./error-handler.service";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoGameListService {

  private url = "http://localhost:3001/videogames";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({ "Content-Type": "application/json"}),
  };

  constructor(private errorHandlerService: ErrorHandlerService, private http: HttpClient) {}

  fetchAll(): Observable<VideoGame[]> {
    return this.http
      .get<VideoGame[]>(this.url, {responseType: "json"})
      .pipe(catchError(this.errorHandlerService.handleError<VideoGame[]>("fetchAll")));
  }

  post(name: Partial<VideoGame>): Observable<any> {
    return this.http
      .post<Partial<VideoGame>>(this.url, name, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  } 

  put(videoGame: VideoGame): Observable<any> {
    return this.http
    .put<VideoGame>(this.url, videoGame, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  } 

  delete(id: number): Observable<any> {
    const url = `http://localhost:3001/videogames/${id}`;
    return this.http
    .delete<VideoGame>(url, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
  } 
}
