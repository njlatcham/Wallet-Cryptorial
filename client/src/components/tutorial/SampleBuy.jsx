import React, { Component } from "react";
import prices from "../../helpers/market.js";

class SampleBuy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testBalance: 100000,
      testBTCBalance: 0,

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

  controlBTC = ev => {
    ev.preventDefault();
    const totalBTC = ev.target.value;
    const totalCost = totalBTC * this.state.BTC.Price;
    this.setState({ totalBTC, totalCost });
  };

  componentDidMount() {
    this._setStats();
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="buy_desc">
          <h3 className="buy_desc-title">Buying Crypto Coins</h3>
          <p className="buy_desc-para">
            Before you walk through the process of buying Bitcoins, it must be
            stressed that you should never invest more than you are willing to
            lose. Cryptocurrencies can be extremely volatile and the price is
            just as likely to go down as it is to go up.
          </p>
          <p className="buy_desc-para">
            Crypto coins can be bought using various methods including: cash,
            credit, debit, wire transfers or exchanging them for other
            cryptocurrencies.
          </p>
          <p className="buy_desc-para">
            Crypto Coin Exchanges are options that allow for the use of debit,
            credit and possibly, depending on the exchange, paypal transfers.
            Most Coin exchanges will charge fees for using the Bitcoin network
            that will add to your total when you are ready to complete the
            transaction.
          </p>
          <p className="buy_desc-para">
            Cash is another option to purchase cryptocurrency with, and some
            platforms will help you find individuals in your area who are
            willing to meet in person to complete the transaction. Some
            exchanges will direct you to a bank to make a direct cash deposit,
            and then send you Bitcoin just a few hours later.
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
            <div className="buy_comp-prices" />
            <div className="buy_comp-BTC">
              Buy 1 BTC for
              <span className="BTCprice">${this.state.BTC.Price}</span>
            </div>
          </div>

          <div className="line" />

          <form>
            <div className="buy_comp-BTC">
              Amount in USD:
              <span className="buy_comp-input">${this.state.totalCost}</span>
            </div>

            <div className="buy_comp-BTC">
              Amount in BTC:
              <input
                className="buy_comp-input"
                onChange={this.controlBTC}
                type="number"
              />
            </div>

            <div className="line" />

            <div>
              <div className="buy_label">
                Please Enter your Public Key to let the exchange know where to
                send these funds:
              </div>
              <input
                className="privateKey"
                name="private"
                type="text"
                defaultValue={this.props.public}
              />
            </div>
            <div className="buy_comp-BTC center">
              Please ensure that the Amount in USD is less than your Test
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

export default SampleBuy;
