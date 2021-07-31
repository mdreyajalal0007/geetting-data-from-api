import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { PostsComponent } from './posts/posts.component'
import { CommentsComponent } from './comments/comments.component'




const routes: Routes = [
  {
    path:'',
    component : PostsComponent
  },

  {
    path: 'posts',
    component: PostsComponent
  },

  {
    path: 'comments/:id',
    component: CommentsComponent
  },
  {
    path:"**",
    component : PostsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
