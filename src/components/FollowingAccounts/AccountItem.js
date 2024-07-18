import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import avatar from "~/asset/avatar/avatar-img.jpg";
import styles from "./FollowingAccounts.module.scss";
import { CheckIcon } from "../Icons";

const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.name}`} className={cx("box-account")}>
      <img src={avatar} alt="" className={cx("avatar")} />
      <div className={cx("info")}>
        <span className={cx("nick-name")}>
          {data.name}
          {true && (
            <CheckIcon width="1.3rem" height="1.3rem" className={cx("check")} />
          )}
        </span>
        <span className={cx("username")}>{data.username}</span>
      </div>
    </Link>
  );
}

AccountItem.popTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
