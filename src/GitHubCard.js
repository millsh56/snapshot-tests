import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function GithubUserCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Hannah's Github Card</Card.Title>
        <Card.Text>
          Hi I'm learning to code!
        </Card.Text>
    return (
      <div>
      <Link to='https://github.com/millsh56'>
      <button variant="info">Button</button>
      </Link>
      </div>
    );
      </Card.Body>
    </Card>
  );
}

export default GithubUserCard;