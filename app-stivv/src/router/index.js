import { createRouter, createWebHistory } from 'vue-router'

import * as pathPublic from '@/views/public/path'

import * as pathAdmin from '@/views/admin/path'

 


const routes = [

  {
    path:'/',
    name: 'PublicLayout',
    component: pathPublic.PublicLayout,
    children:[
      {path: '/', name: 'Offre', component: pathPublic.Offre},
      {path: '/Connexion', name: 'Connexion', component: pathPublic.Connexion},
      {path: '/Apropos', name: 'Apropos', component: pathPublic.Apropos},
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: pathAdmin.AdminLayout,
    children:[
      {path: 'MyRepertoire', name: 'MyRepertoire', component: pathAdmin.MyRepertoire},
      {path: 'EmployerRep/AddOffre', name: 'AddOffre', component: pathAdmin.AddOffre},
      {path: 'EmployerRep/EditOffre/:id', name: 'EditOffre', component: pathAdmin.EditOffre},
      {path: 'EmployerRep/ListOffre', name: 'ListOffre', component: pathAdmin.ListOffre},

      {path: 'JobbersRep/EditCv/', name: 'EditCv', component: pathAdmin.EditCv},
      {path: 'JobbersRep/ListOffreEmp', name: 'ListOffreEmp', component: pathAdmin.ListOffreEmp},
      
    ]
  },
  {
    path: '/:pathMatch(.*)*',redirect: '/'
    
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
