import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faUser,
  faCircleQuestion,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCoins,
  faEllipsisVertical,
  faGear,
  faHouseCrack,
  faLanguage,
  faMoon,
  faPlus,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import routesConfig from "~/config/routes";
import styles from "./Header.module.scss";
import images from "~/asset/images";
import Button from "~/components/Button";
import Menu from "~/components/Menu";
import Search from "../Search";
import avatar from "~/asset/avatar/avatar-img.jpg";

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faHouseCrack} />,
      title: "Công cụ dành cho nhà sáng tạo",
    },
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: "Tiếng việt",
      children: {
        title: "Ngôn ngữ",
        data: [
          {
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            code: "en",
            title: "English",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Phản hồi và trợ giúp",
    },
    {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: "Chế độ tối",
    },
  ];

  const MENU_ITEM2 = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem hồ sơ",
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Yêu thích",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/setting",
    },

    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: "Tiếng việt",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Phản hồi và trợ giúp",
    },
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Thoát",
      separate: true,
    },
  ];

  return (
    <header className={cx("header")}>
      <div className={cx("content")}>
        {/* Logo */}
        <Link to={routesConfig.home} className={cx("logo")}>
          <img src={images.logo.default} alt="" />
        </Link>

        {/* Search box*/}
        <Search />

        {currentUser ? (
          <div className={cx("group-btn")}>
            {/* upload button */}
            <Button
              upload
              to="/upload"
              leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
              Tải lên
            </Button>

            {/* Message button */}
            <Tippy
              content="Tin nhắn"
              interactive="true"
              className={cx("message-tippy")}
            >
              <div className={cx("message-btn")}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </Tippy>

            {/* Letter button */}
            <Tippy
              content="Hộp thư"
              interactive="true"
              className={cx("letter-tippy")}
            >
              <div className={cx("letter-btn")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </Tippy>

            {/* User account */}
            <Menu items={MENU_ITEM2}>
              <div className={cx("account")}>
                <img src={avatar} alt="" className={cx("img-account")} />
              </div>
            </Menu>
          </div>
        ) : (
          <div className={cx("group-btn")}>
            {/* upload button*/}
            <Button
              upload
              to="/upload"
              leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
              Tải lên
            </Button>

            {/* login button*/}
            <Button primary to="/login">
              Đăng nhập
            </Button>

            {/* menu*/}
            <Menu items={MENU_ITEMS}>
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </Menu>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
