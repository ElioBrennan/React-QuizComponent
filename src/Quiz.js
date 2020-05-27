// Imports
import React from "react";
import { Component } from "react";

// Declarations
const quizData = require("./quiz_data.json").quiz_questions;

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.setState({
      quiz_position: 1,
    });
  }

  render() {
    return (
      <div>
        <div className="QuizQuestion">
          <b>{quizData[0].instruction_text}</b>
        </div>
      </div>
    );
  }
}

export default Quiz;
