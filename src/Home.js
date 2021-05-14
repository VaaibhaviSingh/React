const Home = () => {

    const handleClick = () => {
        console.log("Otanjobiomedeto!")
    }

    return ( 
        <dev className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
        </dev>
    );
}
 
export default Home;
