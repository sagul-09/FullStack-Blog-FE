import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error405 from "./componenta/error404.jsx";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Login from './componenta/login/loginComponent.jsx';
import Register from './componenta/register/registerComponent.jsx';
import HomeBlog from './componenta/home/homeComponent.jsx';
import Blog from './componenta/blog/blogComponent.jsx';
import Cookies from 'js-cookie';

const RoleBasedRoute = ({ roles, children }) => {
    const token = Cookies.get('token');
    let role = null;

    if (token) {
        const decodedToken = jwtDecode(token);
        role = decodedToken.payload.role;
    }

    if (!role) {
        return <Navigate to="/login" />;
    } else if (roles.includes(role)) {
        return children;
    } else {
        return <Navigate to="/homeblog" />;
    }
};

const UnauthenticatedRoute = ({ children }) => {
  const token = Cookies.get('token');

  if (token) {
    return <Navigate to="/homeBlog" />;
  } else {
    return children;
  }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <RoleBasedRoute roles={["user"]}><App/></RoleBasedRoute>,
    },
    {
        path: "/login",
        element: <UnauthenticatedRoute><Login /></UnauthenticatedRoute>,
    },
    {
        path: "/register",
        element: <UnauthenticatedRoute><Register /></UnauthenticatedRoute>,
    },
    {
        path: "/add",
        element: (
            <RoleBasedRoute roles={["user"]}>
                <Blog />
            </RoleBasedRoute>
        ),
    },
    {
        path: "/homeBlog",
        element: (
            <RoleBasedRoute roles={["user"]}>
                <HomeBlog />
            </RoleBasedRoute>
        ),
    },
//   {
//     path: "/superadmindashboard",
//     element: (
//       <ProtectedRoute allowedRoles={["superadmin"]}>
//         <Dashboard superadmin />
//       </ProtectedRoute>
//     ),
//   },
  {
    path: "*",
    element: <Error405 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);