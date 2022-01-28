import Login from "../../pages/Login";


const PublicRoutes = [
  {
    component: Login,
    path: "/",
    exact: true,
  },
  {
    component: Login,
    path: "/login",
  },
  
];
export default PublicRoutes;
