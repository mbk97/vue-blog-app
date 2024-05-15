import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Dashboard from "../views/DashboardView.vue";
import Create from "../views/CreateView.vue";
import ViewMore from "../views/ViewMore.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/view-more/:id",
    name: "ViewMore",
    component: ViewMore,
  },
];

const router = createRouter({
  history: createWebHistory("blog-app"),
  routes,
});

export default router;
