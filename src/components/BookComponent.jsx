// import React, { Component } from 'react'

// export default class Book extends Component {
//     selectType = (ele) => {
//         let obj;
//         if(ele.target.value === "read")
//         {
//             obj = { type: "read", id: this.props.id };
//         }
//         else if(ele.target.value === "like")
//         {
//             obj = { type: "like", id: this.props.id };
//         }
//         else if(ele.target.value === "dislike")
//         {
//             obj = { type: "dislike", id: this.props.id };
//         }
//         else if(ele.target.value === "del")
//         {
//             obj = { type: "all", id: this.props.id };
//         }
//         this.props.setBook(obj);
//     }
//     render() {
//         return (
//             <div className="book-container">
//                 <img src={this.props.img} alt="" />
//                 <br />
//                 <p className="bname">{this.props.title}</p>
//                 <p className="bauthor">{this.props.author}</p>
//                 <div className="arrow"></div>
//                 <select onChange={this.selectType}>
//                     <option value="read">Read</option>
//                     <option value="like">Like</option>
//                     <option value="dislike">Dislike</option>
//                     <option value="del">Delete</option>
//                 </select>
//             </div>
//         )
//     }
// }



import React, { Component } from "react";

export default class Book extends Component {
  selectType = (ele) => {
    let obj;
    if (ele.target.value === "read") {
      obj = { type: "read", id: this.props.id };
    } else if (ele.target.value === "like") {
      obj = { type: "like", id: this.props.id };
    } else if (ele.target.value === "dislike") {
      obj = { type: "dislike", id: this.props.id };
    } else if (ele.target.value === "del") {
      obj = { type: "all", id: this.props.id };
    }
    this.props.setBook(obj);
  };
  render() {
    return (
      <div className="book-container">
        <img src={this.props.img} alt="" />
        <br />
        <p className="bname">{this.props.title}</p>
        <p className="bauthor">{this.props.author}</p>
        <div className="arrow"></div>
        <select onChange={this.selectType}>
          <option value="read">Read</option>
          <option value="like">Like</option>
          <option value="dislike">Dislike</option>
          <option value="del">Delete</option>
        </select>
      </div>
    );
  }
}
