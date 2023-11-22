import React from "react";
import { Link } from "react-router-dom";
import "../styles/footerStyle.css";

const Footer = () => {
  return (
    <footer
      className="text-center text-white mt-4"
      style={{ backgroundColor: "rgba(20,20,20,0.8)" }}
    >
      <div className="p-4">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example21">
                    Email address
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="sectionFooter">
          <div className="footerdivImg">
            <div
              className="elementor-element elementor-element-4dd53a4e ob-has-background-overlay elementor-widget elementor-widget-image"
              data-id="4dd53a4e"
              data-element_type="widget"
              data-settings='{"_ob_photomorph_use":"no","_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  className="ImgLogo"
                  alt=""
                  src="https://consulting.construction/wp-content/uploads/elementor/thumbs/Consulting-Construction_Soluciones-integrales-para-la-industria-AEC_logoW-po2z60znnm1ypcpd6tsb9443x322o3bd1tlfnfbtb0.png"
                />
              </div>
            </div>
          </div>

          <div className="footerdivInfo">
            <div
              className="elementor-element elementor-element-8dfc7cf ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri"
              data-id="8dfc7cf"
              data-element_type="widget"
              data-settings='{"_ob_use_harakiri":"yes","_ob_harakiri_writing_mode":"inherit","_ob_harakiri_text_clip":"none","_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Información de Contacto
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-34d04ccd elementor-widget-divider--view-line ob-has-background-overlay elementor-widget elementor-widget-divider"
              data-id="34d04ccd"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6ed0859 elementor-icon-list--layout-traditional elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list"
              data-id="6ed0859"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i
                        aria-hidden="true"
                        className="fas fa-map-marker-alt"
                      ></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      Calle Goya 561
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-b96363b elementor-icon-list--layout-traditional elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list"
              data-id="b96363b"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-text">
                      Col. Prados Providencia C.P 44670 <br />
                      Guadalajara, Jalisco. México
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-58026f7 elementor-icon-list--layout-traditional elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list"
              data-id="58026f7"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="fas fa-phone-alt"></i>{" "}
                    </span>
                    <span className="elementor-icon-list-text">
                      +52 33 3640 3179
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://api.whatsapp.com/send?phone=523315876661"
                      target="_blank"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="icon icon-whatsapp-2"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        {" "}
                        +52 1 33 1587 6661
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="mailto:info@consulting.construction"
                      target="_blank"
                    >
                      <span className="elementor-icon-list-icon">
                        <i aria-hidden="true" className="far fa-envelope"></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        info@consulting.construction
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-1f6e9577 e-grid-align-left e-grid-align-mobile-center elementor-shape-rounded elementor-grid-0 ob-has-background-overlay elementor-widget elementor-widget-social-icons"
              data-id="1f6e9577"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="social-icons.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-social-icons-wrapper elementor-grid">
                  <span className="elementor-grid-item">
                    <Link to="/#" className="HiperLink" target="_blank">
                      <span className="elementor-screen-only">Facebook</span>
                      <i className="fab fa-facebook"></i>{" "}
                    </Link>
                  </span>
                  <span className="elementor-grid-item">
                    <Link
                      className="HiperLink"
                      to="https://www.instagram.com/aectechnology_mx/"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Instagram</span>
                      <i className="fab fa-instagram"></i>{" "}
                    </Link>
                  </span>
                  <span className="elementor-grid-item">
                    <Link
                      className="HiperLink"
                      to="https://www.linkedin.com/company/aec-technology-mx"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Linkedin</span>
                      <i className="fab fa-linkedin"></i>{" "}
                    </Link>
                  </span>
                  <span className="elementor-grid-item">
                    <Link
                      className="HiperLink"
                      to="https://www.youtube.com/channel/UCAEXn31MuxggXl7pys-QbtA/featured"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Youtube</span>
                      <i className="fab fa-youtube"></i>{" "}
                    </Link>
                  </span>
                  <span className="elementor-grid-item">
                    <Link
                      className="HiperLink"
                      to="https://twitter.com/AECTechnologyMX"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Twitter</span>
                      <i className="fab fa-twitter"></i>{" "}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footerdivDivition">
            <div
              className="elementor-element elementor-element-5c19e6ad ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri"
              data-id="5c19e6ad"
              data-element_type="widget"
              data-settings='{"_ob_use_harakiri":"yes","_ob_harakiri_writing_mode":"inherit","_ob_harakiri_text_clip":"none","_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Divisiones
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7b989bf8 elementor-widget-divider--view-line ob-has-background-overlay elementor-widget elementor-widget-divider"
              data-id="7b989bf8"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="divider.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-5ec3ea7d elementor-icon-list--layout-traditional elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list"
              data-id="5ec3ea7d"
              data-element_type="widget"
              data-settings='{"_ob_perspektive_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no","_ob_widget_stalker_use":"no"}'
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/project-management/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        C&amp;C Project Management
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/aec-design/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        AEC Design
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/bim-vdc/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        C&amp;C BIM/VDC
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/lean-construction-2/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        C&amp;C Lean Construction
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/ingestructuras/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        Ingestructuras
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/aec-technology/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        AEC Technology
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/aec-software/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        AEC Software
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link
                      className="HiperLink"
                      to="https://consulting.construction/divisiones/aec-institute-2/"
                    >
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">
                        AEC Institute
                      </span>
                    </Link>
                  </li>
                  <li className="elementor-icon-list-item">
                    <Link className="HiperLink" to="/#">
                      <span className="elementor-icon-list-icon">
                        <i
                          aria-hidden="true"
                          className="fas fa-angle-right"
                        ></i>{" "}
                      </span>
                      <span className="elementor-icon-list-text">CITI AEC</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <Link
          className="text-white"
          target="_blank"
          to="https://consulting.construction/"
        >
          Consulting & Construction
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
