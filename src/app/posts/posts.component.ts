import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any = [];
  name : string = '';
  response: boolean = true;
  
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }
  
  getRepositoryInfo(name: any): void{
    name = this.name;
    this.postService.getAllPosts(this.name).subscribe((posts: any) => {
      posts.forEach((post: any)=> {
        this.posts.push(post.name)
     });
      this.posts = [...new Set(this.posts)]
      this.response = this.posts.length ? true : false;
   })
   
  }
}
