import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./AccountItems.module.scss";

import { CheckIcon } from "../Icons";

const cx = classNames.bind(styles);

function AccountItems({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.avatar} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span className={cx("nick-name")}>{data.nickname}</span>

          {data.tick && <CheckIcon />}
        </p>
        <span className={cx("username")}>{data.full_name}</span>
      </div>
    </Link>
  );
}

AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItems;
