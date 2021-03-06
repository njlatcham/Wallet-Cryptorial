import React, { Component } from "react";

class CreateMnemonic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="mnemonic_description">
          <h3 className="mnemonic_desc-title">Mnemonic Phrase Description</h3>
          <p className="mnemonic_desc-para">
            A Mnemonic Phrase, also known as a "seed phrase" or "seed recovery
            phrase", is a randomly generated list of words which store all the
            information needed to recover a CryptoWallet. In the event where a
            User's computer breaks, or their hard-drive is corrupted, the
            Mnemonic Phrase can be used to recover the wallet and both private
            and public keys. However, anyone who discovers your mnemonic phrase
            can use it to access your wallet and potentially steal everything
            within it.
          </p>
          <p className="mnemonic_desc-para">
            <span className="warning">Warning:</span> Forgetting this Phrase
            could result in the loss of your wallet and everything it contains.
            Do not overestimate your ability to memorize this phrase, please
            write it down on a piece of paper instead, and store it in a secure
            location.
          </p>
          <p className="mnemonic_desc-para">
            CryptoWallet software contains a list of 2048 words from a
            dictionary, each corresponding to an assigned number. The Mnemonic
            Phrase is then converted into a number that can be used to access
            the wallet. BIP39, the mnemonic phrase generator created and used by
            Bitcoin, is comprised of 12 words total for the phrase. There is
            2048^2 or 4,194,304 different possible combinations, which would
            offer a 128-bit security level.
          </p>
          <button
            className="btn btn-primary btn-lg buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </section>

        <section className="mnemonic_component">
          <h3 className="mnemonic_comp-title">Mnemonic Phrase</h3>
          <p className="mnemonic_comp-phrase">{this.props.mnemonic}</p>
          <p className="mnemonic_comp-desc">
            Please write this phrase down on paper and deposit it in a safe and
            secure location
          </p>
          <div className="line" />
          <p className="mnemonic_comp-desc">
            When you create a real wallet, you will have to re-enter this phrase
            to confirm that you have written it down and stored it properly.
          </p>
          <button
            className="btn btn-primary btn-lg buttonForwards"
            onClick={this.props.pageForwards}
          >
            Next
            <i className="fas fa-arrow-right" />
          </button>
        </section>
      </main>
    );
  }
}

export default CreateMnemonic;
