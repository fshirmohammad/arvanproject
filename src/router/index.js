import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth} from '@/views/services.js/AuthService';
import { setAuthToken } from '@/views/services.js/AuthService';
// import HomeView from '../views/HomeView.vue'
 
const isGuest = (to, from, next) => {

  const userisAuthenticated = checkAuth();



  if (userisAuthenticated) {

    next('/articles');

    return;

  }



  next();

};



const isAuthenticated = (to, from, next) => {

  const userisAuthenticated = checkAuth();



  if (!userisAuthenticated) {

    next('/');

    return;

  }



  next();

};

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue'),
    beforeEnter: isGuest,
    
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('../views/registerPage.vue'),
    beforeEnter: isGuest,
  },
  {
    path: '/articles',
    name: 'allPostPage',
    component: () => import('../views/allPostPage.vue'),
    // beforeEnter: isAuthenticated,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
