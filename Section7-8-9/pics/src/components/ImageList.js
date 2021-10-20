import React from "react";

const ImageList = (props) => {
  // refactoring (images) --> ({id, description, urls})
  const images = props.images.map(({ id, description, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });
  //   const images = props.images.map((image) => {
  //     return (
  //       <img key={image.id} alt={image.description} src={image.urls.regular} />
  //     );
  //   });

  return <div>{images}</div>;
};

export default ImageList;
