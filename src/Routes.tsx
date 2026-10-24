import { Routes, Route } from "react-router";
import { type JSX } from "react";
import { Home } from "@/pages/home";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
