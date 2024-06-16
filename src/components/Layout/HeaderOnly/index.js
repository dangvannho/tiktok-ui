import Sidebar from "../DefaultLayout/Sidebar";
import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div className="content">{children}</div>
      </main>
    </>
  );
}

export default HeaderOnly;
