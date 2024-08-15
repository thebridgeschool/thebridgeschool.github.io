let appHeader = `
         <!-- Header Start -->
    <div class="header-area">
      <div class="main-header">
        <div class="header-top d-none d-lg-block">
          <div class="container-fluid">
            <div class="col-xl-12">
              <div class="row d-flex justify-content-between align-items-center">
                <div class="header-info-left d-flex">
                  <ul>
                    <li>Phone: +92 334 3133500</li>
                    <li>Email: bridge.pak@gmail.com</li>
                  </ul>
                  <div class="header-social">
                    <ul>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100063700403996"><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/thebridgeschool_tbs/"><i class="fab fa-instagram"></i></a>
                      </li>
                      
                      <li>
                        <a href="https://www.youtube.com/@TheBridgeSchool854"><i class="fab fa-youtube"></i></a>
                      </li>
                  
                    </ul>
                  </div>
                </div>
                <div class="header-info-right d-flex align-items-center">
                  <div class="select-this">
                    <form action="#">
                      <div class="select-itms">
                        <select name="select" id="select1">
                          <option value="">English</option>

                        </select>
                      </div>
                    </form>
                  </div>
                  <ul class="contact-now">
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-bottom header-sticky">
          <div class="container-fluid">
            <div class="row align-items-center">
              <!-- Logo -->
              <div class="col-xl-2 col-lg-2">
                <div class="logo">
                  <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10">
                <div class="menu-wrapper d-flex align-items-center justify-content-end">
                  <!-- Main-menu -->
                  <div class="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="program.html">Gallery</a></li>
                        <li><a href="events.html">Social Internships </a></li>
                        <li><a href="donate.html">Donations</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <!-- Header-btn -->
                  <div class="header-right-btn d-none d-lg-block ml-20">
                    <a href="donate.html" class="btn header-btn">Donate</a>
                  </div>
                </div>
              </div>
              <!-- Mobile Menu -->
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
`;
document.getElementById("app-header").innerHTML = appHeader;