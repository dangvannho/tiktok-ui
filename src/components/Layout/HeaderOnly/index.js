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

export default HeaderOnly;
