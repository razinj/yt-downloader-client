import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Services
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }

  download(links: string[], type: string): Observable<any> {
    const url = this.globalService.getUrl();
    if (url != null) return this.http.post(`${url}/links?type=${type}`, { links });
    else return null;
  }

  getDownloadedMediaList() {
    const url = this.globalService.getUrl();
    if (url != null) return this.http.get(`${url}/downloads`);
    else return null;
  }

}
