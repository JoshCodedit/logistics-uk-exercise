import logo from "../assets/logo.png";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="logo" />
    </div>
  );
}
