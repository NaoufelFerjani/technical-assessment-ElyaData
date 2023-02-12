import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  backEndApi = environment.backEndApi

  constructor(
    private httpClient: HttpClient
  ) { }

  addBlog (body: {}): Observable<Blog> {
    return this.httpClient.post(this.backEndApi + 'add', body) as Observable<Blog>
  }

  readBlogs (): Observable<Blog[]> {
    return this.httpClient.get(this.backEndApi + 'display') as  Observable<Blog[]>
  }

  displayBlogById (blogId: string): Observable<Blog> {
    return this.httpClient.get(this.backEndApi + 'displayById/' + blogId) as Observable<Blog>
  }
  upVote (blogId: string): Observable<Blog> {
    return this.httpClient.post(this.backEndApi + 'vote/' + blogId, {}) as Observable<Blog>
  }
  downVote (blogId: string): Observable<Blog> {
    return this.httpClient.post(this.backEndApi + 'dVote/' + blogId, {}) as Observable<Blog>
  }

}
