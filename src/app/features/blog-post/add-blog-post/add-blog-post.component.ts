import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent {

  model: AddBlogPost;
  private addBlogPostSubscription?: Subscription;

  constructor (private blogPostService: BlogPostService, private router: Router) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      publishedDate: new Date(),
      isVisble: true
    }
  }

  onFormSubmit() : void {
    console.log(this.model);
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        console.log("This was successful!");
        this.router.navigateByUrl('/admin/blogposts');
      }
    })
  }

  // ngOnDestroy(): void {
  //   this.addBlogPostSubscription?.unsubscribe();
  // }
}
