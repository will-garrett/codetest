import React from 'react';
import { connect } from 'react-redux';

import Flickity from "react-flickity-component";
import 'flickity-imagesloaded';

import { fetchInterests, fetchFactoids } from '../actions';
import Description from "./Description";

class Carousel extends React.Component {
  state = {
    selected: null
  }
  constructor(props){
    super(props);
    this.d_ref = React.createRef();
  }
  componentDidMount() {
    this.props.fetchInterests();
    this.flkty.on("settle", () => {
      console.log("FIRED SETTLE EVENT");
      console.log(this.props);
      this.props.updater(this.flkty.selectedIndex);
      this.d_ref.current.updateDescription(this.props.interests[this.flkty.selectedIndex].description);
    });
  }
  description(){
    if(Object.entries(this.props.interests).length != 0){
      return this.props.interests[this.flkty.selectedIndex].description;
    }
    else{
      return;
    }
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
      <div>
      <Description ref={this.d_ref} description={this.description()} />
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
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  
  return { 
    interests: Object.values(state.interests),
  };
}

export default connect(mapStateToProps, {fetchInterests})(Carousel);