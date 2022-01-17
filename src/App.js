import { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3
    this.state = {
      mode: 'create',
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
  render() {
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
          contents: _contents
        })
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>
    }
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
              e.preventDefault() // 이벤트의 기본동작을 막아줌 여기서는 새로고침을 막아줌
              // debugger 브라우저에서 실행을 멈춰줌
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
          this.setState({mode: _mode})
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
