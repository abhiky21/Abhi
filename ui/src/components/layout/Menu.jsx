import { menuItems } from "../../assets/menuItems.assets";

export default function Menu({ identifier }) {
  return menuItems[identifier].map((item) => (
    <div key={item.label}>
      <button className="flex flex-col items-center bg-white hover:bg-sky-100 px-6 py-2 rounded cursor-pointer">
        <img src={item.image} className="w-12" alt={item.label} />
        <p>{item.label}</p>
      </button>
    </div>
  ));
}
