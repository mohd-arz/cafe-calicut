import { Swiper, SwiperSlide,SwiperRef } from 'swiper/react';
import 'swiper/css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Navigation, } from 'swiper/modules';
import {MenuDrawer} from '../components/app/MenuDrawer';
import Item from '../components/app/Item';
import Header from '../components/app/Header';


function Menu() {
  const [menu,setMenu] = useState();
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_BACKEND_URL+'/')
    .then(res=>{
      console.log(res.data.data)
      return setMenu(res.data.data);
    })
  },[])

  return (
    <>
    <Header/>
    {
      menu &&
      <Item menu={menu[index].name} dishes={menu[index].details}/>
    }
    <MenuDrawer menu={menu} setIndex={setIndex} />
    </>
  );
}

export default Menu;
