import { Outlet } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import NavBar from "../components/NavBar/NavBar";

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </>
  );
}
