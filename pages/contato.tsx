import React from 'react'
import Head from 'next/head'
import { Breadcrumb } from '../Components/Breadcrumb'
import { Footer } from '../Components/Footer'
import { Mapa } from '../Components/Mapa'
import { Header } from '../Components/Header'

export default function Contato(){
    return(
        <React.Fragment>
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
                            <form className="form-contact contact_form" action="#" method="post">
                            <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea className="form-control w-100" name="message" id="message" placeholder="Mensagem"></textarea>
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
                            <h3>Ant??nio de Barros, 2450</h3>
                            <p>Vila Carr??o - S??o Paulo/SP</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fas fa-tablet-alt"></i></span>
                            <div className="media-body">
                            <h3><a href="tel:454545654">(11) 91515-8587</a></h3>
                            <p>Seg. ?? Sex: 08hs ??s 17:30</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="fas fa-mail-bulk"></i></span>
                            <div className="media-body">
                            <h3><a href="mailto:email@dominio.com.br">email@dominio.com.br</a></h3>
                            <p>Envie-nos um e-mail ?? qualquer momento!</p>
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
        </React.Fragment>
    )
}