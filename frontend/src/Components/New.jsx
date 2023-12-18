import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './new.css';
const New = () => {
  const [showModal, setShowModal] = useState(false);
  const [storedPrice, setStoredPrice] = useState('');
  const [item, setItem] = useState({ pairs: '' });
  const { pairs } = item;
 

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const contractAddress = '0x45e9039195B8141b6A5a3137B8455C957d4E5eB5';
  const ABI =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "get_BTC_ETH_answer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_BTC_USD_answer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_ETH_USD_answer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_LINK_USD_answer",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const provider = new ethers.BrowserProvider(window.ethereum);
  const smartContract = new ethers.Contract(contractAddress, ABI, provider);

  const getPair = async (pair) => {
    let contractPrice = 0;
    if (pair === 'BTC/USD') {
      contractPrice = await smartContract.get_BTC_USD_answer();
      setStoredPrice('$' + (parseInt(contractPrice) / 100000000).toString());
    } else if (pair === 'ETH/USD') {
      contractPrice = await smartContract.get_ETH_USD_answer();
      setStoredPrice('$' + (parseInt(contractPrice) / 100000000).toString());
    } else if (pair === 'LINK/USD') {
      contractPrice = await smartContract.get_LINK_USD_answer();
      setStoredPrice('$' + (parseInt(contractPrice) / 100000000).toString());
    } else if (pair === 'BTC/ETH') {
      contractPrice = await smartContract.get_BTC_ETH_answer();
      setStoredPrice('ETH\n' + (parseInt(contractPrice) / 1000000000000000000).toString());
    } else {
      console.error('Invalid pair:', pair);
      return;
    }

    handleShow(); // Show modal after getting the pair
  };

  const handleChange = (e) => {
    setStoredPrice('');
    setItem((prevState) => ({
      ...prevState,
      pairs: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPair(pairs);
  };

  return (



<div className="container mt-5 mycontainer">
    
    
      <h2 className="text-center text">CHAINLINK PAIR CONVERSION</h2>
      <Card className="mx-auto" style={{ width: '22rem' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="pairs">
            <div style={{ marginBottom: '10px' }}></div>
              <Form.Check
                value="BTC/USD"
                type="radio"
                onChange={handleChange}
                aria-label="radio-1"
                label="BTC/USD"
                checked={pairs === 'BTC/USD'}
              />
              <div style={{ marginBottom: '10px' }}></div>
              <Form.Check
                value="ETH/USD"
                type="radio"
                onChange={handleChange}
                aria-label="radio-2"
                label="ETH/USD"
                checked={pairs === 'ETH/USD'}
              />
              <div style={{ marginBottom: '10px' }}></div>
              <Form.Check
                value="LINK/USD"
                type="radio"
                onChange={handleChange}
                aria-label="radio-3"
                label="LINK/USD"
                checked={pairs === 'LINK/USD'}
              />
              <div style={{ marginBottom: '10px' }}></div>
              <Form.Check
                value="BTC/ETH"
                type="radio"
                onChange={handleChange}
                aria-label="radio-4"
                label="BTC/ETH"
                checked={pairs === 'BTC/ETH'}
              />
             
            </Form.Group>
            <div style={{ marginBottom: '30px' }}></div>
            <Button block type="submit" size="sm" variant="outline-primary">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Conversion Result</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5>{pairs ? `${pairs}\n=> ${storedPrice}` : 'Please Select A Pair!!'}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default New;
