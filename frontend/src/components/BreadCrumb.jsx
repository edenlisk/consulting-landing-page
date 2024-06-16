import { NavLink, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/').filter((x) => x);
  
  const breadcrumbLinks = crumbs.map((crumb, index) => {
    currentLink += `/${crumb}`;
    return (
      <div className="crumb" key={index}>
        <NavLink className="crumb text-white hover:underline" to={currentLink}>
          {crumb}
        </NavLink>
        {index < crumbs.length - 1 && <span className="text-white mx-1">/</span>}
      </div>
    );
  });

  return (
    <nav className="w-full p-6 bg-red-500 flex space-x-2">
      <NavLink className="crumb text-white hover:underline" to="/">
        Home
      </NavLink>
      {breadcrumbLinks.length > 0 && <span className="text-white mx-1">/</span>}
      {breadcrumbLinks}
    </nav>
  );
};

export default BreadCrumb;
