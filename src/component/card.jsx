import '../App.css'
export default function Card(props) {
    
    return (
     <div className='mx-[50px]'>
        <div className="grid grid-cols-1 place-items-center mt-[100px] gap-y-[50px] gap-x-[50px] md:grid-cols-2 lg:grid-cols-4">{
        
            props.datav.map(( items, index ) => {
                return (
                    <div className='relative'>
                        <img className="object-cover rounded-full h-[90px] w-[90px]"
                        src={items.image} alt={items.id}/>
                        <h1 className='absolute right-[-80%] top-[50%] uppercase text-[0.7rem] font-bold'>{ items.text }</h1>
                    </div>
                )
            })
            }
         </div>

         <div className="grid lg:grid-cols-2 place-items-center mt-[200px] gap-y-[50px] gap-x-[50px] md:grid-cols-1">{
            props.datav2.map(( items, index ) => {
                return (
                <img className="object-cover h-[400px] w-[600px]"
                src={items.image} alt={items.id}/>
                )
            })
            }
        </div>
            
     
     
     </div>
     
    )
  }