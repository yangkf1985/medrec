import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue")
    },
    {
      path: "/query",
      name: "query",
      component: () =>
        import(/* webpackChunkName: "query" */ "../views/Query.vue")
    },
    {
      path: "/receive",
      name: "receive",
      component: () =>
        import(/* webpackChunkName: "query" */ "../views/Receive.vue")
    },
    {
      path: "/urge",
      name: "urge",
      component: () =>
        import(/* webpackChunkName: "query" */ "../views/Urge.vue")
    },
    {
      path: "/unlock",
      name: "unlock",
      component: () =>
        import(/* webpackChunkName: "query" */ "../views/Unlock.vue")
    },
    {
      path: "/dictIcd10",
      name: "dictIcd10",
      component: () =>
        import(/* webpackChunkName: "query" */ "../views/DictIcd10.vue")
    },
    {
      path: "/medrecinfo",
      name: "medrecinfo",
      component: () =>
        import(/* webpackChunkName: "query" */ "../views/Medrecinfo.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  // console.log("authRequired=" + authRequired + " loggedIn=" + loggedIn);
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
