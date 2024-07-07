import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import Popper from "~/components/Popper";
import AccountItems from "~/components/AccountItems";
import useDebounce from "~/hooks/useDebounce";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounced
      )}&type=less`
    )
      .then((respone) => respone.json())
      .then((respone) => {
        setSearchResult(respone.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [debounced]);

  return (
    <TippyHeadless
      visible={showResult && searchResult.length > 0}
      interactive="true"
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <Popper>
            <h4 className={cx("search-title")}>Tài khoản</h4>
            {searchResult.map((item) => {
              return <AccountItems data={item} key={item.id} />;
            })}
          </Popper>
        </div>
      )}
    >
      <div className={cx("box-search")}>
        <input
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            setShowResult(true);
          }}
          ref={inputRef}
        />
        {/* Clear Button */}
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* Loading */}
        {loading && (
          <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
        )}

        <span></span>

        {/* Search button*/}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
