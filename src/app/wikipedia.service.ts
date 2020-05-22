import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';


 interface Wiki {
  query: {
    search: {
      padeid: number,
      snipet: string
      title: string,
      wordcout: number

    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term:string){
   
   return this.http.get<Wiki>('https://en.wikipedia.org/w/api.php', {
     params: {
      action: 'query',
       format: 'json',
       list: 'search',
       utf8: '1',
       srsearch: term,
       origin: '*'
     }
   }).pipe(pluck('query', 'search'))
  }
}
