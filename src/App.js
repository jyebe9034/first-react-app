import { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: {
        title: 'WEB',
        subTitle: 'world wide web'
      },
      welcome: {
        title: 'Welcome',
        desc: 'Hello, React!!' 
      },
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }
  getContent() {
    let _title, _desc, _article = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      const selected = this.state.contents.filter(item => item.id === this.state.selected_content_id)
      _title = selected[0].title
      _desc = selected[0].desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1
        // this.state.contents.push({
        //   id: this.max_content_id,
        //   title: _title,
        //   desc: _desc
        // })
        let _contents = this.state.contents.concat({
          id: this.max_content_id,
          title: _title,
          desc: _desc
        })
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_content_id: this.max_content_id
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      const selected = this.state.contents.filter(item => item.id === this.state.selected_content_id)
      _article = <UpdateContent data={selected[0]} onSubmit={
      function(_id,_title, _desc){
        let _contents = Array.from(this.state.contents)
        let i = 0
        while(i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, desc: _desc}
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents: _contents,
          mode: 'read'
        })
      }.bind(this)}></UpdateContent>
    }
    return _article
  }
  render() {
    
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          subTitle={this.state.subject.subTitle}
          onChangePage={function() {
            this.setState({mode: 'welcome'})
          }.bind(this)}
        >
        </Subject>
        {/* <header>
            <h1><a href="/" onClick={function(e){
              console.log(e)
              e.preventDefault() // ???????????? ??????????????? ????????? ???????????? ??????????????? ?????????
              // debugger ?????????????????? ????????? ?????????
              // this.state.mode = 'welcome'
              this.setState({
                mode: 'welcome'
              })
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.subTitle}
        </header> */}
        <TOC 
          onChangePage={function(id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            })
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          if (_mode === 'delete') {
            if (window.confirm('Do you really want to delete?')) {
              let _contents = Array.from(this.state.contents)
              let i = 0;
              while(i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1)
                  break
                }
                i = i + 1
              }
              this.setState({
                mode: 'welcome',
                contents: _contents
              })
              alert('delete!!')
            }
          } else {
            this.setState({mode: _mode})
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
