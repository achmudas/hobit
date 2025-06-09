import { fetchHobits } from "../../services/api";
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
        console.log('hobits' + hobits)
        setHobits(hobits);
      } catch (err) {
        console.error('Something failed ' + err);
      }
    };

    loadHobits();
  }, [wasNewHobitClicked]
  );

  return (
    <>
      <h3>Enter details about your {props.about} hobbits</h3>
      <div className={stylesHobit.container}>
        {hobits.map((hobit) =>
          <div>
            <br></br>
            <HobbitDetails key={hobit.id} hobbitDetail={hobit} />
          </div>
        )}
        <hr></hr>

        {wasNewHobitClicked && <NewHobbit notifyFormDisplay={setNewHobitClicked} />
        }
      </div>

      <button onClick={() => setNewHobitClicked(true)}>Add new hobit</button>
      {/* Add option to add more hobbits */}
      <button>Let's play</button>
      {/* #TODO Move to next page where hobbits do some stuff. It initially could simulate loading screen */}
    </>
  )
}

export default Hobbit;