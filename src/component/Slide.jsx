import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slide = () => {
  return (
    <>
      <section className="slide">
        <div className="inner">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
            <SwiperSlide><img src="img/event_01.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/event_02.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/event_03.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/event_04.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/event_05.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img/event_06.png" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Slide