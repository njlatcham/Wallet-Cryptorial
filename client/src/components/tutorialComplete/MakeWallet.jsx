import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  FormControl,
  ControlLabel,
  Modal,
  FormGroup,
  Button
} from 'react-bootstrap';
import Resource from '../../models/resource.js';
const Key = Resource('keys');

class MakeWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privateKey: this.props.privateKey,
      publicKey: this.props.publicKey,
      show: false
    };
  }
  // MODAL FUNCTIONS
  handleShow = () => {
    this.setState({
      show: true,
      privateKey: this.props.privateKey,
      publicKey: this.props.publicKey
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  // END OF MODAL FUNCTIONS
  // Event handler for user info
  _handleSubmit = ev => {
    ev.preventDefault();
    const data = {
      publicKey: this.state.publicKey,
      userId: localStorage.getItem('userid')
    };
    console.log(data);

    Key.create(data)
      .then(() => this.props.history.push('/wallets'))
      .catch(e => alert(e));
  };

  _addNewWallet() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>Create New Wallet</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>This is your Private Key (Sign Funds)</label>
              <p>{this.props.privateKey}</p>
              <label>This is your Public Key (Address to recieve funds)</label>
              <p>{this.props.publicKey}</p>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button href="/mnemonic">Generate new addresses</Button>

            {/* <Button disabled>Print Paper Wallet</Button> */}

            <Button onClick={this._handleSubmit}>Add New Wallet</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default MakeWallet;
