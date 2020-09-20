import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }

  download(links: string[], type: string): Observable<any> {
    return this.http.post(`http://192.168.1.200:3000/links?type=${type}`, { links });
  }

  getDownloadedMediaList() {
    return this.http.get(`http://192.168.1.200:3000/downloads`);
  }

}
