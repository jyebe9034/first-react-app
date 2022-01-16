import { Component } from 'react';

class TOC extends Component {
  render() {
    const list = []
    const data = this.props.data
    let i = 0
    while (i < data.length) {
      list.push(
        <li key={data[i].id}>
          <a 
          href={"/content/" + data[i].id}
          onClick={function(id, e) {
            e.preventDefault()
            this.props.onChangePage(id)
          }.bind(this, data[i].id)}
          >{data[i].title}</a>
        </li>)
      i = i + 1
    }
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
  }
  }

export default TOC;