import PersistLogin from "./components/account/PersistLogin";
import App from "./components/pages/App"
import Dashboard from "./components/pages/Dashboard"
import PublicRoutes from "./components/private_routes/PublicRoutes";

const routes = [
    {
        path: "/",
        element: (
            <PublicRoutes>
                <App/>
            </PublicRoutes>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <PersistLogin>
                <Dashboard/>
            </PersistLogin>
        ),
    }
];

export default routes;