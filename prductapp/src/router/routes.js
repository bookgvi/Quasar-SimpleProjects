
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: 'products/',
        component: () => import('pages/Index.vue'),
        children: [
          {
            path: '',
            component: () => import('components/ProductView'),
            children: [
              {
                path: 'edit/:id',
                component: () => import('components/ProductEdit')
              }
            ]
          }
        ]
      }
      // {
      //   page: '/slots',
      //   component: () => import('pages/learningSlots'),
      //   children: [
      //     { path: 'slot1', component: () => import('components/slots') }
      //   ]
      // }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
