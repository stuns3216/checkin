import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player'


import "./main.css";

export default class Responsive extends Component {
	render() {
		
		return (
			<div className="intro">
				<div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">
            check in is a website who can help you to reserve your events.
          </p>
          <div class="video-description">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  />
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          
          </div>
          <hr class="my-4" />

          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
			</div>
		);
	}
}
