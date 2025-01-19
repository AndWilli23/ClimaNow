const Header = () => {
    return(
        <header style={{backgroundColor: "#0a86e5", height: "9vh"}} >
            <h2 style={{
                fontFamily: "Smooch Sans, serif", 
                color: "white", 
                fontSize: "26px", 
                padding: "12px", 
                fontWeight: "700",
                textDecoration: "underline"}}>Clima
                <span style={{color: "#ffdd00", fontSize: "24px", position: "absolute", paddingTop: "10px", fontWeight: "700"}}>
                    Now
                </span>
            </h2>
        </header>
    )
}

export default Header