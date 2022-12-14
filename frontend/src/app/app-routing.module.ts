import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'feed', component: FeedComponent
  },
  {
    path: 'contato', component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}


