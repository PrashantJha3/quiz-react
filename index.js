import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import questions from './questions.js';
import QuestionBox from './components/QuestionBox';
import Results from './components/Results';


class MyQuiz extends React.Component {
  state = {
    questionRandom: [],
    score: 0,
    responses: 0
  };
  getQuestions = () => {
    questions().then(question => {
      this.setState({
        questionRandom: question
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if(answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    })
  }
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  }

  componentDidMount() {
    this.getQuestions();
  }
  render(){
    return(
      <div className = "container-sm border">
      <div className = "title">Quiz Game</div>
      {this.state.questionRandom.length > 0 && 
      this.state.responses < 5 &&
      this.state.questionRandom.map(({question,answers,correct,questionId}) => (
        <QuestionBox
         question={question}
         options={answers}
         key={questionId}
         selected = {answer => this.computeAnswer(answer, correct)}
        />
      ))}
      {this.state.responses === 5 ? (<Results score = {this.state.score} playAgain = {this.playAgain} />) : null}
      </div>
    );
  }
}

render(<MyQuiz />,document.getElementById("root"));


