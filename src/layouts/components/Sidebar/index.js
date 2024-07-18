import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  ExploreIcon,
  FollowIcon,
  FriendIcon,
  LiveIcon,
  HomeIconActive,
  ExploreIconActive,
  FollowIconActive,
  FriendIconActive,
  LiveIconActive,
} from "~/components/Icons";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import FollowingAccounts from "~/components/FollowingAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wapper")}>
      <Menu>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon className={cx("icon")} />}
          iconActive={<HomeIconActive className={cx("icon")} />}
        />
        <MenuItem
          title="Khám phá"
          to={config.routes.explore}
          icon={<ExploreIcon className={cx("icon")} />}
          iconActive={<ExploreIconActive className={cx("icon")} />}
        />
        <MenuItem
          title="Đang Follow"
          to={config.routes.following}
          icon={<FollowIcon className={cx("icon")} />}
          iconActive={<FollowIconActive className={cx("icon")} />}
        />
        <MenuItem
          title="Bạn bè"
          to={config.routes.friends}
          icon={<FriendIcon />}
          iconActive={<FriendIconActive />}
        />
        <MenuItem
          title="Live"
          to={config.routes.live}
          icon={<LiveIcon className={cx("icon")} />}
          iconActive={<LiveIconActive className={cx("icon")} />}
        />
      </Menu>

      <FollowingAccounts />
    </aside>
  );
}

export default Sidebar;
