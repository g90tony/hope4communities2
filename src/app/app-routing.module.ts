import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { WorkPageComponent } from './page/work-page/work-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
