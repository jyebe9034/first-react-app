import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
// import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'welcome',
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
    let _title, _desc = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          subTitle={this.state.subject.subTitle}>
        </Subject> */}
        <header>
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
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
