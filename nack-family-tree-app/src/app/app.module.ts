import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { NavigationBarComponent } from './shared/components/navigation-bar/navigation-bar.component';
import { AboutComponent } from './views/about/about.component';
import { TreesComponent } from './views/trees/trees.component';
import { DNAComponent } from './views/dna/dna.component';
import { AccountComponent } from './views/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutComponent,
    TreesComponent,
    DNAComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
