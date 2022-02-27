import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ApiMarvelService } from 'src/app/services/api-marvel/api-marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @ViewChild("apiMarvel")
  private footerApiMarvel: ElementRef | undefined;
  public characters: any[] = [];
  public charactersFilter: any[] = [];

  constructor(private characterService: ApiMarvelService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe( (response: any) => {

      if (this.footerApiMarvel) {
        console.log(response);
        this.characters = response.data.results;
        this.charactersFilter = this.characters;
        console.log(this.charactersFilter);
        const footer = this.footerApiMarvel.nativeElement.querySelector('footer');
        this.renderer.setProperty(footer, 'innerHTML', response.attributionHTML);
        const a = this.footerApiMarvel.nativeElement.querySelector('footer a');
        this.renderer.addClass(a, 'link-dark');
        this.renderer.addClass(a, 'text-decoration-none');
      }
    });
  }

}
