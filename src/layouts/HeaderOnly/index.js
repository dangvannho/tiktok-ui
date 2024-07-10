import PropTypes from "prop-types";
import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: 60 }}>
        <div className="content">{children}</div>
      </main>
    </>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
