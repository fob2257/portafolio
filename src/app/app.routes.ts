import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, ItemComponent, PortafolioComponent } from './components/index.pages'

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const Routing = RouterModule.forRoot(routes, { useHash: true })
