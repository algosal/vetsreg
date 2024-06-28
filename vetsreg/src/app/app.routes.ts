import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MainCopyComponent } from './main-copy/main-copy.component';
import { MissionComponent } from './mission/mission.component';

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
     }
     

];
