import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Button } from 'semantic-ui-react'

const Footer = (props) => {
 const { counter, onListfetch, todoLabel, pagePrec, pageSuiv } = props

  return (
    <div className="todo-counter2">
    <Button  onClick={() => {pagePrec();  onListfetch(todoLabel)}} content='Page précedente' />
    <Button  onClick={() => {counter();  onListfetch(todoLabel)}} content='Plus de résultats' />
    <Button  onClick={() => {pageSuiv();  onListfetch(todoLabel)}} content='Page suivante' />
    </div>
  );
};



export default Footer;
