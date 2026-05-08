import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterService }
from 'src/app/services/character.service';

import {RouterModule, Router} from '@angular/router';

import { SupabaseService } from '../../services/supabase.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CharacterListPage{

  searchTerm: string = '';

  characters: any[] = [];

  constructor(
    private characterService: CharacterService,
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

    async logout() {
    await this.supabaseService.logout();
    this.router.navigate(['/login']); 
    replaceUrl: true


  }
  searchCharacter() {

    if (this.searchTerm.trim() === '') {

      this.characters = [];

      return;
    }

    this.characterService
      .searchCharacter(this.searchTerm)
      .subscribe(response => {

        this.characters = response.data;

        console.log(this.characters);

      });

  }
  
  }

