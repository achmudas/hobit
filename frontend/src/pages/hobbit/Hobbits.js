import { createHobit, fetchHobits } from "../../services/api";
import HobbitDetails from "./HobbitDetails"
import { useState, useEffect } from "react";
import stylesHobit from './hobbit.module.css';
import NewHobbit from "./NewHobbit";

function Hobbit(props) {

  const [hobits, setHobits] = useState([]);
  const [wasNewHobitClicked, setNewHobitClicked] = useState(false);


  useEffect(() => {
    const loadHobits = async () => {
      try {
        const hobits = await fetchHobits();
        setHobits(hobits);
      } catch (err) {
        console.error('Something failed ' + err);
      }
    };

    loadHobits();
  }, []
  );


  const addNewHobbit = (newHobit) => {
    createHobit(newHobit);
    setHobits((prevHobits) => [...prevHobits, newHobit]);
    setNewHobitClicked(false);
  }

  return (
    <>
      <h3>Enter details about your {props.about} hobbits</h3>
      <div className={stylesHobit.container}>
        {hobits.map((hobit) =>
          <div className={stylesHobit.bigblue}>
            <HobbitDetails key={hobit.id} hobbitDetail={hobit} />
          </div>
        )}

        {wasNewHobitClicked && <div className={stylesHobit.bigblue}> <NewHobbit onAdd={addNewHobbit} /> </div>}

      <div className={`${stylesHobit.bigblue} ${stylesHobit.addHobit}`} onClick={() => setNewHobitClicked(true)}>
        <div>
          +
        </div>
      </div>
    </div >
      < button > Let's play</button>
  {/* #TODO Move to next page where hobbits do some stuff. It initially could simulate loading screen */ }
    </>
  )
}

export default Hobbit;