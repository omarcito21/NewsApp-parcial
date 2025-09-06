import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from "@ionic/angular";
import { ButtonComponent } from './components/button/button.component';
import { Storage } from './services/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';

const modules = [IonicModule, ReactiveFormsModule, FormsModule];
const components = [InputComponent, ButtonComponent,SelectComponent]
@NgModule({
  declarations: [components],
  providers: [Storage],
  imports: [
    CommonModule,
    modules,
],
  exports:[
    components, components
  ]}
)
export class SharedModule { }
