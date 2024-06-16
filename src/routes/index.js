import Home from "~/Pages/Home";
import Profile from "~/Pages/Profile";
import Following from "~/Pages/Following";
import Login from "~/Pages/Login";
import Search from "~/Pages/Search";
import HeaderOnly from "~/components/Layout/HeaderOnly";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/login", component: Login, layout: null },
  { path: "/search", component: Search, layout: HeaderOnly },
];

const PrivateRoutes = {};

export { publicRoutes, PrivateRoutes };
