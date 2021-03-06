import React, { Component } from "react";
import prices from "../../helpers/market.js";

class SampleSell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testBalance: this.props.USDbalance,
      testBTCBalance: this.props.BTCbalance,
      totalCost: 0,
      totalBTC: 0,
      BTC: {
        Name: "Bitcoin",
        Price: 0
      }
    };
  }

  _setStats = () => {
    prices().then(result =>
      this.setState({
        BTC: {
          Price: result.BTC.CAD.PRICE
        }
      })
    );
  };

  handleUSD = ev => {
    ev.preventDefault();
    const totalCost = ev.target.value;
    const totalBTC = totalCost / this.state.BTC.Price;
    this.setState({ totalCost, totalBTC });
  };

  componentDidMount() {
    this._setStats();
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="sell_desc">
          <h3 className="sell_desc-title">Selling Crypto Coins </h3>
          <p className="sell_desc-para">
            Many people are excited with the prospect of buying CryptoCurrency
            to add to their assets, but are a little more nervous when it comes
            to being able to sell their coins when they wish to liquidate their
            holdings.
          </p>
          <p className="sell_desc-para">
            When you do wish to sell your coins, the first step would be to go
            to a coin exchange and transfer your balance to the account. You
            must ensure that they support the type of transaction you are
            looking to complete, whether that is Bitcoin to USD or Bitcoin to a
            different currency on the market. If you are looking to make a large
            withdrawal, you may need to verify your identity to comply with
            finance regulations.
          </p>
          <p className="sell_desc-para">
            Another thing to remember is that once you have sent your coins to
            an address, there is no way to recover them, so make sure that the
            public address is the correct one.
          </p>
          <button
            className="buttonBackwards btn btn-primary btn-lg"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </section>

        <section className="buy_comp">
          <h3 className="buy_comp-title">Test Transaction</h3>
          <div className="buy_comp-form">
            <div className="buy_comp-BTC">
              Buy 1 BTC for
              <span className="BTCprice">${this.state.BTC.Price}</span>
            </div>

            <div className="line" />

            <div className="buy_comp-BTC">
              Amount in BTC:
              <span className="buy_comp-input">
                {this.state.totalBTC}
                BTC
              </span>
            </div>
            <div className="buy_comp-BTC">
              Amount in USD:
              <input
                className="buy_comp-input"
                onChange={this.handleUSD}
                type="number"
              />
            </div>

            <div className="line" />
          </div>

          <form>
            <div>
              <div className="buy_label">Please Enter your Public Key:</div>
              <input
                className="privateKey"
                name="public"
                type="text"
                defaultValue={this.props.private}
              />
            </div>
            <div className="line" />
            <div className="buy_comp-BTC center">
              Please ensure that the Amount in BTC is less than your BTC
              Balance.
            </div>
            <button
              className="buttonForwards btn btn-primary btn-lg"
              type="submit"
              onClick={this.props.pageForwards}
            >
              Purchase
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </section>
      </main>
    );
  }
}

export default SampleSell;
