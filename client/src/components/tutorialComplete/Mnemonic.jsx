import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import generator from '../../helpers/generator';
import MakeWallet from './MakeWallet';
import { PageHeader } from 'react-bootstrap';
// import qr from "../../helpers/qrGenerator";

class Mnemonic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mnemonic: '',
      privateKey: '',
      publicKey: '',
      confirm: ''
    };
  }

  _generator = () => {
    let generated = generator();
    this.setState({
      mnemonic: generated.mnemonic,
      privateKey: generated.wif,
      publicKey: generated.address
    });
  };

  controlMnemonic = ev => {
    this.setState({ confirm: ev.target.value });
  };
  doesMatch = ev => {
    ev.preventDefault();
    if (this.state.confirm === this.state.mnemonic) {
      return this.props.history.push('/wallets');
    } else {
      return alert('They do not match!');
    }
  };
  componentDidMount() {
    this._generator();
  }

  render() {
    return (
      <div className="mnemonic container">
        <PageHeader>Mnemonic Recovery Phrase</PageHeader>
        <ul className="jumbotron text-center  ">
          <h3>
            Copy this set of words down - We will not be able to recreate this
            Phrase
          </h3>
          <div>
            <h2>{this.state.mnemonic}</h2>
          </div>
          <h3>Re-Enter</h3>
          <div>
            <h2>
              <form onSubmit={this.doesMatch}>
                <input
                  className="mnemonic-input"
                  type="text"
                  value={this.state.confirm}
                  onChange={this.controlMnemonic}
                  placeholder="Re-Enter your Mnemonic Phrase Here after you've copied it down somewhere safe!"
                />
              </form>
            </h2>
          </div>
          {/* Eventually setup an intermediary confirm */}
          <MakeWallet
            history={this.props.history}
            publicKey={this.state.publicKey}
            privateKey={this.state.privateKey}
          />
        </ul>
      </div>
    );
  }
}

export default Mnemonic;
