import React from 'react';
import Card from './Card';

const CardList = (props) => {
 
 const cards = props.data.map(e => {
    return <Card data={e} />;
  });
  return (
    <div className="ui container" >{cards}</div>
  );
}

export default CardList;