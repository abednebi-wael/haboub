import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Home() {
  return (
    <div className='home-slider'>
     <Swiper
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 7500,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     loop={true}
     className='home-slider'>

     <SwiperSlide>
     <div >
		<div  className="slide slide1">
			<div >
				<div >
					<div className="content">
						<h3>Our Collection</h3>
						<Link to={'#'} className='red'>shop now</Link>
				</div>
			</div>
		</div>
	</div>
     </div>
     </SwiperSlide>
     <SwiperSlide>
     <div >
		<div  className="slide slide2">
			<div >
				<div >
					<div className="content">
						<h3>Our Collection</h3>
						<Link to={'#'} className='red'>shop now</Link>
				</div>
			</div>
		</div>
	</div>
     </div>
     </SwiperSlide>
     <SwiperSlide>
     <div >
		<div  className="slide slide3">
			<div >
				<div >
					<div className="content">
						<h3>Our Collection</h3>
						<Link to={'#'} className='red'>shop now</Link>
				</div>
			</div>
		</div>
	</div>
     </div>
     </SwiperSlide>
     <SwiperSlide>
     <div >
		<div  className="slide slide4">
			<div >
				<div >
					<div className="content">
						<h3>Our Collection</h3>
						<Link to={'#'} className='red'>shop now</Link>
				</div>
			</div>
		</div>
	</div>
     </div>
     </SwiperSlide>
     <SwiperSlide>
     <div >
		<div  className="slide slide5">
			<div >
				<div >
					<div className="content">
						<h3>Our Collection</h3>
						<Link to={'#'} className='red'>shop now</Link>
				</div>
			</div>
		</div>
	</div>
     </div>
     </SwiperSlide>
     </Swiper>
    </div>
     
  )
}

export default Home