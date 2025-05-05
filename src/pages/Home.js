import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Hobbits</h1>
            <Link to="/hobbits">Let's go to create some hobbits</Link>
        </>
    )
}

export default Home;