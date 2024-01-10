import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  cambiaNombre(): void {
    this.name = this.name === 'Spiderman' ? 'Ironman' : 'Spiderman';
  }

  cambiaEdad(): void {
    this.age = this.age === 25 ? 45 : 25;
  }
}
