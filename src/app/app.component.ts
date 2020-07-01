import { Component } from '@angular/core';
import {AppServiceService} from './app-service.service';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';
import {subscribeTo} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 coctailsType = '';
 response: any;
 constructor(private  http: HttpClient) {

 }
 searchCoctailType(){
   // tslint:disable-next-line:no-unused-expression
   this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
     .subscribe((response) => {
       this.response = response;
       console.log(this.response);
     });

 }
  loadingCoctails(coctailsType){
    // tslint:disable-next-line:no-unused-expression
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php' + coctailsType)
      .subscribe((resp) => {
        this.response = resp;
        console.log(this.response);
      });
 }
}
