// == Import npm
import React from 'react';

//import ButtonBase from '@material-ui/core/ButtonBase';
import './styles.scss';
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types';



const CardExampleCardProps = (props) => {
  const { fdp }= props;
  

  return(
  <div className="container-card" >

 {
  fdp.map((postObject) => (

    <Card 
    key={postObject.id}
    target='_blank'
    href={postObject.html_url}
    image={postObject.owner.avatar_url}
    header= {postObject.name}
    meta={postObject.full_name}
    description={postObject.description}/>
        ))
      }
  
 </div>
  )}
  CardExampleCardProps.propTypes = {
    fdp:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        html_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        full_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,).isRequired
    
  };
  

export default CardExampleCardProps;
