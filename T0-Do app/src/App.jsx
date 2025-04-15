import Header from "./Components/Header"
import Toform from "./Components/ToDoList"
import Savedata from "./Components/Todoform"


function App() {
  

  return (
    <>
    <div className="mx-auto w-1/2 bg-whitesmoke-50-200 mt-30 p-20 rounded-xl ">

    <Header/>
    <Toform/>
    <Savedata/>

    </div>

   


    </>
    
  )
}

export default App
