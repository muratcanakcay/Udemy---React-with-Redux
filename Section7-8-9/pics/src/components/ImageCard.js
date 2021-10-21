import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.ImageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.ImageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
