import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <section className="componentContainer">
        <div className="contents">
          <h2 className="contents_title">Table of Contents</h2>
          <ul className="contents_list">
            <li className="list-items">Chapter 1:The Cryptorial</li>
            <li className="list-items">Chapter 2: Mnemonic Phrase</li>
            <li className="list-items">Chapter 3: Private Key</li>
            <li className="list-items">Chapter 4: Public Key</li>
            <li className="list-items">Chapter 5: Coin Information</li>
            <li className="list-items">Chapter 6: Sample Buying Transaction</li>
            <li className="list-items">
              Chapter 7: Sample Selling Transaction
            </li>
            <li className="list-items">Chapter 8: Explore the Blockchain</li>
            <li className="list-items">Chapter 9: Complete Tutorial</li>
          </ul>
        </div>

        <div className="noDescription">
          <h1 className="title">The Cryptorial</h1>
          <p className="desc_para">
            Wallet Cryptorial is a quick and easy tool to help anyone with
            little to no knowledge about the cryptocurrency world learn what the
            blockchain is and how it works, how to create a crypto wallet, and
            how to buy and sell cryptocurrency. This step by step tutorial will
            walk you through the registration of an account, what a mnemonic
            phrase, public key and private key are, and finally the creation of
            your very own crypto-wallet. Once you have created your wallet, you
            will continue forward with a few test transactions, buying a fake
            Bitcoin and then selling it back using our own test coins. By the
            end of this walkthrough, you will have all the knowledge needed to
            create a real crypto-wallet and begin your journey into the world of
            cryptocurrency.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.props.pageForwards}
          >
            Get Started!
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </section>
    );
  }
}

export default Homepage;
