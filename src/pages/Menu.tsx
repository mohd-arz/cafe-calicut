import { Swiper, SwiperSlide,SwiperRef } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { Navigation, } from 'swiper/modules';
import menuItems from '../json/menu.json'
import {MenuDrawer} from '../components/app/MenuDrawer';
import Item from '../components/app/Item';
import Header from '../components/app/Header';


function Menu() {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <>
    <Header/>
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      ref={sliderRef}
      speed={700}
    >
      {menuItems.map(item=>{
        return (
          <SwiperSlide key={item.menu}>
            <Item menu={item.menu} dishes={item.dishes}/>
          </SwiperSlide>
        )
      })}
    </Swiper>
    <MenuDrawer sliderRef={sliderRef}/>
    </>
  );
}

export default Menu;
