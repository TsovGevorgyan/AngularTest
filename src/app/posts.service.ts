import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  repositories: any = [];
  enteredValue: any = {
    owner: 'angular',
    repoName: 'components'
  }
  constructor(private http: HttpClient ) { }
  
  getAllPosts(name: any){
    this.enteredValue.owner = name.split('/')[0];
    this.enteredValue.repoName = name.split('/')[1];
    this.repositories = [];
    return this.http.get('routes/posts/', {
      params: this.enteredValue}).map((posts: any) => {
        this.repositories = posts;
        return posts;
    })
    
  }
}
