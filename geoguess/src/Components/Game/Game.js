import "./Game.scss";
import React from "react";
import axios from "axios";
const PORT = "8080";
const apiURL = `http://localhost:${PORT}`;

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: [],
			current: 1,
			guess: true,
		};
	}

	fetchQuestionInfo(current) {
		//this.props.history.push(`/game/${this.state.current}`)
		//console.log(this.state.current)
		axios
			.get(`${apiURL}/game/${current}`)
			.then(response => {
				console.log(response);
				this.setState({
					question: response.data,
				});
			})
			.catch(err => {
				console.log("question fetch" + err);
			});
	}

	componentDidMount() {
		this.fetchQuestionInfo(1);
	}

	componentDidUpdate(prevProps) {
		//console.log(this.props.match)
		if (prevProps.match.params.id !== this.props.match.params.id) {
			//console.log(this.props.match.params.id)
			this.fetchQuestionInfo(this.props.match.params.id);
		}
	}
	handleSubmit = ev => {
		ev.preventDefault();
		// console.log(ev.target.guess.value);
		// console.log(this.state.question.name);
		console.log(this.props.match);
		if (ev.target.guess.value.toUpperCase() === this.state.question.name) {
			// this.setState(
			//   {
			//     current: this.state.current + 1,
			//   },
			//   () => {
			//     this.props.history.push(this.state.current)
			//   }
			// )
			this.props.history.push(
				`/game/${Number(this.props.match.params.id) + 1}`
			);
			console.log("right");
			this.setState({ guess: true });
			ev.target.reset();
		} else {
			this.setState({ guess: false });
			console.log("wrong");
		}
	};

	render() {
		return (
			<div className='game'>
				<div className='game-pholder'>
					<img
						className='game-pholder__img'
						alt='main game pic'
						src={`${apiURL}/${this.state.question.image}`}
					/>
				</div>
				<div className='right-wrapper'>
					<form className='game-text' onSubmit={this.handleSubmit}>
						<h3 className='game-text__title'> Guess this place </h3>
						<input
							name='guess'
							className='game-text__input'
							placeholder='Try to guess'
							type='text'
						></input>
						<button className='nav-bar__play' type='submit'>
							Guess!
						</button>
					</form>
					{!this.state.guess ? <p className='error-guess'>Guess again!</p> : ""}
				</div>
			</div>
		);
	}
}

export default Game;
