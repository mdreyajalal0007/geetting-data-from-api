import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component'
import { CommentsComponent } from './comments/comments.component'
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    canActivate:[AuthGuard],
    component: PostsComponent
  },

  {
    path: 'comments/:id',
    
    component: CommentsComponent
  },
  {
    path:"**",
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {} 
