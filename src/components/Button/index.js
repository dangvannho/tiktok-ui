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
  children,
  onClick,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  console.log(props);

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  let classes = cx("wrapper", { primary, upload, outline, large });
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Button;
