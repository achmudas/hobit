import HobbitDetails from "./HobbitDetails"

const moods = ['Happy', 'Angry', 'Sad'];

function Hobbit(props) {
    const hobbitsInfo = [
        {id: 1, hobbitInfo: { age: Math.floor( Math.random() * 150), mood: moods[Math.floor( Math.random() * moods.length)]}},
        {id: 2, hobbitInfo: { age: Math.floor( Math.random() * 150), mood: moods[Math.floor( Math.random() * moods.length)]}},
        {id: 3, hobbitInfo: { age: Math.floor( Math.random() * 150), mood: moods[Math.floor( Math.random() * moods.length)]}},
        {id: 4, hobbitInfo: { age: Math.floor( Math.random() * 150), mood: moods[Math.floor( Math.random() * moods.length)]}},
        {id: 5, hobbitInfo: { age: Math.floor( Math.random() * 150), mood: moods[Math.floor( Math.random() * moods.length)]}}
    ]


    return (
      <>
        <h3>Enter details about your {props.about} hobbits</h3>
        { hobbitsInfo.map((hobbitInfo) => 
            <div>
                <br></br>
                <HobbitDetails key={hobbitInfo.id} hobbitInfo={hobbitInfo} live={Math.random() < 0.5} />
            </div>
        )}
        <hr></hr>
        <button>Ready</button>
        {/* #TODO Move to next page where hobbits do some stuff. It initially could simulate loading screen */}
      </>
    )
}

export default Hobbit;