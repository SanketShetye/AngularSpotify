import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
  private searchUrl:string;
  private redirect_uri:string;
  private client_id ='996080937ebb4594a0979146c9c0c121';
  private client_secret = '0bda3cfd213c4622bc6c562586568ec8';
  private access_token:string;
  private ArtistUrl: string;
  private AlbumsUrl:string;
  private AlbumUrl:string;
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

  constructor(private http:Http) {

  }
  getToken(){
    // let params : URLSearchParams = new URLSearchParams();
    // params.set('grant_type' , 'client_credentials');
    // let body = params.toString();
     var params = ('grant_type=client_credentials');

     var headers = new Headers();
     headers.append( 'Authorization', 'Basic ' + this.encoded);
    
     headers.append('Content-Type' , 'application/x-www-form-urlencoded');

     return this.http.post('https://accounts.spotify.com/api/token', params , {headers : headers} ).pipe(
     map(res=> res.json()));
  }

     
 
  searchMusic(str:string, type='artist' ,token:string){
  
     
    console.log(this.encoded); 
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);

    return this.http.get(this.searchUrl , {headers : headers}).pipe(
    map((res: Response) => res.json()));

    
}
  /*searchMusic(str:string,type='artist'){
    this.searchUrl='https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this.http.get(this.searchUrl).pipe(
      map(response=>response.json())
    );
  }*/

}
