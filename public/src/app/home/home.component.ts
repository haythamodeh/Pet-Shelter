import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: object = [];
  authorForEdit: any;
  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllAuthorsFromService();
  }
  goHome() {
    this._router.navigate(['/']);
  }

  getAllAuthorsFromService(){
    let observable = this.httpService.allAuthor();
    observable.subscribe(data => {
      this.authors = data;
    });
  }

  deleteAuthor(id: any){
    let observable = this.httpService.deleteAuthor(id);
    observable.subscribe(data => {
      this.getAllAuthorsFromService();
    });
  }
  
}
