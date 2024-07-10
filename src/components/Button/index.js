import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  upload = false,
  outline = false,
  large = false,
  leftIcon,
  children,
  onClick,
  className,
  classIcon,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  let classes = cx("wrapper", { primary, upload, outline, large }, className);

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={classIcon}>{leftIcon}</span>}
      <span>{children}</span>
    </Component>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  upload: PropTypes.bool,
  outline: PropTypes.bool,
  large: PropTypes.bool,
  leftIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  classIcon: PropTypes.string,
};

export default Button;
