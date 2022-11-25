import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducers } from './store/reducers';
import { authEffects } from './store/effects';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('userState',authReducers),
    EffectsModule.forFeature([authEffects])
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
