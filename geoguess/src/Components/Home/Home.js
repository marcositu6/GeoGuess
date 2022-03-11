import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className='home'>
			<h1 className='home__title'> Welcome to our game!</h1>
			<h4 className='home__description'>
				{" "}
				Try to guess all the famous places{" "}
			</h4>

			<Link to={`/game/1`}>
				<button className='home__play'>PLAY!</button>
			</Link>
		</div>
	);
}
export default Home;
