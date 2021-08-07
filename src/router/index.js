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
    // this generates a separate chunk (registro.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "registro" */ "../views/Registro"),
  },
  {
    path: "/editProyect/:id",
    name: "editProyect",
    // route level code-splitting
    // this generates a separate chunk (editProyect.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "editProyect" */ "../views/EditProyect"),
  },
  {
    path:"/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path:"/loginIn",
    name: "LoginIn",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginIn"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
