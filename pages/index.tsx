import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header} from './Components/Header'
import { Slider } from './Components/Slider'
import { Card } from './Components/Card'
import { Cta } from './Components/Cta'
import { Footer } from './Components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>My site teste</title>
        
      </Head>
      <Header />
      <Slider
        item={['/666.png', '/fff.png']}  
      >
      </Slider>
      <div className="site-section bg-light pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ml-auto">
              <div className="row mb-4">
                <div className="col-12 text-center mb-4">
                  <h3 className="section-sub-title">Team</h3>
                  <h2 className="section-title mb-4">Our Team</h2>
                </div>
                <Card 
                  title='Lorem Ipsum'
                  img='/img/products/produto-1.jpg'
                  content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ducimus temporibus, quod ipsa fuga fugiat deserunt.'
                  link='/'
                />
                <Card 
                  title='Lorem Ipsum 2'
                  img='/img/products/produto-1.jpg'
                  content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ducimus temporibus, quod ipsa fuga fugiat deserunt.'
                  link='/'
                />
                <Card 
                  title='Lorem Ipsum 3'
                  img='/img/products/produto-1.jpg'
                  content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ducimus temporibus, quod ipsa fuga fugiat deserunt.'
                  link='/'
                />
                <Card 
                  title='Lorem Ipsum 4'
                  img='/img/products/produto-1.jpg'
                  content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ducimus temporibus, quod ipsa fuga fugiat deserunt.'
                  link='/'
                />
                <Card 
                  title='Lorem Ipsum 5'
                  img='/img/products/produto-1.jpg'
                  content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ducimus temporibus, quod ipsa fuga fugiat deserunt.'
                  link='/'
                />
                <Card 
                  title='Lorem Ipsum 6'
                  img='/img/products/produto-1.jpg'
                  content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ducimus temporibus, quod ipsa fuga fugiat deserunt.'
                  link='/'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-area pt-5 pb-4">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-md-6 mb-5 mb-lg-0 position-relative">
              <img src="/img/about/about_1.jpg" className="img-fluid" alt="Image" />
              <div className="experience">
                <span className="year">50 anos</span>
                <span className="caption">de experiência</span>
              </div>
            </div>
            <div className="col-md-5 ml-auto">
              <h3 className="section-sub-title">Sobre Nós</h3>
              <h2 className="section-title mb-3">Bem-vindo à Metal BR</h2>
              <p className="mb-4">Somos uma empresa que nasceu em meio a crise, aprendendo a lidar com os mais diversos desafios, porém sempre mantendo a ética, honestidade e a qualidade do serviço. Superamos sempre a expectativa de nossos clientes, oferecendo um excelente atendimento  durante e pós obra. Com apoio de grandes profissionais, a empresa trabalha para crescer cada vez mais, sendo justa e mantendo o melhor preço do mercado!</p>
              <p><a href="sobre-nos.php" className="btn main_btn">Sobre Nós</a></p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer></Footer>

    </>

      
  )
}
