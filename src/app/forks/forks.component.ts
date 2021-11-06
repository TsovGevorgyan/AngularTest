import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-forks',
  templateUrl: './forks.component.html',
  styleUrls: ['./forks.component.css']
})
export class ForksComponent implements OnInit {
  repositories: any = []; 
  p: number = 1;
  constructor(private postService: PostsService) { }
  
  ngOnInit(): void {
    this.repositories = this.postService.repositories;
  }

}
