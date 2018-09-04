import React, { Component } from "react";
import prices from "../../helpers/market.js";

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    console.log(prices());

    this.state = {
      BTC: {
        Name: "Bitcoin",
        Price: 0
      },
      LTC: {
        Name: "Litecoin",
        Price: 0
      },
      ETH: {
        Name: "Bitcoin",
        Price: 0
      },
      DOGE: {
        Name: "DogeCoin",
        Price: 0
      }
    };
  }

  _setStats = () => {
    prices().then(result =>
      this.setState({
        BTC: {
          Price: result.BTC.CAD.PRICE
        },

        LTC: {
          Price: result.LTC.CAD.PRICE
        },

        ETH: {
          Price: result.ETH.CAD.PRICE
        },
        DOGE: {
          Price: result.DOGE.CAD.PRICE
        }
      })
    );
  };

  componentDidMount() {
    this._setStats();
  }

  render() {
    return (
      <section className="componentContainer">
        <div className="coin_desc">
          <h3 className="coin_desc-title">Crypto Coins</h3>
          <p className="coin_desc-para">
            Congratulations! Now that your test wallet has been created and you
            know what each piece is and how they work, you are now ready to do
            some test transactions to get you familiar with the process. You
            will recieve testcoins generated by the Cryptorial, and they will
            allow you to purchase a fake bitcoin, which you will then sell back
            to Cryptorial, so you can see the procedure in action.
          </p>
          <p className="coin_desc-para">
            Before you start practicing with the transactions, here is some
            information on the more popular coins on the market. There are
            thousands of different coins out there, but most of them are worth
            mere cents, while some of these more popular ones, like Bitcoin,
            reached $17,900 USD in December of 2017.
          </p>
          <button
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </div>

        <div className="coin_comp">
          <h3 className="coin_comp-title">Popular Digital Assets</h3>
          <div className="coin_comp-desc">
            <div className="btc_desc">
              <h3 className="btc_desc-title">Bitcoin</h3>
              <h4 className="btc_desc-sub">Current Price: </h4>
              <p className="coin_price">${this.state.BTC.Price}</p>
            </div>
            <div className="eth_desc">
              <h3 className="btc_desc-title">Ethereum</h3>
              <h4 className="btc_desc-sub">Current Price: </h4>
              <p className="coin_price">${this.state.ETH.Price}</p>
            </div>
            <div className="doge_desc">
              <h3 className="btc_desc-title">Dogecoin</h3>
              <h4 className="btc_desc-sub">Current Price: </h4>
              <p className="coin_price">${this.state.DOGE.Price}</p>
            </div>
            <div className="ltc_desc">
              <h3 className="btc_desc-title">Litecoin</h3>
              <h4 className="btc_desc-sub">Current Price: </h4>
              <p className="coin_price">${this.state.LTC.Price}</p>
            </div>
          </div>
          <button className="buttonForwards" onClick={this.props.pageForwards}>
            Next
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </section>
    );
  }
}

export default CoinInfo;
