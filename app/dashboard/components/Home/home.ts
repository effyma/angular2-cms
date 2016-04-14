import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
// import {DashboardService} from '../../services/dashboardService';
@Component({
	selector: 'home-container',
    template:`<div>Home</div>
    <button (click)="onClickRedirect('MyProfile',$event)">profile</button>
    <button (click)="onClickRedirect('Products',$event)">products</button>
    <button (click)="onClickRedirect('Tester',$event)">tester</button>
    `,
  	// styleUrls: ['app/dashboard/components/profile/profile.css'],
	// templateUrl: 'app/dashboard/components/profile/profile.html'
})

export class HomeComponent {
    router;
    constructor(router:Router){
        this.router = router;
    }
    onClickRedirect(route,e){
        e.preventDefault();
        console.log(this.router,route)
        this.router.navigate([route]);
    }
}
