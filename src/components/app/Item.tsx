interface Itemtype{
  menu:string,
  dishes:DishType[],
}

interface DishType{
  img:string,
  name:string,
  detail:string,
  price:string,
}

function Item({
  menu,
  dishes,
}:Itemtype)
{
  //Dummy count for Food Arr - 
  const count = 10;
  const foodArr = Array.from({length:count}, (_ , index) => index + 1);
  return (
    <main>
      <h1 className='text-3xl md:text-5xl text-center text-white px-0 py-4 font-serif shadow-gray-500 shadow-lg' style={{backgroundImage:`url("https://demosites.meridian.net.in/2024/cafecalicut/demo/images/bg1.jpg")`}}>
        {menu}
      </h1>
      <div className='food-container m-4 sm:m-6 md:m-8'>
        {foodArr.map((num)=>{
          return(
            <div key={num} className='food-item flex pb-6 gap-6' >
              <div className='w-[80%]'>
                <img src={dishes[0].img} alt="" className='rounded-md' loading='lazy' />
              </div>
              <div className='flex flex-col'>
                <h2 className='text-base' style={{fontFamily:'Quicksand'}}>{dishes[0].name}</h2>
                <p className='text-xs pt-2'>{dishes[0].detail}</p>
                <p className='mt-auto'>AED {dishes[0].price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Item;