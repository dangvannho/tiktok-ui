import { Link } from "react-router-dom";
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

export default Button;
