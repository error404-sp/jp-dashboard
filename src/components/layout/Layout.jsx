const Layout = ({ children }) => {
  return (
    <div>
      Navbar
      <div className={`main-container`}>
        Sidebar
        <main className="main-content">{children}</main>
        Rightbar
      </div>
    </div>
  );
};

export default Layout;
