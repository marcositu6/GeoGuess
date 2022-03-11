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
    };
  }

  fetchQuestionInfo(current) {
    // axios
    //   .get(`${apiURL}/places/${current}`)
    //   .then((response) => {
    //     this.setState({
    //       question: response.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("question fetch" + err);
    //   });
  }

  componentDidMount() {
    this.fetchQuestionInfo(this.current);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchVideoInfo(this.props.match.params.id);
      }
    }
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    if (ev.target.guess.value === this.state.question.title) {
      this.setState({
        current: this.state.current + 1,
      });
      this.props.history.push(`/game/${this.state.current}`);
    } else {
      console.log("wrong");
    }
  };

  render() {
    return (
      <div className="game">
        <div className="game-pholder">
          <img
            className="game-pholder__img"
            alt="main game pic"
            src={this.state.question.image}
          />
        </div>
        <form className="game-text" onSubmit={this.handleSubmit}>
          <h3 className="game-text__title"> guess this place </h3>
          <input
            name="guess"
            className="game-text__input"
            placeholder={this.state.question.title}
            type="text"
          ></input>
          <button className="nav-bar__play" type="submit">
            Guess!
          </button>
        </form>
      </div>
    );
  }
}

export default Game;
