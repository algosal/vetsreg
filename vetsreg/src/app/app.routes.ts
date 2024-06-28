import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MainCopyComponent } from './main-copy/main-copy.component';
import { MissionComponent } from './mission/mission.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegistrationComponent,
    },
     {
        path: '',
        component: MissionComponent,
    },
    {
        path: 'services',
        component: MainCopyComponent,
     },
  {
    path: '**',
    component: NotFoundComponent,
  }

];
