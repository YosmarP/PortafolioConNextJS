//import Navbar from "./Navbar";
//import {useEffect} from "react";
//import {useRouter} from "next/router";
//import NProgress from 'nprogress'
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import NProgress from "nprogress";
import nProgress from "nprogress";
const Layout = ({ children }) => {
    const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
    return (
        <>

            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            <footer className="bg-light text-dark text-center">
                <div className="container py-4">
                    <h1>&copy; Yosmar Portafolio</h1>
                    <p>2021 - {new Date().getFullYear()} </p>
                    <p>Todos los derechos reservados</p>
                </div>
            </footer>

        </>
    )
}
export default Layout;