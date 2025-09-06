import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { Storage } from 'src/app/shared/services/storage';




export const isLogin: CanActivateFn = (route, state) => {

   const storageSrv = inject(Storage);
  const router = inject(Router);
  const auth = storageSrv.get<{uuid: string}>(CONSTANTS.AUTH);

  const url = state.url;
  const publicUrl = ['/', '/login', '/register'];

  if(url === '/login' && !auth){
    return true;
  }

  if(!auth && publicUrl.includes(url)){

    return true;
  }
  if(router.url === '/' && !auth){
    return true;
  }
    
  router.navigate(['/home']);
  return false;
};