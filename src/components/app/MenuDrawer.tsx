import { useRef,useEffect } from 'react';

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
  menu:any
  setIndex:any
  i:any
}

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

export function MenuDrawer({menu,setIndex,i}:DrawerProps) {

  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    if(menuRef.current)
      menuRef.current.classList.add('open-menu-active');
  },[])

  function goTo(index:number){
    setIndex(index);
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button ref={menuRef} className={`fixed rounded-full z-10 mb-4 open-menu`}>
          Open Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="m-auto px-5 sm:px-10 max-w-[35-vw] max-h-[50vh] overflow-auto">
          <DrawerHeader>
            <DrawerTitle className='text-center'>Menu</DrawerTitle>
          </DrawerHeader>
            {menu && menu.map((item:MenuType,index:number)=>{
              return(<div>
                  <DrawerClose asChild className=''>
                    <div onClick={()=>goTo(index)} className={`flex justify-between mb-3 mx-10 menu ${i==index ? 'menu-active':''}`} style={{cursor:"pointer"}}>
                      <div className="text-center">
                        {item.name}
                        </div>
                      <div>{item.details.length}</div>
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
