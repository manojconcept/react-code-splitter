import { Routes,Route, } from "react-router-dom";
import { lazy,Suspense } from "react";

const SuspendPage = (element, fallback = <div />) => {
	return (
		<Suspense fallback={fallback}>
			{element}
		</Suspense>
	)
}

const Navbar = lazy(() => import("./components/Navbar"))
const Home  = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"))
const Career = lazy(() => import("./pages/Career"))
const Error404 = lazy(() => import("./pages/Not404"))

const App = () =>{
    return (
        <Routes>
            <Route path="/" element={SuspendPage(<Navbar/>)}>
            <Route index element={SuspendPage(<Home/>)} />
            <Route path="/about" element={SuspendPage(<About/>)} />
            <Route path="/career" element={SuspendPage(<Career/>)} />
            </Route >
            <Route path="*" element={SuspendPage(<Error404/>)} />
        </Routes>
    )
}

export default App;