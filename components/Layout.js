import Menu from "../components/Menu";
import Footer from "../components/Footer";
import StyleLayout from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={StyleLayout.Container}>
      <Menu></Menu>
      <main className={StyleLayout.Main}>
        {children}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
