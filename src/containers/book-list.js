import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';


class BookList extends Component {

  renderList() {
    
    return this.props.books.map( (book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {

    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // returned object will show up as props inside of BookList
  return {
    books: state.books
  }
}

// anthing returned from this function will show up as props on BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to container -
// it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
