import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlApi = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.urlApi)
  }

  postMensagem(post: Posts){
    return this.http.post(this.urlApi, post)
  }
}
