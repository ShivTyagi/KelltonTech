import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AnagramComponent } from './anagram/anagram.component';
import { TempTrackerComponent } from './temp-tracker/temp-tracker.component';

const routes: Routes = [
  {path : 'registration', component : RegisterComponent},
  {path : 'anagram', component : AnagramComponent},
  {path : 'tempTracker', component : TempTrackerComponent},
  { path: '',   redirectTo: '/registration', pathMatch: 'full' }, // redirect to 
  { path: '**', component: RegisterComponent },  // Wildcard route 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
