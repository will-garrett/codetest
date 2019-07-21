import React from 'react';
import { connect } from 'react-redux';

import Flickity from "react-flickity-component";
import 'flickity-imagesloaded';

import { fetchInterests } from '../actions';
import Description from "./Description";
import { Divider } from 'semantic-ui-react';

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
      this.d_ref.current.setState({description: this.props.interests[this.flkty.selectedIndex].description});
      this.props.updater(this.props.interests[this.flkty.selectedIndex].id);
    });
  }
  description(){
    if(Object.entries(this.props.interests).length !== 0){
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
        <Divider/>
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