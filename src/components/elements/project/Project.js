import React, { PureComponent } from "react";
import "./Project.css";
import imageNotFound from "../../../images/loadingSquare.svg";
import PropTypes from "prop-types";
import { Text, Button } from "../../elements";
import arrowLeft from "../../../images/Icons/arrow-left.svg";

class Project extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The used in the project
     */
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired
    }),
    /**
     * How to open the projectView
     */
    openProjectView: PropTypes.func
  };

  static defaultProps = {
    data: {
      background: imageNotFound,
      title: "Project not found"
    }
  };

  handleClick = () => {
    this.props.openProjectView(this.props.identification);
  };

  render() {
    const { data } = this.props;
    const { handleClick } = this;
    return (
      <div onClick={handleClick} className={"project"}>
        <div className={"bannerDiv"}>
          <img
            className={"projectBanner"}
            src={data.background ? data.background : imageNotFound}
            alt={data.title}
          />
        </div>
        <div className={"haze"}/>
        <div className={"projectTitleDiv"}>
          <Text variant={"h3"} text={data.title ? data.title : "Loading..."} />
          <Text
            decoration={"secondary"}
            strength={"strong"}
            text={data.description ? data.description : "Loading..."}
          />
        </div>
        <div className={"openOverlay"}>
          <Text decoration={"secondary"} variant={"h4"} strength={"strong"} text={"Open project"} />
          <img src={arrowLeft} alt={"arrow right"} />
        </div>
      </div>
    );
  }
}

export default Project;
