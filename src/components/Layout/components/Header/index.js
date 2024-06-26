import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faUser,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleXmark,
  faEllipsisVertical,
  faHouseCrack,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
// import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Login from "~/Pages/Login";

import styles from "./Header.module.scss";
import images from "~/asset/images";
import Popper from "~/components/Popper";
import AccountItems from "~/components/AccountItems";
import Button from "~/components/Button";
import Menu from "~/components/Menu";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faHouseCrack} />,
      title: "Công cụ dành cho nhà sáng tạo",
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
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: "Chế độ tối",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  return (
    <header className={cx("header")}>
      <div className={cx("content")}>
        {/* Logo */}
        <div className={cx("logo")}>
          <img src={images.logo.default} alt="" />
        </div>

        {/* Search box*/}
        <div>
          <TippyHeadless
            visible={searchResult.length > 0}
            interactive="true"
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <Popper>
                  <h4 className={cx("search-title")}>Tài khoản</h4>
                  <AccountItems
                    nickName="Đặng Ngọc Hải"
                    userName="dangngochai"
                  />
                  <AccountItems nickName="Lê Văn Tri" userName="levantri" />
                  <AccountItems
                    nickName="Nguyễn Tấn Dũng"
                    userName="nguyentandung"
                  />
                </Popper>
              </div>
            )}
          >
            <div className={cx("box-search")}>
              <input type="text" placeholder="Tìm kiếm" spellCheck={false} />
              {/* Clear Button */}
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>

              {/* Loading */}
              <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />

              <span></span>

              {/* Search button*/}
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </TippyHeadless>
        </div>

        {/* Group button*/}
        <div className={cx("group-btn")}>
          {/* upload button*/}
          <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
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
      </div>
    </header>
  );
}

export default Header;
