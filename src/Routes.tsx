import App from "./components/pages/App"
import Dashboard from "./components/pages/Dashboard"
import PrivateRoutes from "./components/private_routes/PrivateRoutes";
import PublicRoutes from "./components/private_routes/PublicRoutes";

const routes = [
    {
        path: "/",
        element: (
        <PublicRoutes>
            <App />
        </PublicRoutes>),
    },
    {
        path: "/dashboard",
        element: (
        <PrivateRoutes>
            <Dashboard />
        </PrivateRoutes>),
    }
];

export default routes;