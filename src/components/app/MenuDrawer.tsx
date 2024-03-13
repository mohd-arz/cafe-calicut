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
}

export function MenuDrawer({menu,setIndex}:DrawerProps) {

  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    if(menuRef.current)
      menuRef.current.classList.add('open-menu-active');
  },[])

  function goTo(index){
    document.querySelectorAll('.menu').forEach(item=>{
      item.classList.remove('menu-active');
    })
    document.querySelector(`[data-index="${index}"]`)?.classList.add('menu-active')
    console.log(document.querySelector(`[data-index="${index}"]`))
    setIndex(index);
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
            {menu && menu.map((item,index)=>{
              return(<div>
                  <DrawerClose asChild className=''>
                    <div onClick={()=>goTo(index)} className='flex justify-between mb-3 mx-10 menu' data-index={index}  style={{cursor:"pointer"}}>
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
