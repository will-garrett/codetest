import React from 'react';
import { connect } from 'react-redux';

import Flickity from "react-flickity-component";
import 'flickity-imagesloaded';

import { fetchInterests, selectionUpdated } from '../actions';

class Carousel extends React.Component {
  componentDidMount() {
    this.props.fetchInterests();
    this.flkty.on("settle", () => {
      let sel = this.flkty.selectedIndex;
      let interests = Object.values(this.props.interests);
      
    });

  }
  images(data) {
    if(Object.entries(data).length !== 0){
      return Object.values(data).map(entity => {
        return (
          <img key={entity.id} src={entity.image_loc} alt={entity.description} />
        );
      });
    }
    return;
  }
  render() {
    return (
      <Flickity
        flickityRef={c => (this.flkty = c)}
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={{ wrapAround: true, groupCells: true, pageDots: false , imagesLoaded: true}} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate={true}
      >
        {this.images(this.props.interests)}
      </Flickity>
    );
  }
}


const mapStateToProps = (state) => {
  
  return { 
    interests: Object.values(state.interests),
  };
}

export default connect(mapStateToProps, {fetchInterests,selectionUpdated})(Carousel);