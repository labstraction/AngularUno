import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YugiData {

  fetchData(){
    return fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
    .then(response => response.json())
    .then(result => result.data);
  }
  
}
