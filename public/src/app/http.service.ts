import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  allPet() {
    return this.http.get("/api/pets");
  }
  getPet(id: any) {
    return this.http.get("/api/pets/" + id);
  }
  getPetName(name: any) {
    return this.http.get(`/api/pets/find/${name}`);
  }
  deletePet(id: any) {
    return this.http.delete("/api/pets/" + id);
  }
  updatePet(id: any, data: any) {
    return this.http.put("/api/pets/" + id, data);
  }
  createPet(newpet: any){
    return this.http.post(`/api/pets`, newpet);
  }
  createSkill(id: any, skills: any){
    return this.http.post(`/api/pets/add/${id}`, skills);
  }
  addRemoveVote(id: string, like: number){
    return this.http.put(`/api/pets/${id}/${like}`, {});
  }


  constructor(private http: HttpClient) { 
    // this.allTasks();
    // this.getTask();
    // this.deleteTask();
    // this.getPokemon();
    // this.getPokemonAbility();
  }
}
