import gql from 'graphql-tag';

const readMovie = gql`
  query ReadMovie($id: ID!) {
    movie(id: $id) {
      id
      title
    }
  }
`;

export default readMovie;