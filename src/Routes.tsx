import PersistLogin from "./components/account/PersistLogin";
import RequireAuth from "./components/account/RequireAuth";
import App from "./components/pages/App"
import Dashboard from "./components/pages/Dashboard"
import PrivateRoutes from "./components/private_routes/PrivateRoutes";
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
        element: <PersistLogin />,
        children: [
            {
                element: <RequireAuth />,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
];

export default routes;