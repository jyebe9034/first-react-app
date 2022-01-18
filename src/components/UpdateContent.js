import { Component } from 'react';

class UpdateContent extends Component {
  render() {
    console.log(this.props.title)
    return (
    <article>
      <h2>Update</h2>
      <form action='/create_process' method='post'
        onSubmit={function(e){
          e.preventDefault()
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          )
        }.bind(this)}
      >
        <p>
          <input type='input' name='title' placeholder='title' />
        </p>
        <p>
          <textarea name='desc' placeholder='description' />
        </p>
        <p>
          <input type='submit' />
        </p>
      </form>
    </article>
    );
  }
}

export default UpdateContent;