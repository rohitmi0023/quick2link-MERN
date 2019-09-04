import React, { Component } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
} from 'reactstrap';
import './GetCarousel.css'

const items = [
	{
		src:'https://i.ytimg.com/vi/pyBtwWDzacI/maxresdefault.jpg',
		id: 1,
		altText: 'Slide 1',
		caption: 'SOCIAL',
	},
	{
		src:'https://www.macworld.co.uk/cmsdata/features/3668897/apple-tv-app_thumb800.jpg',
		id: 2,
		altText: 'Slide 2',
		caption: 'MOVIES',
	},
	{
		src:'https://4.bp.blogspot.com/-gTUOu6wluzs/WhRkglVLXDI/AAAAAAAABVs/O1to42D_C7MA22xUNAfX9GDm4GUR0-WwwCLcBGAs/s1600/Best-Music-Streaming-Apps-for-iPhone-iPad.jpg',
		id:'3',
		altText:'movies',
		caption:'MUSIC',
	},
	{
		src: 'https://www.101greatgoals.com/wp-content/uploads/2019/04/LIVE-STREAMING-1024x640.jpg',
		id: '4',
		altText: 'sports',
		caption:'SPORTS',
	}
];

class GetCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	render() {
		
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					className='custom-tag'
					tag='div'
					key={item.id}
					onExiting={this.onExiting}
					onExited={this.onExited}
				>
					
					<img src={item.src} className='d-block w-100' alt={item.altText} style={{maxHeight:'500px',maxWidth:'100%',
				display:'block', marginLeft:'auto', marginRight:'auto'}} />	
					</CarouselItem>
			);
		});

		return (
			<div>
				<style>
					{`.custom-tag {
			}`}
				</style>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					{slides}
					<CarouselControl
						direction='prev'
						directionText='Previous'
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction='next'
						directionText='Next'
						onClickHandler={this.next}
					/>
				</Carousel>
			</div>
		);
	}
}

export default GetCarousel;
