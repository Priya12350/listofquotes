import React from "react";
import ReactDOM from "react-dom";
const quotes = [
    {text: 'Whatever the mind of man can conceive and believe, it can achieve.',
    author: 'Napoleon Hill'},
    {text: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein'},
    {text: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale'},
    {text: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky'}
  ];
  
  const Quote = props => {
    return (
      <div>
        <h4>{props.text}</h4>
        <p>{props.author}</p>
      </div>
    );
  };
  
  Quote.propTypes = {
    text: React.PropTypes.string,
    author: React.PropTypes.string
  }
  
  const App = props => {
    const quoteArray = props.quotes.map((quote) => {
      return (
        <Quote text={quote.text} author={quote.author} />
      );
    });
    return (
      <div>
        <h2>Famous Quotes</h2>
        {quoteArray}
      </div>
    );
  };
  
  App.propTypes = {
    quotes: React.PropTypes.array
  }
  
  ReactDOM.render(
    <App quotes={quotes} />,
    document.getElementById('root')
  );
  
  const reactComponent = props => {
    return (
      <div>
        <p>Data1</p>
        <p>Data2</p>
        <p>Data3</p>
      </div>
    );
  };