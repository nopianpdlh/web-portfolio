"use client";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import NavDock from "./NavDock";

const navRoutes = [
  { label: "Home", icon: <FaHome />, href: "#home" },
  { label: "About", icon: <FaUser />, href: "#about" },
  { label: "Skills", icon: <FaCode />, href: "#skills" },
  { label: "Portfolio", icon: <FaBriefcase />, href: "#portfolio" },
  { label: "Education", icon: <FaGraduationCap />, href: "#education" },
  { label: "Contact", icon: <FaEnvelope />, href: "#contact" },
];

export default function NavDockClient() {
  return <NavDock routes={navRoutes} />;
}
