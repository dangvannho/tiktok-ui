import Header from "../components/Header";
import Sidebar from "./Sidebar"; 


function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ marginTop: 60 }}>
        <Sidebar />
        <div className="content">{children}</div>
      </main>
    </div>
  );
}

export default DefaultLayout;
