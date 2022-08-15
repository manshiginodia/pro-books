// import React, { Component } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/HomeComponent';
// import Search from './components/SearchComponent';
// import axios from 'axios'

// import './App.css';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       books: [],
//       obj: { type: "", id: "" }
//     }
//   }

//   componentDidMount = () => {
//     let api = "https://reactnd-books-api.udacity.com/books";
//     let token;
//     if (!token) {
//       token = localStorage.token = Math.random().toString(36).substr(-8)
//     }
//     const headers = {
//       'Accept': 'application/json',
//       'Authorization': token
//     }
//     axios.get(api, { headers })
//       .then((res) => {
//         let newBooks = []
//         res.data.books.forEach((book) => {
//           let obj = { id: book.id, title: book.title, author: book.authors[0], img: book.imageLinks.thumbnail, type: "all" }
//           newBooks.push(obj)
//         })
//         this.setState({
//           books: [...newBooks]
//         })
//       })
//   }

//   setBookSearch = (e) => {
//     let newObj = this.state.obj
//     newObj.type = e.type
//     newObj.id = e.id
//     this.setState({
//       obj: newObj
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home books={this.state.books} objt={this.state.obj} />} />
//             <Route path="/search" element={<Search books={this.state.books} type={this.setBookSearch} />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomeComponent";
import Search from "./components/SearchComponent";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      obj: { type: "", id: "" },
    };
  }

  componentDidMount = () => {
    let api = "https://reactnd-books-api.udacity.com/books";
    let token;
    if (!token) {
      token = localStorage.token = Math.random().toString(36).substr(-8);
    }
    const headers = {
      Accept: "application/json",
      Authorization: token,
    };
    axios.get(api, { headers }).then((res) => {
      let newBooks = [];
      res.data.books.forEach((book) => {
        let obj = {
          id: book.id,
          title: book.title,
          author: book.authors[0],
          img: book.imageLinks.thumbnail,
          type: "all",
        };
        newBooks.push(obj);
      });
      this.setState({
        books: [...newBooks],
      });
    });
  };

  setBookSearch = (e) => {
    let newObj = this.state.obj;
    newObj.type = e.type;
    newObj.id = e.id;
    this.setState({
      obj: newObj,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home books={this.state.books} objt={this.state.obj} />}
            />
            <Route
              path="/search"
              element={
                <Search books={this.state.books} type={this.setBookSearch} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
