import React from "react";
import MemeInterface from "./MemeInterface";
import PageLoader from "./PageLoader";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      bottomText: "",
      topText: "",
      loading: false,
      img: "https://i.imgflip.com/1ii4oc.jpg",
      randImages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          randImages: data.data.memes,
          loading: false,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.randImages.length);

    this.setState({
      img: this.state.randImages[randNum].url,
    });
  }

  render() {
    return this.state.loading ? (
      <PageLoader />
    ) : (
      <MemeInterface
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

export default MemeGenerator;
