import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"



type DishType = {
  id: number,
  catagory_id: number,
  heading: string,
  description: string,
  price: number,
  image: string,
  updated_at: string,
  created_at: string
}

function Item({
  menu,
  dishes,
}:any)
{
  return (
    <main>
      <h1 className='text-3xl md:text-5xl text-center text-white px-0 py-4 font-serif shadow-gray-500 shadow-lg' style={{backgroundImage:`url("https://demosites.meridian.net.in/2024/cafecalicut/demo/images/bg1.jpg")`}}>
        {menu}
      </h1>
      <div className='food-container m-4 sm:m-6 md:m-8'>
        {(dishes.length>0) && dishes.map((dish:DishType)=>{
          return(
            <Dialog>
              <DialogTrigger className='focus:outline-none' tabIndex={-1}>
                <div key={dish.id} className='food-item flex pb-6 gap-6' >
                  <LazyLoadImage
                    alt={dish.heading+' image'}
                    effect="blur"
                    src={"https://cafecalicut.com/menu/storage/images/"+dish.image}
                    className='rounded-2xl xl:max-w-[80%] w-[150px] h-[200px] object-cover flex-shrink-0'
                    visibleByDefault={true}
                  />
                  <div className='flex flex-col items-start'>
                    <h2 className='text-base' style={{fontFamily:'Quicksand'}}>{dish.heading}</h2>
                    <p className='text-xs pt-2 text-start'>{dish.description}</p>
                    <p className='mt-auto'>AED {dish.price}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <div key={dish.id} className='food-item-modal flex flex-col pb-6 gap-6' >
                    <LazyLoadImage
                      alt={dish.heading+' image'}
                      effect="blur"
                      src={"http://localhost:8000/storage/images/"+dish.image}
                      className='rounded-tl-lg rounded-tr-lg'
                    />
                  <div className='flex flex-col m-4'>
                    <div className='flex justify-between'>
                      <h2 className='text-base' style={{fontFamily:'Quicksand'}}>{dish.heading}</h2>
                      <p className='mt-auto'>AED {dish.price}</p>
                    </div>
                      <p className='text-xs pt-2'>{dish.description}</p>
                  </div>
                </div>
            </DialogContent>
            </Dialog>
          )
        })}
      </div>
    </main>
  )
}

export default Item;