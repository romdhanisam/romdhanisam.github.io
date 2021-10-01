import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EngineComponent } from './engine/threedemo.component';
import { ArticleModule } from './article.module';
import { LayoutComponent } from './layout/layout.component';
import { ArticleComponent } from './article/article.component';
import { CustomLayoutComponent } from './layout/custom-layout/custom-layout.component';
import { CustomFooterComponent } from './footer/custom-footer/custom-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,CustomLayoutComponent,
    HeaderComponent,
    FooterComponent,CustomFooterComponent,
    EngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
