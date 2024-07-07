import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./AccountItems.module.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItems({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.avatar} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span className={cx("nick-name")}>{data.nickname}</span>

          {data.tick && (
            <FontAwesomeIcon icon={faCircleCheck} className={cx("check")} />
          )}
        </p>
        <span className={cx("username")}>{data.full_name}</span>
      </div>
    </div>
  );
}

export default AccountItems;
