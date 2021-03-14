import Head from 'next/head'
import { Breadcrumb } from './Components/Breadcrumb'
import { Footer } from './Components/Footer'
import {Header} from './Components/Header'
import { Mapa } from './Components/Mapa'

export default function Contato(){
    return(
        <>
            <Head>
                <title>Contato</title>
            </Head>
            <Header></Header>
            <Breadcrumb
                title='Contato'
                link='/contato'
            />
              <section className="contact-section area-padding">
                <div className="container">
                


                    <div className="row">
                        <div className="col-12">
                        <h2 className="contact-title">Entre em Contato</h2>
                        </div>
                        <div className="col-lg-8">
                        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Mensagem"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" name="name" id="name" type="text" placeholder="Nome" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <input className="form-control" name="email" id="email" type="email" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                <input className="form-control" name="subject" id="subject" type="text" placeholder="Assunto" />
                                </div>
                            </div>
                            </div>
                            <div className="form-group mt-3">
                            <button type="submit" className="button button-contactForm">Enviar</button>
                            </div>
                        </form>


                        </div>

                        <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fas fa-home"></i></span>
                            <div className="media-body">
                            <h3>Antônio de Barros, 2450</h3>
                            <p>Vila Carrão - São Paulo/SP</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fas fa-tablet-alt"></i></span>
                            <div className="media-body">
                            <h3><a href="tel:454545654">(11) 91515-8587</a></h3>
                            <p>Seg. à Sex: 08hs às 17:30</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fas fa-mail-bulk"></i></span>
                            <div className="media-body">
                            <h3><a href="mailto:email@dominio.com.br">email@dominio.com.br</a></h3>
                            <p>Envie-nos um e-mail à qualquer momento!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-sm-block mb-5 pb-4">
                    <Mapa />
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}