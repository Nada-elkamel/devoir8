import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { ProduitGuard } from './produit.guard';
import { ProduitsComponent } from './produits/produits.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: 'login', component: LoginComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
