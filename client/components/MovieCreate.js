import React, { Component } from 'react';
import createMovie from '../queries/createMovie';
import readMovies from '../queries/readMovies';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
class MovieCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: readMovies }], // force la réexécutin de readMovies
      })
      .then(() => {
        hashHistory.push('/');
      });
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>Créer film</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Titre :
              <input
                type='text'
                placeholder='Tapez un titre'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <input type='submit' value='Envoyer' />
          </div>
        </form>
      </div>
    );
  }
}

export default graphql(createMovie)(MovieCreate);
