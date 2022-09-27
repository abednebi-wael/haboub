import React from 'react'

import {Link} from 'react-router-dom'
import H1 from '../images/h1.jpg'
import H2 from '../images/h2.jpg'
import H3 from '../images/h3.jpg'
import H4 from '../images/h4.jpg'
import H5 from '../images/h5.jpg'
import H6 from '../images/h6.jpg'
import H7 from '../images/h7.jpg'
import H8 from '../images/h8.jpg'
import H9 from '../images/h9.jpg'
import H10 from '../images/h10.jpg'
import H11 from '../images/h11.jpg'
import F1 from '../images/f1.jpg'
import F2 from '../images/f2.jpg'
import F3 from '../images/f3.jpg'
import F6 from '../images/f6.jpg'
import F9 from '../images/f9.png'
import E1 from '../images/e1.jpg'
import E2 from '../images/e2.jpg'
import E3 from '../images/e3.jpg'
import E4 from '../images/e4.jpg'
import O1 from '../images/o1.jpg'
import O10 from '../images/o10.png'
import O5 from '../images/o5.jpg'
import Fp1 from '../images/fp1.png'
import F13 from '../images/f13.jpg'
import Fp3 from '../images/fp3.png'
import Hp1 from '../images/hp1.png'
import Hp2 from '../images/hp2.png'
import Hp3 from '../images/hp3.png'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../App.css'

// import required modules
import { Pagination } from "swiper";





function Shop() {
  return (
   <div>
	<div className="section">
			<div className="container-s">
				<div className="row">
					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src={H9} alt=""/>
							</div>
							<div className="shop-body">
								<h3>Men <br/> Collection</h3>
								<Link to={'#'} className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					

					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src={E1} alt=""/>
							</div>
							<div className="shop-body">
								<h3>Baby <br/>Collection</h3>
								<Link to={'#'} className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					

					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src={F6} alt=""/>
							</div>
							<div className="shop-body">
								<h3>Women <br/>Collection</h3>
								<Link to={'#'} className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
				
				</div>
				
			</div>
			
		</div>
		<div className="new_arrivals">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title new_arrivals_title">
						<h2>New Arrivals</h2>
					</div>
				</div>
			</div>
			<div className="grid1">
				<div className="col text-center">

				</div>
			</div>

			<div className="row">
				<div className="col">
					<div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
        
		
					<Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >			
      
	  <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H1} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Fujifilm X100T </Link></h6>
									<div className="product_price">$520.00</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>

       <SwiperSlide className='swiper-slide'>
	  

						<div className="product-item women">
							<div className="product product_filter">
								<div className="product_image">
									<img src={F1} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>T-shirt</Link></h6>
									<div className="product_price">35dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
<SwiperSlide className='swiper-slide'>
						<div className="product-item women">
							<div className="product product_filter">
								<div className="product_image">
									<img src={F2} alt=""/>
								</div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>capuche </Link></h6>
									<div className="product_price">65dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
        <SwiperSlide className='swiper-slide'>
						<div className="product-item accessories">
							<div className="product product_filter">
								<div className="product_image">
									<img src={O1} alt=""/>
								</div>
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>sac isotheme </Link></h6>
									<div className="product_price">25dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
					<SwiperSlide className='swiper-slide'>	
		

						<div className="product-item women ">
							<div className="product product_filter">
								<div className="product_image">
									<img src={F3} alt=""/>
								</div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>sweat & casquette</Link></h6>
									<div className="product_price">75dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>

						<SwiperSlide className='swiper-slide'>

						<div className="product-item accessories">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={O5} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Sac a Dos </Link></h6>
									<div className="product_price">45dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
		<SwiperSlide className='swiper-slide'>

						<div className="product-item women">
							<div className="product product_filter">
								<div className="product_image">
									<img src={F9} alt=""/>
								</div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Gilet </Link></h6>
									<div className="product_price">69dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
		<SwiperSlide className='swiper-slide'>

						<div className="product-item accessories">
							<div className="product product_filter">
								<div className="product_image">
									<img src={O10} alt=""/>
								</div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Casquette</Link></h6>
									<div className="product_price">29dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H4} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>T-shirt</Link></h6>
									<div className="product_price">45dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>

					<SwiperSlide className='swiper-slide'>

						<div className="product-item men">
							<div className="product product_filter">
								<div className="product_image">
									<img src={H2} alt=""/>
								</div>
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>T-shirt</Link></h6>
									<div className="product_price">45dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>

						<SwiperSlide className='swiper-slide'>

						<div className="product-item men">
							<div className="product product_filter">
								<div className="product_image">
									<img src={H3} alt=""/>
								</div>
								
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>T-shirt</Link></h6>
									<div className="product_price">45dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
						<div className="product-item baby">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={E1} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>jogging</Link></h6>
									<div className="product_price">60dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H5} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>T-shirt</Link></h6>
									<div className="product_price">59dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item baby">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={E2} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>jegging</Link></h6>
									<div className="product_price">80dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H6} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>T-shirt </Link></h6>
									<div className="product_price">59dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item baby">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={E3} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>jegging </Link></h6>
									<div className="product_price">70dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H7} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Sweat & Casquette</Link></h6>
									<div className="product_price">80dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item baby">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={E4} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Short & T-shirt </Link></h6>
									<div className="product_price">49dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H8} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Gilet</Link></h6>
									<div className="product_price">79dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H10} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Sweat</Link></h6>
									<div className="product_price">69dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
	   <SwiperSlide className='swiper-slide'>
						<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={H11} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Blouson </Link></h6>
									<div className="product_price">89dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
       </SwiperSlide>
						</Swiper>
					</div>
				</div>
				
        
				</div>
				<div className='section_title'>
                                 <h2>platinum Collection</h2>
							</div>
		<Swiper
						slidesPerView={3}
						spaceBetween={10}
						pagination={{
						  clickable: true,
						}}
						modules={[Pagination]}
						className="">
							
<SwiperSlide className='swiper-slide'>
<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={Fp1} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Capuche</Link></h6>
									<div className="product_price">69dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide'>
<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={F13} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Capuche</Link></h6>
									<div className="product_price">69dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide'>
<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={Fp3} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Capuche </Link></h6>
									<div className="product_price">69dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide'>
<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={Hp3} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Jogging </Link></h6>
									<div className="product_price">89dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide'>
<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={Hp2} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Jogging </Link></h6>
									<div className="product_price">89dt</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
</SwiperSlide>
<SwiperSlide className='swiper-slide'>
<div className="product-item men">
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={Hp1} alt=""/>
								</div>
								
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"></div>
								<div className="product_info">
									<h6 className="product_name"><Link to={'#'}>Gilet sans manche </Link></h6>
									<div className="product_price">$520.00</div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><Link to={'#'}>add to cart</Link></div>
						</div>
</SwiperSlide>


						</Swiper>
						
		</div>
	</div>

   </div>
  )
}

export default Shop