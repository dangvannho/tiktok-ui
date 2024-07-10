import config from "~/config";

// pages
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Following from "~/pages/Following";
import Login from "~/pages/Login";
import Search from "~/pages/Search";
import Message from "~/pages/Messages";
import Friends from "~/pages/Friends";
import NotFound from "~/pages/NotFound";

// Layout
import HeaderOnly from "~/layouts/HeaderOnly";
import Upload from "~/pages/Upload";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.search, component: Search },
  { path: config.routes.messages, component: Message, layout: HeaderOnly },
  { path: config.routes.friends, component: Friends },
  { path: config.routes.upload, component: Upload },
  { path: config.routes.notFound, component: NotFound, layout: null },
];

const PrivateRoutes = {};

export { publicRoutes, PrivateRoutes };
