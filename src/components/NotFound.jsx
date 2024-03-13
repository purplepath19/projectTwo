import myImage from "../assets/mind.png"


export default function NotFound() {
    return (

        <div className="not-found-container"> 
            <h1 className="header-1"> 404 </h1>
        <h3 className="not-found">  </h3>
        {/* <p> Something went wrong </p> */}
        <img src={myImage} className="not-found-image" alt="image-icon" /> 
        </div>
    )
}

