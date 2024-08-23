import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

//before Lazy import in order 
import { SuspenseComponent } from "./Suspense/SuspenseComponent";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Error404 = lazy(() => import("./pages/Not404"));


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SuspenseComponent /*fallback={<Loading />}*/><Navbar /></SuspenseComponent>}>
                <Route index element={<SuspenseComponent><Home /></SuspenseComponent>} />
                <Route path="/about" element={<SuspenseComponent><About /></SuspenseComponent>} />
                <Route path="/career" element={<SuspenseComponent><Career /></SuspenseComponent>} />
            </Route>
            <Route path="*" element={<SuspenseComponent><Error404 /></SuspenseComponent>} />
        </Routes>
    );
};

export default App;
