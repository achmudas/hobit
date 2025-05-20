import HobbitDetails from "./HobbitDetails"

function Hobbit(props) {
    const hobbitsDetails = [
        {id: 1, hobbitInfo: { age: Math.floor( Math.random() * 150)}},
        {id: 2, hobbitInfo: { age: Math.floor( Math.random() * 150)}},
        {id: 3, hobbitInfo: { age: Math.floor( Math.random() * 150)}},
        {id: 4, hobbitInfo: { age: Math.floor( Math.random() * 150)}},
        {id: 5, hobbitInfo: { age: Math.floor( Math.random() * 150)}}
    ]


    return (
      <>
        <h3>Enter details about your {props.about} hobbits</h3>
        { hobbitsDetails.map((hobbitDetail) => 
            <div>
                <br></br>
                <HobbitDetails key={hobbitDetail.id} hobbitDetail={hobbitDetail} live={Math.random() < 0.5} />
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