import  { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports: [ /* Aqui adentro tenemos solo MODULOS */
        CommonModule
    ]
})

export class HeroesModule {}