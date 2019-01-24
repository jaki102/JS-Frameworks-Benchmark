import React, { Component } from "react";
import axios from 'axios';
import _ from 'lodash';
import './Table.css';

class Table extends Component {
  state = {
    data: { posts: [], comments: [] },
    posts: false,
    jsMeterOpt: {
      isPrint: true,
      isKb: true
    }
  }

  constructor(props) {
    super(props);

    this.add100Rows = this.add100Rows.bind(this)
    this.add1000Rows = this.add1000Rows.bind(this)
    this.clearRows = this.clearRows.bind(this)
    this.updateEveryRow = this.updateEveryRow.bind(this)
    this.swapRows = this.swapRows.bind(this)
  }

  componentDidUpdate() {
    this.end = +new Date()
    console.log(`Execution Time: ${this.end - this.start} ms`)
  }

  renderTable = () => {
    return this.state.posts.map((post, idx) => (
      <tr key={idx}>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
    ));
  }

  async getPosts(n) {
    this.start = +new Date()
    let tempPosts = []
    this.setState({posts: []})
    for (let i = 1; i <= n; i++) {
      const id = Math.floor(Math.random() * 100) + 1;
      await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => tempPosts.push(res.data))
    }
    return tempPosts;
  }

  add100Rows() {
    this.start = +new Date();
    this.getPosts(100).then(res => this.setState({posts: res}));
  }

  add1000Rows() {
    this.start = +new Date();
    this.getPosts(1000).then(res => this.setState({posts: res}));
  }

  clearRows() {
    this.start = +new Date()
    // this.setState({data: { ...this.state.data, posts: []}})
    let tempPosts = this.state.posts;
    while(tempPosts.length > 0) {
      tempPosts.pop()
    }
    this.setState({posts: tempPosts})
  }

  updateEveryRow() {
    this.start = +new Date()
    // const updatedRows = this.state.data.posts.map(row => {
    //   row.title += "!!!!"
    //   row.body += "!!!!"
    //   return row;
    // })
    // this.setState({ data: { ...this.state.data, posts: updatedRows } })
    let rows = this.state.posts;
    for (let i = 0; i < this.rows.length; i++) {
      const postNumber = Math.floor(Math.random() * 100) + 1;
      const url = 'https://jsonplaceholder.typicode.com/posts/'+ postNumber;

      fetch(url)
        .then(response => response.json())
        .then(json => {
          rows[i].title = json.title
          rows[i].body = json.body})
    }
    this.setState({posts:rows})
  }

  swapRows() {
    this.start = +new Date()
    // const swapedRows = _.shuffle(this.state.data.posts)
    // this.setState({ data: { ...this.state.data, posts: swapedRows } })
    if(this.state.posts.length >= 16){
      const posts = this.state.posts;
      var depotTitle = posts[1].title;
      var depotBody = posts[1].body;
      posts[1].title = posts[15].title;
      posts[1].body = posts[15].body;
      posts[15].title = depotTitle;
      posts[15].body = depotBody;
      this.setState({posts})
    }
  }

  render() {
    console.log(!!this.state.posts);
    return (
      <div>
        <button onClick={this.add100Rows}>Add 100 Rows</button>
        <button onClick={this.add1000Rows}>Add 1000 Rows</button>
        <button onClick={this.clearRows}>Clear Rows</button>
        <button onClick={this.updateEveryRow}>Update Rows</button>
        <button onClick={this.swapRows}>Swap Rows</button>
        <table>
          <thead>
            <tr><td>Title</td><td>Body</td></tr>
          </thead>
          <tbody>
            {this.state.posts && this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
