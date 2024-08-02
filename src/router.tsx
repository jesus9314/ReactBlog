import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

export default function AppRouter() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}
