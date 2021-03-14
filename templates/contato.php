<!doctype html>
<html lang="pt-BR">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="img/favicon.png" type="image/png">
    <title>Template Padrão</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/themify-icons.css">
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="vendors/animate-css/animate.css">
    <!-- main css -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>


    <!--================Header Menu Area =================-->
    <header class="header_area">
        <div class="top_menu row m0">
            <div class="container">
                <div class="float-right">
                    <a class="dn_btn" href="mailto:medical@example.com">
                        <i class="fas fa-envelope"></i>
                        email@dominio.com.br
                    </a>
                    <span class="dn_btn">
                        <i class="fas fa-phone"></i>
                        (11) 91515-8587
                    </span>
                </div>
                <div class="float-left">
                    <ul class="list header_social">
                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                        <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                        <li><a href="#"><i class="ti-linkedin"></i></a></li>
                        <li><a href="#"><i class="ti-skype"></i></a></li>
                        <li><a href="#"><i class="ti-vimeo-alt"></i></a></li>
                    </ul>   
                </div>
            </div>  
        </div>  
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li> 
                            <li class="nav-item"><a class="nav-link" href="#">Sobre Nós</a></li> 
                            <li class="nav-item"><a class="nav-link" href="#">Produtos</a></li> 
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Serviços</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Blog Details</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">element</a></li>
                                </ul>
                            </li> 
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!--================Header Menu Area =================-->


 
 <!--================Home Banner Area =================-->
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div
            class="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div class="mb-3 mb-md-0">
              <h1>Contato</h1>
            </div>
            <div class="page_link">
              <a href="index.php">Home</a>
              <a href="contato.php">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Home Banner Area =================-->


  <!-- ================ contact section start ================= -->
  <section class="contact-section area-padding">
    <div class="container">
      <div class="d-none d-sm-block mb-5 pb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4720160109255!2d-46.556705385384234!3d-23.551485167111895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e7d83e8779d%3A0xa2a8d9d4b220e580!2sR.%20Ant%C3%B4nio%20de%20Barros%2C%202450%20-%20Vila%20Carrao%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003401-001!5e0!3m2!1spt-BR!2sbr!4v1573561424740!5m2!1spt-BR!2sbr" width="100%" height="480" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>


      <div class="row">
        <div class="col-12">
          <h2 class="contact-title">Entre em Contato</h2>
        </div>
        <div class="col-lg-8">
          <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                    <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Mensagem"></textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" name="name" id="name" type="text" placeholder="Nome">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" name="email" id="email" type="email" placeholder="E-mail">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input class="form-control" name="subject" id="subject" type="text" placeholder="Assunto">
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <button type="submit" class="button button-contactForm">Enviar</button>
            </div>
          </form>


        </div>

        <div class="col-lg-4">
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="fas fa-home"></i></span>
            <div class="media-body">
              <h3>Antônio de Barros, 2450</h3>
              <p>Vila Carrão - São Paulo/SP</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="fas fa-tablet-alt"></i></span>
            <div class="media-body">
              <h3><a href="tel:454545654">(11) 91515-8587</a></h3>
              <p>Seg. à Sex: 08hs às 17:30</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="fas fa-mail-bulk"></i></span>
            <div class="media-body">
              <h3><a href="mailto:email@dominio.com.br">email@dominio.com.br</a></h3>
              <p>Envie-nos um e-mail à qualquer momento!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ================ contact section end ================= -->



        <!--================ Start Brands Area =================-->
        <section class="brands-area background_one">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="owl-carousel brand-carousel">
                            <!-- single-brand -->
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/brand/1.png" alt="">
                                </div>
                            </div>
                            <!-- single-brand -->
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/brand/2.png" alt="">
                                </div>
                            </div>
                            <!-- single-brand -->
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/brand/3.png" alt="">
                                </div>
                            </div>
                            <!-- single-brand -->
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/brand/4.png" alt="">
                                </div>
                            </div>
                            <!-- single-brand -->
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/brand/5.png" alt="">
                                </div>
                            </div>
                            <!-- single-brand -->
                            <div class="single-brand-item d-table">
                                <div class="d-table-cell">
                                    <img src="img/brand/3.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--================ End Brands Area =================-->

<!-- start footer Area -->
<footer class="footer-area">
    <div class="container">
        <div class="row footer-bottomc d-flex justify-content-between">
            <p class="col-lg-4 col-sm-12 footer-text px-0">
                Bloomin &copy;<script>document.write(new Date().getFullYear());</script> Todos os Direitos Reservados
            </p>
            <!-- <div class="col-lg-4 col-sm-12 footer-social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div> -->
            <div class="col-lg-2 footer-social">
                <img src="img/logo-bloomin.png" alt="logo Bloomin">
            </div>
        </div>
    </div>
</footer>
    <!-- End footer Area -->


    
<!--================Contact Success and Error message Area =================-->
    <div id="success" class="modal modal-message fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                    <h2>Thank you</h2>
                    <p>Your message is successfully sent...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals error -->

    <div id="error" class="modal modal-message fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                    <h2>Sorry !</h2>
                    <p> Something went wrong </p>
                </div>
            </div>
        </div>
    </div>
    <!--================End Contact Success and Error message Area =================-->






    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/stellar.js"></script>
    <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/mail-script.js"></script>
    <script src="js/contact.js"></script>
    <script src="js/jquery.form.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/mail-script.js"></script>
    <script src="js/theme.js"></script>
</body>
</html>