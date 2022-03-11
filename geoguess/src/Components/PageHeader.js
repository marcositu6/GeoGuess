import "./PageHeader.scss";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <header className="nav-bar">
      <Link className="nav-bar-link" to="/">
        <h2 className="nav-bar-logo"> GeoGuess </h2>
      </Link>
      <Link to={`/game`}>
        <button className="nav-bar__play">PLAY!</button>
      </Link>
    </header>
  );
}
export default PageHeader;
