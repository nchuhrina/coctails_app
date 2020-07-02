import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-drinks',
  templateUrl: `./drinks.component.html`,
  styles: ['.navbar-toggler-icon{background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAAAhISF/f3/4+PhJSUlGRkb7+/tLS0tERETb29vd3d3h4eHt7e2CgoKbm5smJibGxsZpaWk/Pz+SkpJycnKoqKhRUVERERFYWFjl5eVtbW3V1dWkpKS9vb19fJSOAAADe0lEQVR4nO2dCVIbQQxFO8FbFuOxDZglcP9jhppgV2am7Wn1pq+u/06gV5L6a4oCnCOEEEIIIYQQQgghhBBCCCGEkAC2u1P3HZ1us9vGCj58s8JDnOCjdt0CHmMEn7SrFvEkF1xo1yxkITZ81y5ZiLyJJ+2ShZykgotOu2QhnXRMt8/aJQt5loZi+z10L9olC3mRCrq9dslC9mJDd9CuWcRBLujWS+2qBWzWEYZusdKuO5iV/KKx1cW4Dvb80K49iFW03+egWujiJnJEvxTxdzF2By+gd3GT6Pf53GB3cRn/yFyA3sVl6oj2AIdGjg72oA7qMpMf7KCmxcRIETH6k2NiCF4X02NiBNouppxqfsB2MecOXhSRupgnByfgdDFfTAyBif5sQT8BZFALjWgPRBcTvuhD0O9i/pgYoh4aJWJipKh7wGU+1fxodjH7qeZF8at/VfaRuaC2i+V38IxSF8sFvQcNxVKnmh+F6C8c9BOqH3AlTzU/lbtYu4M9NaO/9Knmp2Jo1IuJkWKtXaxyqvmp08U6p5qfKtFfNegnVNhFrR08Uzw0dDvYU3ZQ655qfooOqvaI/qNgaCjGxJBSXdSMiRFlDjidU81PkV3E2MEzBXax/ufSDLm7iBATQzJHP0DQT8g6qHAj2pOxiypf9CHk6iJSTAzJFBpYMTEky49tYE41P+ldBDrVvCR/9ePu4JnEXUTewTNJuYgY9B7iFfFONT/R0Q8b9BMiBxXzVPMT1UU7HeyRdxE/JoaIrxvwS8bDvdDwXrtgMXdCwzvtgsXQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40JCG+NCQhvjQkIb40NC+ofQ3u+wZSv/Zrj3D1+YN3VvzhtvmDd3v5g3dz+YNRYo2Dd2v5g0Fu2jVMHxQzRoGK9o1DB1Uw4aBz41lw7BBNW0Y1EXbhiG7aNwwYFCtG84rmjecHVT7hnOKDRjODGoLhrcVmzC8OahtGN6K/kYMbwxqK4bXu9iM4dVdbMfw2qA2ZHhFsSVD/6A2Zeh9btoy9A2qvb8MeZup4k67pNxMdvGPdkXZGXXxqF1PAYaKe+1ySvD/i/quXUwZXo9ffl2THez5eDt2x8OHrT9zLWS9aFqPEEIIIYQQQszwF0I1QH/F1Ou9AAAAAElFTkSuQmCC");} ']
})
export class DrinksComponent implements OnInit {

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

  ngOnInit(): void {
  }

}

