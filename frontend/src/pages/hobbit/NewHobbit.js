import { useState } from "react";

function NewHobbit({onAdd}) {

    const moods = ['Happy', 'Angry', 'Sad'];

    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        mood: '',
        footSize: 'none'
    });

    const changeMood = () => {
        const mood = moods[Math.floor(Math.random() * moods.length)];
        setInputs(previousState => ({ ...previousState, ['mood']: mood }));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(previousState => ({
            ...previousState,
            [name]: name === 'age' ? (value === '' ? '' : Number(value)) : value
        }))
    }

    const submitHobbit = (event) => {
        event.preventDefault();
        onAdd(inputs);
        setInputs({ name: '', age: '', mood: '', footSize: '' });
    }

    return (
        <form onSubmit={submitHobbit}>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value={inputs.name} onChange={handleChange} />
            </div>

            <div>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" value={inputs.age} onChange={handleChange} />
            </div>


            <br></br>

            <div>
                <label for="mood">Mood: {inputs.mood}</label>
                <button type="button" onClick={() => changeMood()}>Change my mood</button>
            </div>

            <div>
                <label for="footSize">Foot size:</label>
                <select value={inputs.footSize} name="footSize" onChange={handleChange}>
                    <option value="none">Select foot size</option>
                    <option value="12">12 inches</option>
                    <option value="13">13 inches</option>
                    <option value="14">14 inches</option>
                </select>
            </div>

            <input type="submit" value="Create hobit" />
        </form>
    )
}

export default NewHobbit;