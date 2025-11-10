import { navBarMenuItems } from "../../assets/menuItems.assets.jsx";

export default function Navbar() {
  return (
    <div className="float-left">
      <div className="border-r border-gray-300 px-4 py-2 overflow-y-scroll h-[679px] scroll-auto w-40 md:w-full">
        {navBarMenuItems.map((item) => (
          <div key={item.id}>
            <h1 className="text-md font-bold">{item.title}</h1>
            <div className="w-30 md:w-70 grid grid-cols-1 md:grid-cols-2 text-xss text-gray-600 gap-2 my-2 ">
              {item.items.map((it) => (
                <div key={it.key} className="flex items-center justify-center">
                  <button className="flex items-center flex-col hover:bg-sky-100 px-4 py-2 rounded cursor-pointer">
                    <img src={it.image} className="w-12" alt="" />
                    <p>{it.label}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
