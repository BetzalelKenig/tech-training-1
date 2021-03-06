import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberGuard } from './core/guards/member.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'members',
    canLoad: [MemberGuard],
    loadChildren: () =>
      import('./features/members/members.module').then((m) => m.MembersModule),
  },
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
