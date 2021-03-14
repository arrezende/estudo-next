import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function Header() {
    return(
        <header className="header_area">
        <div className="top_menu row m0">
            <div className="container">
                <div className="float-right">
                    <a className="dn_btn" href="mailto:atendimento@metalbr.com.br">
                        <i className="fas fa-envelope"></i>
                        atendimento@metalbr.com.br
                    </a>
                    <a className="dn_btn" href="tel:+552649-3882">
                        <i className="fas fa-phone"></i>
                        (26) 49-3882
                    </a>
                </div>
                <div className="float-left">
                    <ul className="list header_social">
                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                        <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                        <li><a href="#"><i className="ti-skype"></i></a></li>
                        <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                    </ul>   
                </div>
            </div>  
        </div>  
        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link href="/"><a className="navbar-brand logo_h"><Image src="/img/logo.png" width={178}
        height={47}/></a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li> 
                            <li className="nav-item"><Link href="/sobre-nos"><a className="nav-link">Sobre Nós</a></Link></li> 
                            <li className="nav-item"><Link href="/"><a className="nav-link">Produtos</a></Link></li> 
                            <li className="nav-item submenu dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Serviços</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Blog Details</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">element</a></li>
                                </ul>
                            </li> 
                            <li className="nav-item"><Link href="/contato"><a className="nav-link">Contato</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
}