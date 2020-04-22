import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EducationComponent} from "./education/education.component";
import {WorkExperienceComponent} from "./work-experience/work-experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
    { path: '', redirectTo: '/education', pathMatch: 'full'},
    {path: 'education', component: EducationComponent},
    {path: 'work-xp', component: WorkExperienceComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
