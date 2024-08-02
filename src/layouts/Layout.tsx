import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Header />
        <main className="max-w-xl md:max-w-7xl mx-auto my-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
