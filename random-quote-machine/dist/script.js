function setBackground() {
  const color = '#' + '4' + Math.random().toString(16).slice(2, 7);
  document.documentElement.style.setProperty('--default-color', color);
}
class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loading: true,
      quotes: [] };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://type.fit/api/quotes").
    then(res => res.json()).
    then(data => {
      data = data.slice(0, 100);
      this.setState({ loading: false, quotes: data });
    });
    setBackground();
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ count: Math.floor(Math.random() * 100) });
    setBackground();
  }

  render() {
    let count = this.state.count;
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" },
      this.state.loading ? /*#__PURE__*/
      React.createElement("i", { className: "fa fa-cog fa-spin fa-3x fa-fw" }) : /*#__PURE__*/

      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { id: "text" }, /*#__PURE__*/React.createElement("i", { class: "fas fa-quote-left" }), " ", this.state.quotes[count].text, " ", /*#__PURE__*/React.createElement("i", { class: "fas fa-quote-right" })), /*#__PURE__*/
      React.createElement("div", { id: "author" }, this.state.quotes[count].author ? this.state.quotes[count].author : ""), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.handleClick }, "New quote"), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_blank" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-twitter" }))), /*#__PURE__*/




      React.createElement("div", { class: "attribution" }, "by Ayush Sinha")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById('root'));