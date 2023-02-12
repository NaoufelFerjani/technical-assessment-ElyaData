import { Component, OnInit } from '@angular/core';
import { Blog } from '../core/interfaces/blog';
import { BlogService } from '../core/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog?: Blog ;
  blogId = this.route.snapshot.paramMap.get('id');

  constructor(
    private serviceBlog : BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.displayDetailleBlog(this.blogId!);    
  }

  displayDetailleBlog(blogId:string){
    this.serviceBlog.displayBlogById(blogId).subscribe((blog: Blog) => {      
      this.blog = blog          
    })
  }
}
