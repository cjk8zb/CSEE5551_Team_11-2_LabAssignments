import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ConnectedGuard} from './connected.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [ConnectedGuard]},
  {path: 'join', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
