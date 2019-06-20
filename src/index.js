import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import Userdata from './Userdata';
import Loading from './Loading';

class App extends React.Component {
  state = { data: [], loading: true };
  componentDidMount = async () => {
    const response = await Userdata.get('/users');
    this.setState({
      data: response.data,
      loading: false
    });

  };
  render() {
    if (this.state.loading === true) {
      return (
        <div >
          <Loading />
        </div >);

    }
    return (
      <div className="ui container">
        <CardList data={this.state.data} />
      </div>
    );

  }
}
ReactDOM.render(<App />, document.querySelector('#root'));