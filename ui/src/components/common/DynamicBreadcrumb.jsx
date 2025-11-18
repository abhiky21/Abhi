import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export default function DynamicBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbNameMap = {
    "/": "Home",
    "/dashboard": "Dashboard",
    "/schedule": "Schedule",
    "/functions": "Functions",
    "/facilities": "Facilities",
    "/fee-payment": "Fee Payment",
  };

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...pathSnippets.map((_, index) => {
      const url = "/" + pathSnippets.slice(0, index + 1).join("/");
      return {
        title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
      };
    }),
  ];

  return <Breadcrumb items={items} />;
}
