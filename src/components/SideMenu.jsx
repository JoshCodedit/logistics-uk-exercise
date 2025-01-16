import "../assets/styles/SideMenu.css";
import menuData from "../utils/data/menu.json";

export default function SideMenu() {
  return (
    <nav className="side-menu">
      <ul>
        {menuData.data.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
