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

export default DefaultLayout;
