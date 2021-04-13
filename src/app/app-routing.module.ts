import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { WorkPageComponent } from './page/work-page/work-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'work', component: WorkPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
