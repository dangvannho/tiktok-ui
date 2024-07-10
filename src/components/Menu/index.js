import classNames from "classnames/bind";
import TippyHeadless from "@tippyjs/react/headless";

import Popper from "../Popper";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  return (
    <TippyHeadless
      interactive
      delay={[0, 700]}
      hideOnClick={false}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <Popper>
            {items.map((item, index) => {
              return <MenuItem key={index} data={item} />;
            })}
          </Popper>
        </div>
      )}
    >
      {children}
    </TippyHeadless>
  );
}

export default Menu;
