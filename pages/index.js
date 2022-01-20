import Link from "next/link";
import Layout from "../components/Layout";
import { habilidades, experiencia, proyectos } from "../profile";
const Index = () => (
    <Layout>
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secundary">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="img.jpg" className="img-fluid" alt="Mi foto"></img>
                        </div>
                        <div className="col-md-8 ms-auto">
                            <h1>Yosmar Puig Sánchez</h1>
                            <h3>FullStack Web Developer</h3>
                            <p >lorem ipsum dolor sit amet, consectetur adip</p>
                            <a href="/hire">Contratame</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card body margen">
                        <h1>Habilidades </h1>
                        {
                            habilidades.map(({ habilidad, porcentaje }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{habilidad}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${porcentaje}%` }}
                                        >
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card body margen">
                        <h1> Experiencia </h1>
                        {
                            experiencia.map(({ titulo, descripcion, descripcion2, desde, hasta }, idex) => (
                                <li key={idex}>
                                    <h3>{titulo}</h3>
                                    <h5>{desde}-{hasta}</h5>
                                    <p>
                                        {descripcion}
                                    </p>
                                    <p>
                                        {descripcion2}
                                    </p>
                                </li>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col col-md-12">
                            <h1 className="text-center text-light">Portafolio</h1>
                        </div>
                        {
                            proyectos.map(({ titulo, descripcion, imagen }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="row">
                                    <div className="overflow">
                                        <img src={imagen} alt="portafolio imagen 1"className="card-img-top"></img>
                                    </div>   
                                        <div className="card-body">
                                            <h3>titulo</h3>
                                            <p>descripcion</p>
                                            <a href="#!">know more</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="text-center mt-4">
                        <Link href="#">
                            <a className="btn btn-outline-light">github</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </Layout >

)
export default Index;