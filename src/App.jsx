


import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


function App() {

 
  const [technologies, setTechnologies] = useState([]);


  const [loading, setLoading] = useState(true);
const [stack, setStack]= useState([]);
const handleAdd = (technology) => {
  const alreadyExists = stack.some(
    item => item.id === technology.id
  );
  if(alreadyExists) {
    toast.warning("Already added!");
    return;
  }

  setStack([...stack, technology])
  toast.success(`${technology.name} added!`)

}
const handleRemove = (id) => {
  setStack(
    stack.filter(item => item.id !==id)
  )
  // toast.info("Technology removed.");
};
const handleRemoveAll =() =>{
  setStack([])
  toast.success("All technologies removed")
}

  useEffect(() => {

    fetch("/data/technologies.json")
      .then(response => response.json())
      .then(data => {
        setTechnologies(data);
        setLoading(false);
      });

  }, []);


  return (
    <>

      <Navbar />

      <Hero />

      {loading ? (
        <p>Loading...</p>
      ) : (

        <div>

          {technologies.map(technology => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAdd}
              />
 ))}
              <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
            />
           < ToastContainer />
           

        </div>

      )}

    </>
  );
}

export default App;