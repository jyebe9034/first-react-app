import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject : {
        title: 'WEB',
        subTitle: 'world wide web'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subTitle.title} 
          subTitle={this.state.subTitle.subTitle}>
        </Subject>
        <Subject title="React" subTitle="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

export default App;
