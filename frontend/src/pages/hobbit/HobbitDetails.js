import { useState } from "react";
import AliveHobbit from "../../AliveHobbit";
import DeadHobbit from "../../DeadHobbit";

function HobbitDetails(props) {

    const moods = ['Happy', 'Angry', 'Sad'];

    const [inputs, setInputs] = useState(props.hobbitDetail);

    const changeMood = () => {
        const mood = moods[Math.floor(Math.random() * moods.length)];
        setInputs(previousState => ({ ...previousState, ['mood']: mood }));
    }

    return (
        <>
            <div>
                <label for="name">Name: {props.hobbitDetail.name}</label>
            </div>

            <label for="age">Age: {props.hobbitDetail.age}</label>

            <br></br>
            {/* /** #FIXME Do I need you? **/}
            <div>
                <label for="mood">Mood: {props.hobbitDetail.mood}</label>
                <button onClick={() => changeMood()}>Change my mood</button>
            </div>

            <div>
                <label for="footSize">Foot size: {props.hobbitDetail.footSize}</label>
            </div>
            <div>
                {props.hobbitDetail.liveness ? <AliveHobbit /> : <DeadHobbit />}
            </div>
        </>
        // #TODO When hobbit is submitted it becomes a name, or maybe some avatar moving?
    )
}

export default HobbitDetails;