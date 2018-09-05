import React, { Component } from "react";
import { Link } from "react-router-dom";

class TutorialCompletion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialcomplete: true
    };
  }

  render() {
    return (
      <section className="componentContainer">
        <div className="tutorial_comp">
          <h3 className="tutorial_comp-title">
            You Have Completed the Tutorial!
          </h3>
          <p className="tutorial_comp-para">
            Congratulations on completing the blockchain tutorial. You now know
            enough to send and recieve cryptocurrency for real! From this page,
            you may either restart the tutorial, if you wish to take a look
            through it again, or complete the tutorial, and move on to creating
            a real cryptocurrency wallet.
          </p>
          <button
            className="buttonBackwards btn btn-primary btn-lg"
            onClick={this.props.pageReset}
          >
            <i className="fas fa-redo-alt" />
            Restart Tutorial
          </button>
          <button
            className="buttonForwards btn btn-primary btn-lg"
            onClick={this.handleCompletion}
          >
            <Link className="buttonLink" to={"/wallets"}>
              Complete Tutorial
            </Link>
            <i className="fas fa-home" />
          </button>
        </div>
      </section>
    );
  }
}

export default TutorialCompletion;
