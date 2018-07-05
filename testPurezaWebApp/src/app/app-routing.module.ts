import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPurezaComponent } from './test-pureza/test-pureza.component';
import { InicioTestPurezaComponent } from './inicio-test-pureza/inicio-test-pureza.component';

const rutas: Routes = [
{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: '', component: InicioTestPurezaComponent },
{ path: 'preguntas', component: TestPurezaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
