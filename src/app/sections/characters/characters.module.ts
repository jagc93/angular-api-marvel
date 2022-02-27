import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { ApiMarvelService } from 'src/app/services/api-marvel/api-marvel.service';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [CharactersComponent],
    imports: [CommonModule, CharactersRoutingModule, HttpClientModule],
    providers: [ApiMarvelService]
  })
  export class CharactersModule {}
