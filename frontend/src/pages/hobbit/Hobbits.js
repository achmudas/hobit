import { fetchHobits } from "../../services/api";
import HobbitDetails from "./HobbitDetails"
import { useState, useEffect } from "react";

function Hobbit(props) {
  // const hobbitsDetails = [
  //   { id: 1, hobbitInfo: { age: Math.floor(Math.random() * 150) } },
  //   { id: 2, hobbitInfo: { age: Math.floor(Math.random() * 150) } },
  //   { id: 3, hobbitInfo: { age: Math.floor(Math.random() * 150) } },
  //   { id: 4, hobbitInfo: { age: Math.floor(Math.random() * 150) } },
  //   { id: 5, hobbitInfo: { age: Math.floor(Math.random() * 150) } }
  // ]

  const [hobits, setHobits] = useState([]);

  useEffect(() => {
    const loadHobits = async () => {
      try {
        const hobits = await fetchHobits();
        setHobits(hobits);
      } catch (err) {
        console.error('Something failed ' + err);
      } finally {
        console.log('Downloaded ' + hobits)
      }
    };

    loadHobits();
  }, []
  );



  return (
    <>
      <h3>Enter details about your {props.about} hobbits</h3>
      {hobits.map((hobit) =>
        <div>
          <br></br>
          <HobbitDetails key={hobit.id} hobbitDetail={hobit} live={Math.random() < 0.5} />
        </div>
      )}
      <hr></hr>
      {/* Add option to add more hobbits */}
      <button>Ready</button>
      {/* #TODO Move to next page where hobbits do some stuff. It initially could simulate loading screen */}
    </>
  )
}

export default Hobbit;