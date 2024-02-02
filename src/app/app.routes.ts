import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    {title: 'NR | Home', path : '', component:HomeComponent},
    {title: 'NR | Home', path : 'home', component:HomeComponent},
    {title: 'NR | About', path : 'about', component:AboutComponent},
    {title: 'NR | Gallery', path : 'gallery', component:GalleryComponent},
    {title: 'NR | Contact', path : 'contact', component:ContactComponent},
    {title: 'NR | Pricing', path : 'pricing', component:PricingComponent},
];
