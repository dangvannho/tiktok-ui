import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Popper({ children }) {
  return <div className={cx("popper")}>{children}</div>;
}

Popper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popper;
