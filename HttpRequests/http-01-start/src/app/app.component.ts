import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './posts.service';
import { Post } from './post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts : Post[] = [];

  constructor(private http: HttpClient,private postService : PostService) {}

  ngOnInit() {
    this.postService.fetchPosts().subscribe((posts)=>{
      this.loadedPosts = posts
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.createAndStorePost(postData.title,postData.content)
  }

  onFetchPosts() {
    this.postService.fetchPosts().subscribe((posts)=>{
      this.loadedPosts = posts
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
