import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { PaisesService } from '../../services/paises';
import { IPais } from 'src/app/interfaces/pais';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {

  paises$!: Observable<IPais[]>;

  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  selectedpais: string = '';
  

  constructor(private PaisService: PaisesService) {}


  ngOnInit() {
    this.paises$ = this.PaisService.getCountries();
  }

  public onSelect(event: any){
    this.control.setValue(event.detail.value);
    this.control.markAllAsTouched();
  }
}