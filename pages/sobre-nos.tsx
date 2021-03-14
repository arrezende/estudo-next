import Head from 'next/head'
import { Breadcrumb } from './Components/Breadcrumb'
import { Footer } from './Components/Footer'
import {Header} from './Components/Header'

export default function Sobre(){
    return(
        <>
        <Head>
        <title>Sobre Nós</title>
        </Head>
        <Header />
        <Breadcrumb
            title='Sobre Nós'
            link='/sobre-nos'
        />
        <section className="about-area mt-5 mb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-5 mb-lg-0 position-relative">
                        <img src="img/about/about_1.jpg" className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-md-5 ml-auto">
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet auctor nunc. Praesent pellentesque neque justo, ac rutrum mi tincidunt et.</p>
                        <p>Duis eget eros auctor elit consequat luctus nec nec magna. Vivamus augue massa, accumsan eget diam id, sollicitudin suscipit velit.</p>
                        <p>Phasellus bibendum est turpis, et semper libero efficitur eget. Quisque eget felis dapibus, mollis odio sed, lobortis orci. Phasellus imperdiet viverra sapien in sollicitudin.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
       </>
    )
}
