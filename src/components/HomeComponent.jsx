// import React, { Component } from 'react'
// import Book from './BookComponent'
// import { Link } from 'react-router-dom';


// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             books: this.props.books
//         }
//     }
//     setBookType = (ele) => {
//         let ind = this.state.books.findIndex(bk => bk.id === ele.id)
//         let newBooks = this.state.books
//         newBooks[ind].type = ele.type
//         this.setState({
//             books: [...newBooks]
//         })
//     }
//     componentDidMount = () => {
//         let obj = this.props.objt
//         if (obj.type !== "") {
//             let ind = this.state.books.findIndex(bk => bk.id === obj.id)
//             let newBooks = this.state.books
//             newBooks[ind].type = obj.type
//             this.setState({
//                 books: [...newBooks]
//             })
//         }
//     }
//     render() {
//         return (
//             <>
//                 <div className='header'>
//                     <h1>ProBook</h1>
//                     <br />
//                 </div>
//                 <div>
//                     <h1 className='headersmall'>Reading</h1>
//                     <br /><br />
                    
//                     <div className="read">
//                         {
//                             (this.state.books.filter((book) => { return book.type === "read" }).length === 0) ?
//                                 ""
//                                 :
//                                 this.state.books.filter((book) => {
//                                     return book.type === "read"
//                                 })
//                                 .map((book) => {
//                                     return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} setBook={this.setBookType}/>
//                                 })
//                         }
//                     </div>

//                     <br/>
//                     <h1 className='headersmall'>Like</h1>
//                     <br /><br />
                    
//                     <div className="like">
//                         {
//                             (this.state.books.filter((book) => { return book.type === "like" }).length === 0) ?
//                                 ""
//                                 :
//                                 this.state.books.filter((book) => {
//                                     return book.type === "like"
//                                 })
//                                     .map((book) => {
//                                         return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} setBook={this.setBookType}/>
//                                     })
//                         }
//                     </div>
                    
//                     <br />
//                     <h1 className='headersmall'>Dislike</h1>
//                     <br /><br />
                    
//                     <div className="dislike">
//                         {
//                             (this.state.books.filter((book) => { return book.type === "dislike" }).length === 0) ?
//                                 ""
//                                 :
//                                 this.state.books.filter((book) => {
//                                     return book.type === "dislike"
//                                 })
//                                     .map((book) => {
//                                         return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} setBook={this.setBookType}/>
//                                     })
//                         }
//                     </div>

//                 </div>
//                 <Link to="/search" className="search-button">+</Link>
//             </>
//         )
//     }
// }




import React, { Component } from "react";
import Book from "./BookComponent";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
    };
  }
  setBookType = (ele) => {
    let ind = this.state.books.findIndex((bk) => bk.id === ele.id);
    let newBooks = this.state.books;
    newBooks[ind].type = ele.type;
    this.setState({
      books: [...newBooks],
    });
  };
  componentDidMount = () => {
    let obj = this.props.objt;
    if (obj.type !== "") {
      let ind = this.state.books.findIndex((bk) => bk.id === obj.id);
      let newBooks = this.state.books;
      newBooks[ind].type = obj.type;
      this.setState({
        books: [...newBooks],
      });
    }
  };
  render() {
    return (
      <>
        <div className="header">
          <h1>ProBook</h1>
          <br />
        </div>
        <div>
          <h1 className="headersmall">Reading</h1>
          <br />
          <br />

          <div className="read">
            {this.state.books.filter((book) => {
              return book.type === "read";
            }).length === 0
              ? ""
              : this.state.books
                  .filter((book) => {
                    return book.type === "read";
                  })
                  .map((book) => {
                    return (
                      <Book
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        img={book.img}
                        setBook={this.setBookType}
                      />
                    );
                  })}
          </div>

          <br />
          <h1 className="headersmall">Like</h1>
          <br />
          <br />

          <div className="like">
            {this.state.books.filter((book) => {
              return book.type === "like";
            }).length === 0
              ? ""
              : this.state.books
                  .filter((book) => {
                    return book.type === "like";
                  })
                  .map((book) => {
                    return (
                      <Book
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        img={book.img}
                        setBook={this.setBookType}
                      />
                    );
                  })}
          </div>

          <br />
          <h1 className="headersmall">Dislike</h1>
          <br />
          <br />

          <div className="dislike">
            {this.state.books.filter((book) => {
              return book.type === "dislike";
            }).length === 0
              ? ""
              : this.state.books
                  .filter((book) => {
                    return book.type === "dislike";
                  })
                  .map((book) => {
                    return (
                      <Book
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        img={book.img}
                        setBook={this.setBookType}
                      />
                    );
                  })}
          </div>
        </div>
        <Link to="/search" className="search-button">
          +
        </Link>
      </>
    );
  }
}
