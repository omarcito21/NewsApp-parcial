import { CanActivateFn } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { Storage } from 'src/app/shared/services/storage';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const storageSrv = inject(Storage);
  const router = inject(Router);
  const auth = storageSrv.get<{ uuid: string }>(CONSTANTS.AUTH);
  if(!auth){
    router.navigate(['/login']);
    return false;
  }
  return true;
};

