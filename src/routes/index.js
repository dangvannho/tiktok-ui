import routesConfig from "~/config/routes";

// Pages
import Home from "~/Pages/Home";
import Profile from "~/Pages/Profile";
import Following from "~/Pages/Following";
import Login from "~/Pages/Login";
import Search from "~/Pages/Search";
import Message from "~/Pages/Messages";
import Friends from "~/Pages/Friends";
import NotFound from "~/Pages/NotFound";

// Layout
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Upload from "~/Pages/Upload";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.login, component: Login, layout: null },
  { path: routesConfig.search, component: Search },
  { path: routesConfig.messages, component: Message, layout: HeaderOnly },
  { path: routesConfig.friends, component: Friends },
  { path: routesConfig.upload, component: Upload },
  { path: routesConfig.notFound, component: NotFound, layout: null },
];

const PrivateRoutes = {};

export { publicRoutes, PrivateRoutes };
