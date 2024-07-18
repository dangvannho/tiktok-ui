import { useEffect, useState } from "react";
import accountApi from "~/services/accountService";
import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts() {
  const [show, setShow] = useState(true);
  const [check, setCheck] = useState(false);
  const [accountResult, setAccountResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await accountApi();
      setAccountResult(result);
    };

    fetchApi();
  }, []);

  return (
    <div className={cx("wapper")}>
      <p className={cx("title")}>Các tài khoản đang follow</p>
      <div className={cx("body", { active: check })}>
        {accountResult.map((result) => {
          return <AccountItem data={result} key={result.id} />;
        })}
      </div>

      {show && (
        <p
          className={cx("see-more")}
          onClick={() => {
            setCheck(true);
            setShow(false);
          }}
        >
          Xem thêm
        </p>
      )}

      {!show && (
        <p
          className={cx("hide")}
          onClick={() => {
            setCheck(false);
            setShow(true);
          }}
        >
          Ẩn bớt
        </p>
      )}
    </div>
  );
}

export default FollowingAccounts;
