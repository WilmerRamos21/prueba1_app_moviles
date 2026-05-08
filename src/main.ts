import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import {home, images, camera, person, logOutOutline, search} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';


addIcons({
  home,
  images,
  camera,
  person,
  logOutOutline,
  search
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});
