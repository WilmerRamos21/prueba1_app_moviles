import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterModule, Router} from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PhotoPage implements OnInit {

  constructor(
    private router: Router, 
    public photoService: PhotoService,
    private supabaseService: SupabaseService) { }

  async ngOnInit() {
    this.photoService.loadSaved();
  }

  async addPhotoGallery(){
    await this.photoService.addNewToGallery();
        this.router.navigateByUrl('/photo');
    
  }
    async logout() {
    await this.supabaseService.logout();
    this.router.navigate(['/login']); 
    replaceUrl: true
  }

}
