import { ChangeDetectorRef, Component, inject, signal, WritableSignal } from '@angular/core';
import { YugiData } from '../../services/yugi-data';
import { CommonModule } from '@angular/common';
import { Card } from "../card/card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

    yugiDataService = inject(YugiData);

    cards: WritableSignal<any[]> = signal([]);

    constructor(){
      this.yugiDataService.fetchData()
      .then(data => {
        //
        this.cards.set(data)
        console.log(this.cards());
      });
    }

  


}
