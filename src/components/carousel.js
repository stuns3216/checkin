import React, { Component } from 'react'

export default class carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="http://meetings-events.mci-group.com/wp-content/uploads/2018/09/header-5.jpg"height="500"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="https://www.leaders.com.tn/uploads/content/thumbnails/149986524142_content.jpg"height="500"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.leaders.com.tn/uploads/content/thumbnails/149823047947_content.jpg"height="500"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i2.wp.com/www.elmassaa.tn/wp-content/uploads/2017/02/festival-de-carthage.jpg" height="500"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i1.wp.com/www.leconomistemaghrebin.com/wp-content/uploads/2019/08/ZIARA-sami-lajmi.jpg?fit=960%2C640&ssl=1" height="500"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.teskerti.tn/wp-content/uploads/2019/10/Abdelli-1024x576.jpg" height="500"  class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                
            </div>
        )
    }
}
