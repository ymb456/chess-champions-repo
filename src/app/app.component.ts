import { Component } from '@angular/core';

@Component ({
	selector: 'my-app',
	template: `
		<header>
		<h1>{{title}}</h1>
		</header>
		<div class="tab">
		<nav>
	 	<a routerLink="/dashboard" routerLinkActive="active">Recent</a>
	    <a routerLink="/champions" routerLinkActive="active">Complete list</a>
		</nav>
		</div>
		<router-outlet></router-outlet>
		<footer>Copyright &copy; Yev</footer>
	`,
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
		title = 'World Chess Champions';
};