import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor: any;
  errors: any = {
    name: ""
  };


  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""};
  }
  goHome() {
    this._router.navigate(['/newAuthor']);
  }
  createAuthor(){
    this.httpService.createAuthor(this.newAuthor)
      .subscribe(data => {
        if(data["errors"]){
          this.errors = data["errors"];
        }
        else {
          this.newAuthor = {name: ""};
          this._router.navigate([""]);
        }
      });
  }
}
