import React from 'react';
import './Detail.css';

class Card extends React.Component {
  render() {
    const img = `https://avatars.dicebear.com/v2/avataaars/${this.props.data.username}.svg?options[mood][]=happy`;
    return (
      <div className="ui fluid raised card" >
        <div className="ui grid">
          <div className="ui row">
            <div className="three wide column">
              <img src={img} width="200px" height="200px" /></div>
            <div className="thirteen wide column" >
              <h2>{this.props.data.name}</h2>
              <p ><strong>Email :</strong> {this.props.data.email}</p>
              <p ><strong>Phone :</strong>{this.props.data.phone}</p>
              <p ><strong>Company :</strong>{this.props.data.company.name}</p>
              <p ><strong>Website :</strong>{this.props.data.website}</p>
              <p ><strong>Address :</strong>{this.props.data.address.street}, {this.props.data.address.suite}, {this.props.data.address.city}, {this.props.data.address.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
