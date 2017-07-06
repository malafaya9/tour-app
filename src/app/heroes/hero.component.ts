import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    if(hero===this.selectedHero){
      this.selectedHero = undefined;
    }else{
      this.selectedHero = hero;
    }
  }
}
