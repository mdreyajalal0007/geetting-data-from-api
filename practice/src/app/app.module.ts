import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {ReactiveFormsModule } from '@angular/forms';
import {PostsComponent } from './posts/posts.component';
import {CommentsComponent } from './comments/comments.component';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    NgCircleProgressModule,
    MatButtonModule,
    
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule  { }

