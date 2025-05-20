import { useState } from "react";
import AliveHobbit from "../../AliveHobbit";
import DeadHobbit from "../../DeadHobbit";
import styles from './hobbit-details.module.css'; 

function HobbitDetails(props) {

    const moods = ['Happy', 'Angry', 'Sad'];

    const [inputs, setInputs] = useState(props.hobbitDetail);

    const changeMood = () => {
        const mood = moods[Math.floor( Math.random() * moods.length)];
        setInputs(previousState => ({...previousState, ['mood']: mood}));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(previousState => ({ ...previousState, [name]: value }))
    }

    const submitHobbit = (event) => {
        event.preventDefault();
        // #TODO do something
        console.log(inputs);
    }

    return (
        <div className={styles.bigblue}>
            <form  onSubmit={submitHobbit}>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value={inputs.name || ''} onChange={handleChange} />
                </div>

                <label for="age">Age: {props.hobbitDetail.hobbitInfo.age}</label>

                <br></br>

                <div>
                    <label for="mood">Mood: {inputs.mood}</label>
                    <button onClick={() => changeMood()}>Change my mood</button>
                </div>

                <div>
                    <label for="footSize">Foot size:</label>
                    <select value={inputs.footSize} name="footSize" onChange={handleChange}>
                        <option value="12">12 inches</option>
                        <option value="13">13 inches</option>
                        <option value="14">14 inches</option>
                    </select>
                </div>

                <input type="submit" value="Let's go" />
            </form>
            <div>
                {props.live ? <AliveHobbit /> : <DeadHobbit />}
            </div>
        </div>
        // #TODO When hobbit is submitted it becomes a name, or maybe some avatar moving?
    )
}

export default HobbitDetails;