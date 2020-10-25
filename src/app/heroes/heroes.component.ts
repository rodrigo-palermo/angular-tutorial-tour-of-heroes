import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: 1, name: 'Hellolander'};
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  cleanSelected(): void {
    this.selectedHero = null;
  }

}
