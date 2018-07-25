import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchString:string;
  //searchRes: Artists[];
  artists:any[];
  constructor(private _spotifyService:SpotifyService) {

  }

  ngOnInit() {
  }
  searchMusic(){
    this._spotifyService.getToken()
      .subscribe(res => {
        this._spotifyService.searchMusic(this.searchString ,'artist' , res.access_token)
          .subscribe(res=> {
            
            console.log(res.artists.items);
          })
    })
    /*this._spotify.searchMusic(this.searchString,'artist')
      .subscribe(res=>{
        console.log(res.artists.items);
      });*/
  }

}

/*interface Artists{
  id:number;
  name:String;
  genre:any;
  albums:Album[];
  artistId:string;
}*/
