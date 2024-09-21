import { NavLink, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const {pathname} = useLocation();
  let currentLink = '';

  const crumbs =pathname.split('/').filter((x) => x);
  console.log(pathname)
  
  const breadcrumbLinks = crumbs.map((crumb, index) => {
    currentLink += `/${crumb}`;
    return (
      <div className="crumb text-[#b3b3b3] bg-transparent" key={index}>
        <NavLink className="crumb hover:underline" to={currentLink}>
          {crumb.replace(/-/g, ' ')}
        </NavLink>
        {index < crumbs.length - 1 && <span className=" mx-1">{`>`}</span>}
      </div>
    );
  });

  return (
    <>
  {pathname!=='/'?<nav className="w-full px-6 lg:px-28 py-4 text-[#b3b3b3] bg-transparent flex space-x-2">
      <NavLink className="crumb hover:underline" to="/">
        Home
      </NavLink>
      {breadcrumbLinks.length > 0 && <span className=" mx-1">{`>`}</span>}
      {breadcrumbLinks}
    </nav>:""}
    </>
  );
};

export default BreadCrumb;
