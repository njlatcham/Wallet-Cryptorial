import React, { Component } from 'react';
import {
  Modal,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';
// import isValid from '../../../helpers/isValid';
import Resource from '../../../models/resource';
const Key = Resource('keys');

class BuyBitcoinModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      dollars: 0,
      receipt: '',
      publicKeys: []
    };
  }
  // GET PUBLIC ADRESSES FROM DB
  getWallets = () => {
    Key.find(localStorage.getItem('userid'))
      .then(result => {
        this.setState({
          publicKeys: result.result
        });
      })
      .catch(e => alert(e));
  };
  // MODAL FUNCTIONS
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  // END OF MODAL FUNCTIONS

  handleBitChange(e) {
    this.setState({ bitcoin: e.target.value });
  }
  handleDolChange(e) {
    this.setState({ dollars: e.target.value });
  }

  getValidationState = () => {
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
    return null;
  };
  componentDidMount() {
    this.getWallets();
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>Buy Bitcoin</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Buy Bitcoin from Coinbase</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Amount in USD</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Your Public Key</ControlLabel>
                <FormControl componentClass="select" placeholer="select">
                  <option value="select">Select a Public Key</option>
                  {this.state.publicKeys.map((address, index) => (
                    <option value={address.publickey}>
                      {address.publickey}
                    </option>
                  ))}
                </FormControl>
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <a
              className="coinbase-widget btn btn-primary"
              target="_newtab"
              id="coinbase_widget"
              href="https://buy.coinbase.com?code=41531c99-ac61-554d-8fbc-430e3344c2e8&address=1FoemeQ8ALM7TNouHkco1p3n9TrynX8pUZ&amount=20
              "
            >
              Buy bitcoin using Coinbase
            </a>

            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default BuyBitcoinModal;
