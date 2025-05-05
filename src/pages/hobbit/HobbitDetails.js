import { useState } from "react";
import AliveHobbit from "../../AliveHobbit";
import DeadHobbit from "../../DeadHobbit";
import styles from './hobbit-details.module.css'; 

function HobbitDetails(props) {

    const [inputs, setInputs] = useState({});

    const changeMood = (mood) => {
        
        setInputs(values => ({...values, ['mood']: mood}));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitHobbit = (event) => {
        event.preventDefault();
        // #TODO do something
        console.log(inputs);
    }

    return (
        <>
            <form className={styles.bigblue} onSubmit={submitHobbit}>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value={inputs.name || ''} onChange={handleChange} />
                </div>

                <label for="age">Age: {props.hobbitInfo.hobbitInfo.age}</label>

                <br></br>

                <div>
                    <label for="mood">Mood: {props.hobbitInfo.hobbitInfo.mood}</label>
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
        </>
        // #TODO When hobbit is submitted it becomes a name, or maybe some avatar moving?
    )
}

export default HobbitDetails;