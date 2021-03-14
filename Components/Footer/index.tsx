import React from 'react'

export function Footer(){
    return(
        <footer className="footer-area area-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 single-footer-widget">
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt mr-1"></i>
                                <a href="#">Rua dos Rainúnculos, 207 São Paulo, SP 03204-090, Brasil</a>
                            </li>
                            <li>
                                <i className="fas fa-envelope mr-1"></i>
                                <a href="mailto:atendimento@metalbr.com.br">atendimento@metalbr.com.br</a>
                            </li>
                            <li>
                                <i className="fas fa-phone mr-1"></i>
                                <a href="tel:+552649-3882">(26) 49-3882</a>
                            </li>
                            <li>
                                <i className="fab fa-whatsapp mr-1"></i>
                                <a href="tel:+5511961747456">11 96174-7456</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="sobre-nos.php">Sobre Nós</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="contato.php">Contato</a></li>
                            <li><a href="#">Mapa do Site</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-sm-6 single-footer-widget">
                        <h4>Localização</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2541592985904!2d-46.56584088547911!3d-23.595216184666018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c574cfc91e7%3A0x99b2abc53eece5a0!2sRua%20dos%20Rain%C3%BAnculos%2C%20207%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003204-090!5e0!3m2!1spt-BR!2sbr!4v1598893553053!5m2!1spt-BR!2sbr" width="100%" height="250"></iframe>
                    </div>
                </div>

                <div className="row footer-bottom d-flex justify-content-between">
                    <p className="col-lg-4 col-sm-12 footer-text px-0">
                        Metal BR &copy;<script>document.write(new Date().getFullYear());</script> Todos os Direitos Reservados
                    </p>
                    <div className="col-lg-2 footer-social">
                        <img src="/img/logo-bloomin.png" alt="logo Bloomin" />
                    </div>
                </div>
            </div>
        </footer>
    )
}