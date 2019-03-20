import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  allAuthor() {
    return this.http.get("/api/authors");
    // let tempObservable = this.http.get("/api/tasks");
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getAuthor(id: any) {
    // var id: any = "5c89a9ef91d28f0bedc40f61";
    return this.http.get("/api/authors/" + id);
    // tempObservable.subscribe(data => console.log("Got one task!", data));
  }
  deleteAuthor(id: any) {
    // var id: any = "5c89a9ef91d28f0bedc40f61";
    return this.http.delete("/api/authors/" + id);
    // tempObservable.subscribe(data => console.log("Deleted Task!", data));
  }
  updateAuthor(id: any, data: any) {
    // var id: any = "5c89a9ef91d28f0bedc40f61";
    return this.http.put("/api/authors/" + id, data);
    // tempObservable.subscribe(data => console.log("Deleted Task!", data));
  }
  createAuthor(newTask: any){
    return this.http.post("/api/authors", newTask);
  }
  // getPokemon(){
  //   let bulbasaur = this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  //   bulbasaur.subscribe(data => console.log("Got Pokemon", data));
  // }
  // getPokemonAbility() {
  //   let ability = this.http.get('https://pokeapi.co/api/v2/ability/34');
  //   ability.subscribe(data => console.log("Abilities", data));
  // }


  constructor(private http: HttpClient) { 
    // this.allTasks();
    // this.getTask();
    // this.deleteTask();
    // this.getPokemon();
    // this.getPokemonAbility();
  }
}
