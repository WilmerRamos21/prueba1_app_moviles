import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import {RouterModule, Router} from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class InicioPage{

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  async logout() {
    await this.supabaseService.logout();
    this.router.navigate(['/login']); 
    replaceUrl: true
  }

}
