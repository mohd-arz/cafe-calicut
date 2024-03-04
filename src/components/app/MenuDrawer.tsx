import menuItem from '../../json/menu.json';
import { useRef,useEffect } from 'react';
import { SwiperRef } from 'swiper/react';

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface DrawerProps {
  sliderRef: React.RefObject<SwiperRef>;
}

export function MenuDrawer({sliderRef}:DrawerProps) {

  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    if(menuRef.current)
      menuRef.current.classList.add('open-menu-active');
  },[])

  function slideTo(index:number){
    setTimeout(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },350)   
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(index);
    }
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button ref={menuRef} className={`fixed rounded-full z-10 mb-4 open-menu`} style={{backgroundImage:`url("https://demosites.meridian.net.in/2024/cafecalicut/demo/images/bg1.jpg")`}}>
          Open Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="m-auto px-5 sm:px-10 max-w-[35-vw] max-h-[50vh] overflow-auto">
          <DrawerHeader>
            <DrawerTitle className='text-center'>Menu</DrawerTitle>
          </DrawerHeader>
            {menuItem.map((item,index)=>{
              return(<div>
                  <DrawerClose asChild className=''>
                    <div onClick={()=>slideTo(index)} className='flex justify-between mb-3 mx-10' style={{cursor:"pointer"}}>
                      <div className="text-center">
                        {item.menu}
                        </div>
                      <div>{item.dishes.length}</div>
                    </div>
                  </DrawerClose>
                  </div>
                );
              })}
          <DrawerFooter>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
