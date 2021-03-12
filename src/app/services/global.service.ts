import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getUrl() {
    return localStorage.getItem('yt_url');
  }

  persistUrl(url: string) {
    localStorage.setItem('yt_url', url);
  }

}
