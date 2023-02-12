import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../core/interfaces/blog';
import { BlogService } from '../core/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blogForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required], 
    });
  }

  get f() { return this.blogForm?.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.blogForm!.invalid) {
        return;
    }

    this.blogService.addBlog(this.blogForm.value).subscribe((blog: Blog) => {
      this.router.navigate([''])
    })
  }

  onReset() {
    this.submitted = false;
    this.blogForm?.reset();
  }
}

