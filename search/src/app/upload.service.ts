import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class UploadService {
  FOLDER = "bucket-folder/";

  constructor(
    private http: HttpClient
  ) {}
    statusCode='';
    fd = new FormData();
    data={
      'filter':'',
      'text':''
    };
    s1='';
    s2='';

  searchImages(filter,text) {
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token');
    this.data.filter=filter;
    this.data.text=text;
    return this.http.post('http://127.0.0.1:8080/searchImages',this.data , {
      headers: headers
    });

  }
  getImages(){
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token');
    return this.http.get('http://127.0.0.1:8080/getImages',{
      headers: headers
    });
  }
}
