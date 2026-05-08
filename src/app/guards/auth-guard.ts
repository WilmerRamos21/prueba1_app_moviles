import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import { SupabaseService }
from '../services/supabase.service';

export const authGuard: CanActivateFn =
  async () => {

    const supabaseService =
      inject(SupabaseService);

    const router =
      inject(Router);


    const { data } =
      await supabaseService.getSession();


    if (!data.session) {

      return router.createUrlTree([
        '/login'
      ]);

    }

    return true;

};