import 'swiper/css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {MenuDrawer} from '../components/app/MenuDrawer';
import Item from '../components/app/Item';
import Header from '../components/app/Header';

type ItemType = {
  id: number,
  catagory_id: number,
  heading: string,
  description: string,
  price: number,
  image: string,
  updated_at: string,
  created_at: string
}

type MenuType = {
  id: number,
  name: string,
  image: string,
  ordering_id: number,
  updated_at: string,
  created_at: string,
  details: ItemType[]
}

function Menu() {
  const [menu,setMenu] = useState<MenuType[]>();
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_BACKEND_URL+'/')
    .then(res=>{
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
    <MenuDrawer menu={menu} setIndex={setIndex} i={index} />
    </>
  );
}

export default Menu;
