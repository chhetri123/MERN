import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";

export default function Layout({ children }) {
  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
