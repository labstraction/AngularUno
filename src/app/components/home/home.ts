import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { YugiData } from '../../services/yugi-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

    yugiDataService = inject(YugiData);
    

    cards: any[] = [];

    constructor(){
      this.yugiDataService.fetchData()
      .then(data => {
        //
        this.cards = data;
        console.log(this.cards);
      });
    }

  


}
