import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import images from "~/asset/images";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("content")}>
        {/* Logo */}
        <div className={cx("logo")}>
          <img src={images.logo.default} alt="" />
        </div>

        {/* Search box*/}
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

        {/* Group button*/}
        <div className={cx("group-btn")}>
          {/* UpLoad button*/}
          <div className={cx("upload-btn")}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Tải lên</span>
          </div>

          {/* Message button*/}
          <div className={cx("message-btn")}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>

          {/* Box-letter button*/}
          <div className={cx("letter-btn")}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          {/* Account*/}
          <div className={cx("account")}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
