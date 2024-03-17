import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomepageVOne from "pages/HomepageVOne";
import HomepageVTwo from "pages/HomepageVTwo";
import HomepageVThree from "pages/HomepageVThree";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductList from "pages/ProductList";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomepageVOne />,
    },
    {
      path: "homepagevtwo",
      element: <HomepageVTwo />,
    },
    {
      path: "homepagevthree",
      element: <HomepageVThree />,
    },
    {
      path: "categorieswithsidebar",
      element: <CategorieswithSidebar />,
    },
    {
      path: "productlist",
      element: <ProductList />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
