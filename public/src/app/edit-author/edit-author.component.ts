import { Component, OnInit, Input } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  petForEdit: any;
  errors: any = {
    name: "",
    type: "",
    description: "",
  };


  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params["id"]);
    });
    this.petForEdit = {name: "", type: "", description: "", skills: [{skill1: "", skill2: "", skill3: ""}]};  }
  goHome() {
    this._router.navigate(['/editAuthor']);
  }
  getPet(id: any) {
    let observable = this.httpService.getPet(id);
    observable.subscribe(data => {
      // console.log("got one data", data);
      this.petForEdit = data;
    })
  }
  updatePet(){
    this.httpService.updatePet(this.petForEdit._id, this.petForEdit)
      .subscribe(data => {
        if(data["errors"]){
          this.errors = data["errors"];
        } else {
          this._router.navigate(["/pets"]);
        }
    })
  }
}
