import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RulesComponent } from './rules/rules.component';
import { rulesReducer } from './reducers/rules.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RulesEffects } from './effects/rules.effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      rules: rulesReducer,
    }),
    EffectsModule.forRoot([RulesEffects]),
  ],
  declarations: [AppComponent, RulesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
