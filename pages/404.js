import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
    <Layout>
        <h1>404</h1>
        <p>Esta página no existe. Por favor Vuelve a <Link href="/"><a>
        Portafolio.</a></Link> </p>
    </Layout>
)
export default custom404;