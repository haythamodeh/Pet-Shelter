import { Component, OnInit, Input } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authorForEdit: any;
  errors: any = {
    name: ""
  };


  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params["id"]);
    });
    this.authorForEdit = {name: ""};
  }
  goHome() {
    this._router.navigate(['/editAuthor']);
  }
  getAuthor(id: any) {
    let observable = this.httpService.getAuthor(id);
    observable.subscribe(data => {
      // console.log("got one data", data);
      this.authorForEdit = data;
    })
  }
  updateAuthor(){
    this.httpService.updateAuthor(this.authorForEdit._id, this.authorForEdit)
      .subscribe(data => {
        if(data["errors"]){
          this.errors = data["errors"];
        } else {
          this._router.navigate([""]);
        }
    })
  }
}
