import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { championDetailComponent } from './champion-detail.component';

import { AppComponent } from './app.component';
import { championsComponent } from './champions.component';
import { championService } from './champion.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';






@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		championsComponent,
		championDetailComponent],
	providers: [
		championService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
