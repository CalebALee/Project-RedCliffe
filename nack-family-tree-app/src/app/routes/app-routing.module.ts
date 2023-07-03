import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';
import { AboutComponent } from '../views/about/about.component';
import { TreesComponent } from '../views/trees/trees.component';
import { DNAComponent } from '../views/dna/dna.component';
import { AccountComponent } from '../views/account/account.component';

const routes: Routes = [
  { path: '', component: NavigationBarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'trees', component: TreesComponent },
  { path: 'dna', component: DNAComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
