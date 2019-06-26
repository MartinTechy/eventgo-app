import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canLoad: [AuthGuard] },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule', canLoad: [AuthGuard]  },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule', canLoad: [AuthGuard]  },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule', canLoad: [AuthGuard]  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule', canLoad: [AuthGuard]  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
