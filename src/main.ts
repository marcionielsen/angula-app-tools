import './polyfills';

// import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

// import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component';

// @NgModule({
//   imports:[
//     AppModule,
    
//   ],
//   entryComponents:[AppComponent],
//   declarations: [AppComponent],
//   // bootstrap: [AppComponent],
//   providers: [
//     // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
//   ]

// })
export class MainAppTool {
}

// if (environment.production) {
//  enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
