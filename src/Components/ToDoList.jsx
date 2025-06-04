import { useState } from "react"
import Savedata from "./Todoform";




function Toform(){

    const [state,setstate]=useState([]);
    const [task,settask]=useState("")
    const [number,setnumber]=useState("")

    const [edittask,setedit]=useState(null)

    const [ischeck,setischeck]=useState(false)


   
  

    


    function add(){


      if(task===''|| number===''){
        alert("enter details")
        
      }else{

      

      

   

            const newEntry={task,number};


            console.log(newEntry)

            if(edittask!==null){

                const updated=[...state]
                updated[edittask]=newEntry
                setstate(updated)
                setedit(null)



            }else{
                setstate([...state,newEntry])
            }

          
            
     
            settask("")
            setnumber("")

        }
      }
      


        function deleteItem(index) {
            const updated = state.filter((_, i) => i !== index);

           
            setstate(updated);
          }



          function edit(index){
            const item=state[index]
            settask(item.task)
            setnumber(item.number)
            setedit(index)

          }
        


        


  
   
    
    return(
            <>

            <div className="p-10 capitalize bg-gray-100 rounded-xl hover: shadow-xl">

            <label>enter your name:  </label>

<input type="text" name="fullname" value={task} onChange={(e)=>settask(e.target.value)} className="border border-black-200 mb-8 rounded-md p-2"/><br/>


<label>enter your number:</label>
<input type="number" name="number" value={number} onChange={(e)=>setnumber(e.target.value)} className="border border-black-200 rounded-md p-2"/><br/><br/>


<button onClick={add} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">Add</button>

            </div>

        

       

        <Savedata data={state} handle={deleteItem} handleedit={edit} />
    


            </>
        )

    

      
}




       
      





      
    


   
        
    


export default Toform