import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: object = [];
  petForEdit: any;
  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllPetsFromService();
  }
  goHome() {
    this._router.navigate(['/']);
  }
  getAllPetsFromService(){
    let observable = this.httpService.allPet();
    observable.subscribe(data => {
      this.pets = data;
    });
  }

  // deleteAuthor(id: any){
  //   let observable = this.httpService.deleteAuthor(id);
  //   observable.subscribe(data => {
  //     this.getAllAuthorsFromService();
  //   });
  // }
  
}
