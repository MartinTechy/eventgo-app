import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth.page';


const routes: Routes = [{
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
},{
    path:'',
    component: AuthPage
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}