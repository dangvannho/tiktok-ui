import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "../Menu.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button
      leftIcon={data.icon}
      className={cx("menu-item")}
      classIcon={cx("icon")}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MenuItem;
