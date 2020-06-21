import React, { PureComponent, Fragment } from "react";
import styles from "./ProjectView.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Text, Icon, Paragraph, Image } from "../../elements";
import { ImageView } from "../";
import backArrow from "../../../images/icons/arrow-left.svg";

class ProjectView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      variableHeaderVisible: false,
      imageViewOpen: false,
      imageViewData: { image: null, alt: null },
    };
    this.projectRef = React.createRef();
    this.titleRef = React.createRef();
    this.bannerRef = React.createRef();
    this.variableHeaderRef = React.createRef();
    this.scrollRef = React.createRef();
  }

  /* 
  * PropTypes
  ================================================================
  */
  static propTypes = {
    /**
     * The used in the projectView
     */
    data: PropTypes.object,
    /**
     * Determines if component is active or not
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * Closes the project
     */
    closeProject: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: {},
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      isOpen: nextProps.isOpen,
    };
  }

  /* 
  * Mounting
  ================================================================
  */

  componentDidMount() {
    const project = this.projectRef.current;
    project && project.addEventListener("scroll", this.onScrollFunctions);
  }

  componentWillUnmount() {
    const project = this.projectRef.current;
    project && project.removeEventListener("scroll", this.onScrollFunctions);
  }

  /*
  * Scroll function
  ================================================================
  */
  onScrollFunctions = () => {
    const { projectRef, titleRef, bannerRef, scrollRef } = this;
    const project = projectRef.current;
    const title = titleRef.current;
    const banner = bannerRef.current;
    const scrollIcon = scrollRef.current;
    const scrollTop = project.scrollTop / 1000;

    if (scrollTop >= 0.34) {
      this.setState({ variableHeaderVisible: true });
    } else {
      this.setState({ variableHeaderVisible: false });
    }

    if (banner && title) {
      //make header enlarge while scrolling
      if (scrollTop >= 0) {
        //image enlarges on scroll
        banner.style.transform =
          "translateY(-50%) scale(" + (scrollTop / 3 + 1) + ")";
        //become invisible on scroll
        banner.style.opacity = 1 - scrollTop;
        scrollIcon.style.opacity = 1 - scrollTop;
        title.style.opacity = 1 - scrollTop;
      }
    }
  };

  handleClose = () => {
    const { closeProject } = this.props;
    const { projectRef } = this;
    const project = projectRef.current;
    closeProject && closeProject();
    setTimeout(() => {
      project.scrollTop = 0;
    }, 300);
  };

  openImageView = (image, alt) => {
    console.log("open imageview");
    this.setState({
      imageViewData: {
        image: image,
        alt: alt,
      },
      imageViewOpen: true,
    });
  };

  /* 
  * Render
  ================================================================
  */
  render() {
    const { data } = this.props;
    const {
      isOpen,
      variableHeaderVisible,
      imageViewOpen,
      imageViewData,
    } = this.state;
    const {
      projectRef,
      titleRef,
      bannerRef,
      variableHeaderRef,
      handleClose,
      openImageView,
    } = this;

    return (
      <Fragment>
        <div
          ref={projectRef}
          className={classnames(styles.root, { [styles.active]: isOpen })}
        >
          <div
            ref={variableHeaderRef}
            className={classnames(styles.variableHeader, {
              [styles.visible]: variableHeaderVisible,
            })}
          >
            <div
              className={classnames(styles.backContainer)}
              onClick={handleClose}
            >
              <img
                className={classnames(styles.dismissButton)}
                src={backArrow}
                alt={"back button"}
              />
              <Text text={"Back"} strong />
            </div>
            <Text text={data.title} strong />
          </div>
          <div className={classnames(styles.frontpage)}>
            <div className={classnames(styles.backgroundImage)}>
              <img ref={bannerRef} src={data.background} alt={"background"} />
              <div className={classnames(styles.backgroundFilter)} />
            </div>

            <div ref={titleRef} className={classnames(styles.projectTitle)}>
              <div className={classnames(styles.projectTitleInner)}>
                <Text variant={"h2"} text={data.subtitle} />
                <Text variant={"h1"} text={data.title} extraLarge />
              </div>
            </div>

            <div ref={this.scrollRef} className={classnames(styles.scroll)}>
              <Icon icon={"mouse"} />
            </div>
          </div>

          <div className={classnames(styles.content)}>
            <Paragraph
              title={"Intro"}
              variant={"text"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Paragraph
              variant={"textAndImage"}
              imageClickFunc={() =>
                openImageView(data.background, "Digitas banner")
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              image={""}
              imageAlt={"Digitas banner"}
            />

            <Paragraph
              variant={"image"}
              imageClickFunc={() =>
                openImageView(data.background, "Digitas banner")
              }
              image={""}
              imageAlt={"Digitas banner"}
              imageDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Image
              source={""}
              alt={"Digitas banner"}
            />
          </div>
        </div>
        <ImageView open={imageViewOpen} data={imageViewData} />
      </Fragment>
    );
  }
}

export default ProjectView;
