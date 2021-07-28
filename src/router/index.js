import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About"),
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "proyectos" */ "../views/proyectos"),
  },
  {
    path: "/registro",
    name: "Registro",
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "proyectos" */ "../views/Registro"),
  },
  {
    path: "/edit-registro/:id",
    name: "RegistroEdit",
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "proyectos" */ "../views/Registro"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
