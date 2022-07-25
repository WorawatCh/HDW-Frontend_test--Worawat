import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogListComponent } from './modules/catalog/pages/catalog-list/catalog-list.component';

const routes: Routes = [
   {
    path: 'catalog',
    component: CatalogListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
