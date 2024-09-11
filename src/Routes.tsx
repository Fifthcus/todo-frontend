import App from "./components/pages/App"
import Dashboard from "./components/pages/Dashboard"

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/api/dashboard",
        element: <Dashboard />
    }
];

export default routes;