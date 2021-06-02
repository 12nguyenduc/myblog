// profile
import profilePage from '../pages/profile/ProfilePage.vue'
import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'
import galleryPage from '../pages/Gallery.vue'
import contactPage from '../pages/Contact.vue'
import resumePage from '../pages/Resume.vue'
import portfolioPage from '../pages/Portfolio.vue'
import projectPage from '../pages/Project.vue'

import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | Home` }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: galleryPage,
    meta: { title: `${DOMAIN_TITLE} | Gallery` },
    props: routePropResolver
  },
  {
    path: '/project',
    name: 'project',
    component: projectPage,
    meta: { title: `${DOMAIN_TITLE} | Project` },
    props: routePropResolver
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolioPage,
    meta: { title: `${DOMAIN_TITLE} | Portfolio` },
    props: routePropResolver
  },
  {
    path: '/resume',
    name: 'resume',
    component: resumePage,
    meta: { title: `${DOMAIN_TITLE} | Resume` },
    props: routePropResolver
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactPage,
    meta: { title: `${DOMAIN_TITLE} | Contact` },
    props: routePropResolver
  },
  {
    path: '/profile',
    component: profilePage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | profile` },
    children: [
      {
        path: '',
        name: 'profile',
        component: profilePostsPage
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
