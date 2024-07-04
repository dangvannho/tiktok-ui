import Home from "~/Pages/Home";
import Profile from "~/Pages/Profile";
import Following from "~/Pages/Following";
import Login from "~/Pages/Login";
import Search from "~/Pages/Search";
import Message from "~/Pages/Messages";
import Friends from "~/Pages/Friends";
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Upload from "~/Pages/Upload";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/:nickname", component: Profile },
  { path: "/login", component: Login, layout: null },
  { path: "/search", component: Search },
  { path: "/messages", component: Message, layout: HeaderOnly },
  { path: "/friends", component: Friends },
  { path: "/upload", component: Upload },
];

const PrivateRoutes = {};

export { publicRoutes, PrivateRoutes };
