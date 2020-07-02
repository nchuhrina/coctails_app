import { Component } from '@angular/core';
import {AppServiceService} from './app-service.service';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';
import {subscribeTo} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  coctailsType = this.searchCoctailType();
 response: any;
 constructor(private  http: HttpClient) {

 }
 searchCoctailType(){
   // tslint:disable-next-line:no-unused-expression
   this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
     .subscribe((response) => {
       this.response = response;

     });

 }

  loadingCoctails(){
   console.log(this.coctailsType);

   this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php')
      .subscribe((resp) => {
        this.response = resp;

      });
 }
}
