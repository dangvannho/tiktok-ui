import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import searchApi from "~/services/searchService";
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

  const debouncedValue = useDebounce(searchValue, 500);
  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    // Api
    const fetchApi = async () => {
      setLoading(true);

      const result = await searchApi(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  return (
    <div>
      <TippyHeadless
        visible={showResult && searchResult.length > 0}
        interactive="true"
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <Popper>
              <h4 className={cx("search-title")}>Tài khoản</h4>
              {searchResult.map((result) => {
                return <AccountItems data={result} key={result.id} />;
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
            onChange={handleChange}
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
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
