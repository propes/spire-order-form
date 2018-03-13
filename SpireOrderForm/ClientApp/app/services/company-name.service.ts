import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

@Injectable()
export class CompanyNameService {
   constructor (
      private http: Http,
      @Inject("BASE_URL") private baseUrl: string
   ) { }

   public getNames(searchTerm: string): Observable<any> {
      return this.http.post("https://duedil.io/v4/search/companies.json?limit=5", {
         criteria: {
            name: searchTerm,
            countryCodes: {
               "values": [ "GB" ]
            }
         }
      }, { headers: this.getHeaders() });
   }

   private getHeaders(): Headers {
      return new Headers({
         "Accept": 'application/json',
         "Content-Type": 'application/json',
         "X-AUTH-TOKEN": '7edb863548179c862aaefb31613af81d'
      });
   }
}