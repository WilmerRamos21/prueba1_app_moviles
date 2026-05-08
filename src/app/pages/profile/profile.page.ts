import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupabaseService } from '../../services/supabase.service';
import { RouterModule, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ProfilePage implements OnInit {

  user: any=null
  avatarUrl: string = '';
  description: string = ''


  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  async ngOnInit() {
    const { data } = await this.supabaseService.getUser();
    this.user = data.user;

    const savedDescription =
  await Preferences.get({
    key: 'description'
  });

if (savedDescription.value) {

  this.description =
    savedDescription.value;

}

  const avatar =
    await Preferences.get({
      key: 'avatar'
    });

  if (avatar.value) {

    this.avatarUrl =
      avatar.value;

  }


  }
  async saveProfile() {

  await Preferences.set({
    key: 'description',
    value: this.description
  });

}
async uploadAvatar(event: any) {

  const file =
    event.target.files[0];

  if (!file) return;


  const reader =
    new FileReader();

  reader.onload = async () => {

    this.avatarUrl =
      reader.result as string;

    await Preferences.set({
      key: 'avatar',
      value: this.avatarUrl
    });

  };

  reader.readAsDataURL(file);

}
  async logout() {
    await this.supabaseService.logout();
    this.router.navigate(['/login']); 
    replaceUrl: true
  }

  }
