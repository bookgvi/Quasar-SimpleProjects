
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '/products',
        component: () => import('pages/Index.vue'),
        children: [
          {
            name: 'prodView',
            path: '/view',
            component: () => import('components/ProductView'),
            children: [
              {
                name: 'prodEdit',
                path: 'edit/:id',
                component: () => import('components/ProductEdit')
              }
            ]
          },
          { path: '', redirect: '/view' }
        ]
      },
      {
        path: '/slots',
        component: () => import('pages/learningSlots'),
        children: [
          { path: '/slot1', component: () => import('components/slotParent') }
          // { path: '', redirect: 'slot1' }
        ]
      }
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
