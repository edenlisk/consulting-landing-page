import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useBreadcrumbs = () => {
  const [breadcrumbPaths, setBreadcrumbPaths] = useState(['/']);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== breadcrumbPaths[breadcrumbPaths.length - 1]) {
      setBreadcrumbPaths((prev) => [...prev, location.pathname]);
    }
  }, [location.pathname]);

  const navigateTo = (path) => {
    setBreadcrumbPaths((prev) => {
      if (!prev.includes(path)) {
        return [...prev, path];
      }
      return prev;
    });
    navigate(path);
  };

  return { breadcrumbPaths, navigateTo };
};

export default useBreadcrumbs;
