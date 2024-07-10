import PropTypes from "prop-types";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: 60 }}>
        <Sidebar />
        <div className="content">{children}</div>
      </main>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
