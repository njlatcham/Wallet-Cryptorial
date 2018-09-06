import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlockchainExplorer extends Component {
  render() {
    return (
      <section className="componentContainer">
        <div className="blockchain_desc">
          <h3 className="blockchain_desc-title">
            You Have Completed the Tutorial!
          </h3>
          <p className="blockchain_desc-para">
            Congratulations on completing the Cryptorial. You now know enough to
            send and recieve cryptocurrency for real! Below is a quick overview
            of what the blockchain is and how it functions. From this page, you
            may either restart the tutorial, if you wish to take a look through
            it again, or complete the tutorial, and move on to creating a real
            cryptocurrency wallet.
          </p>
          <h3 className="blockchain_desc-title">What is the Blockchain?</h3>
          <p className="blockchain_desc-para">
            The blockchain is the technology which records the transactions of
            everything that happens on that specific chain. If you made a
            transaction to buy 3 BTC, the BTC blockchain would record the
            transaction in a block, and it becomes the next block in that chain,
            going all the way back to when the first BTC transaction was made.
            Each block allows for the information to be distributed to everyone,
            but it cannot be copied or changed.
          </p>
          <p className="blockchain_desc-para">
            To give you an example, imagine an excel speadshreet that is
            duplicated across thousands of computers. The blockchain network is
            regularly updates this spreadsheet, so everyone can view changes
            made to this spreadsheet
          </p>
          <p className="blockchain_desc-para">
            The chain began with its Genesis Block, which could be referred to
            as Block #0. Every block that follows Block #0 contains the same
            types of data as the original, but with different information within
            each one.
          </p>
          <button
            className="buttonBackwards btn btn-primary btn-lg"
            onClick={this.props.pageReset}
          >
            <i className="fas fa-redo-alt" />
            Restart Tutorial
          </button>
          <button className="buttonForwards btn btn-primary btn-lg">
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

export default BlockchainExplorer;
