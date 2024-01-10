import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNmame: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk'];
  public deleteHero?: String;

  removeLasHero(): void {
    this.deleteHero = this.heroNmame.pop();
  }
}
