import { Component, OnInit } from '@angular/core';
import { Blog } from '../core/interfaces/blog';
import { BlogService } from '../core/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [] 

  constructor(
    private serviceBlog : BlogService
  ) { }

  ngOnInit(): void {
    this.readBlogs();
    
    
  }
  
  readBlogs(){
    this.serviceBlog.readBlogs().subscribe((blogs: Blog[]) => {
      this.blogs=blogs;
    })
  }

  upVote(blogId:string){
    this.serviceBlog.upVote(blogId).subscribe(() => {
      this.blogs=[];
      this.readBlogs();
    })
  }
  
  downVote(blogId:string){
    this.serviceBlog.downVote(blogId).subscribe(() => {
      this.blogs=[];
      this.readBlogs();  
    })
  }

  searchBlog (event: any) {
    
    if (event.target.value == '') {
      this.readBlogs()
    } else {
      this.blogs = this.blogs.filter((blog: Blog) => blog.title == event.target.value || blog.author == event.target.value || blog.content.includes(event.target.value) );
    }      
  }

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
}
