import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public user:any;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'exit'
    },
    {
      title:'Social',
      url:'social',
      icon:'globe'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth:AngularFireAuth,
    private router:Router
  ) 
  {
    this.initializeApp();
    this.checkAuthStatus();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  checkAuthStatus(){
    this.afAuth.authState.subscribe( (user) => {
      if( user ){
        this.user = user;
        this.router.navigate(['/home']);
        //update navigation for logged in user
        this.appPages = [
          {
            title: 'Home',
            url: '/home',
            icon: 'home'
          },
          {
            title: 'List',
            url: '/list',
            icon: 'list'
          },
          {
            title: 'Logout',
            url: '/logout',
            icon: 'exit'
          },
        ];
      }
      else{
        this.user = null;
        this.router.navigate(['/register']);
        //update navigation for not authed user
        this.appPages = [
          {
            title: 'Register',
            url: '/register',
            icon: 'person-add'
          },
          {
            title: 'Login',
            url: '/login',
            icon: 'log-in'
          },
          {
            title:'Social',
            url:'/social',
            icon:'globe'
          },
          {
            title:"Terms and Privacy",
            url:'/privacyterms',
            icon:'book'
          }
        ];
      }
    });
  }
}
