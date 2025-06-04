import { useState } from "react";

function SavedData({ data = [] ,handle,handleedit}) {

  const [checked,setcheck]=useState([])

  const handlecheck= (index)=>{
    const updatedcheck=[...checked]
    updatedcheck[index]=!updatedcheck[index]
  
    setcheck(updatedcheck)
  }
    return (
      <>
        {data.length === 0 ? (
          null
        ) : (
          <div className="mt-10 shadow-xl ">
            

            
            {data.map((item, index) => (
              <ul key={index} className="flex justify-between mt-10 p-4">
                <li><h3 className="text-2xl">{item.task} --- {item.number}</h3>

                <input
  type="checkbox"
  checked={checked[index]}
  onChange={() => handlecheck(index)}
  className="ml-6 w-3 h-3 text-black-300 rounded border-2 border-black-300 cursor-pointer"
/>


<strong className="text-black-300">[{checked[index]?"checked":"not checked"}]</strong>
                
            

                <button onClick={()=>handle(index)} className="bg-red-500 text-white px-4 py-2 rounded ml-10  hover:bg-red-600 transition  cursor-pointer">delete</button>

                <button onClick={()=>handleedit(index)} className="bg-green-500 text-white px-4 py-2 rounded ml-4 hover:bg-green-600 transition  cursor-pointer">edit</button>

                  
                  </li><br/>
               


                

                

                





              

 

            
                
               
              </ul>
              
            ))}
          </div>
        )}
      </>
    );
  }
 
  
  
  export default SavedData;
  