import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountItems.module.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import avatar from "~/asset/avatar/avatar-img.jpg";
const cx = classNames.bind(styles);

function AccountItems({ nickName, userName }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src={avatar} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span className={cx("nick-name")}>{nickName}</span>
          <FontAwesomeIcon icon={faCircleCheck} className={cx("check")} />
        </p>
        <span className={cx("username")}>{userName}</span>
      </div>
    </div>
  );
}

export default AccountItems;
