import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'vocabulary', loadChildren: './vocabulary/vocabulary.module#VocabularyPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'topic', loadChildren: './topic/topic.module#TopicPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'ranking', loadChildren: './ranking/ranking.module#RankingPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'question-detail', loadChildren: './question-detail/question-detail.module#QuestionDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
