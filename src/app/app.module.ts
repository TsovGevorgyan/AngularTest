import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ForksComponent } from './forks/forks.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { PostsService } from './posts.service';

const Routes = [
  {
    path: '', component: PostsComponent
    // redirectTo: 'posts',
    // pathMatch: 'full'
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'forks', component: ForksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ForksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
