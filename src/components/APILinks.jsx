import { Link } from "react-router-dom";
import catImg from "../assets/cat.png"
import newsImg from "../assets/news.png"
import boredImg from "../assets/bored.png"

export default function APILinks() {
  return (
    <div>
      <div className="api-container">
        <Link to="/apis/bored" className="bored">
          Bored API
          <img src={boredImg} className="api-image" alt="image-icon" /> 
        </Link>
        <Link to="/apis/cat" className="cats">
          Cats API
          <img src={catImg} className="api-image" alt="image-icon" /> 
        </Link>
        <Link to="/apis/guardian" className="guardian">
          Guardian API
          <img src={newsImg} className="api-image" alt="image-icon" /> 
        </Link>
      </div>
    </div>
  );
}
