import React, { Component } from "react";

export default class clients extends Component {
  render() {
    return (
      <div>
        <section class="testimonial">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <ol class="carousel-indicators tabs">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  >
                    <figure>
                      <img
                        src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    <figure>
                      <img
                        src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  >
                    <figure>
                      <img
                        src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                  </li>
                </ol>
              </div>
              <div class="col-lg-6 d-flex justify-content-center align-items-center">
                <div
                  id="carouselExampleIndicators"
                  data-interval="false"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <h3>WHAT OUR CLIENTS SAY</h3>
                  <h1>TESTIMONIALS</h1>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="quote-wrapper">
                        <p>
                          …I wanted to say thank you to you and the staff of
                          Event Solutions. You have definitely created an
                          enormous amount of confidence for us to use the
                          company in the future. Jenny and I are truly looking
                          forward to creating an amazing holiday party at the
                          Peterson with you. Thank you for everything! I will be
                          in touch with you soon to work on our holiday event!
                        </p>
                        <h3>peter lee</h3>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="quote-wrapper">
                        <p>
                          Event Solutions is a hands-on event company that takes
                          care of all the details from A to Z. They are very
                          good at working with your specific needs and budget in
                          mind. The staff is fantastic, the food is great and
                          they always have a variety of creative options to keep
                          your guests entertained. Working with Event Solutions
                          makes my job so much easier!
                        </p>
                        <h3>peter lee</h3>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="quote-wrapper">
                        <p>
                        I really enjoyed the event
                        </p>
                        <h3>peter lee</h3>
                      </div>
                    </div>
                  </div>
                  <ol class="carousel-indicators indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
