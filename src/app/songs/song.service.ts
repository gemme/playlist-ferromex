import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  //songs = null;
  constructor() { }

  getSongs(){
    return [{
      name: 'El triste 2',
      artist: 'Jose Jose',
      url: 'http://spotify.com'
    }, {
      name: 'Almohada',
      artist: 'Jose Jose',
      url: 'http://spotify.com'
    },{
      name: 'Gavilan o Paloma',
      artist: 'Jose Jose',
      url: 'http://spotify.com'
    }]
  }
}
