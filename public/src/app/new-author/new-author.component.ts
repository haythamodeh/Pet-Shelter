import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newPet: any;
  errors: any = {
    name: "",
    type: "",
    description: "",
  };
  message: string;
  skills: any; 
    


  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newPet = {name: "", type: "", description: ""};
    this.skills = {skill1: "", skill2: "", skill3: ""};
  }
  goHome() {
    this._router.navigate(['/newAuthor']);
  }
  createPet(){
    this.httpService.getPetName(this.newPet.name)
      .subscribe(data => {
        if(data === null){
          this.httpService.createPet(this.newPet)
            .subscribe(data => {
              if(data["errors"]){
                // console.log(data["errors"]);
                this.errors = data["errors"];
              }
              else {
                // console.log(data["_id"]);
                this.httpService.createSkill(data["_id"], this.skills)
                  .subscribe(data => {
                    this.newPet = {name: "", type: "", description: ""};
                    this.skills = {skill1: "", skill2: "", skill3: ""};
                    this._router.navigate(["/pets"]);
                  })
              }
            });
        }
        else {
          this.message = "This pet already exists, choose another pet name";
        }
      })
    
  }
}
