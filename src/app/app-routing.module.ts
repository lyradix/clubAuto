import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Contact } from "./contact/contact";
import { Home } from "./home/home";
import { VehicleDetails } from "./vehicle-details/vehicle-details";

const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'vehicle-details',
        component: VehicleDetails
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
