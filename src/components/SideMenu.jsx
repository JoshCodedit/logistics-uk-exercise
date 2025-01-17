import "../assets/styles/SideMenu.css";
import menuData from "../utils/data/menu.json";

export default function SideMenu() {
  return (
    <nav className="side-menu">
      <ul>
        {menuData.data.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.url}>{menuItem.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
