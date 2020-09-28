import React, { PureComponent, Fragment } from "react";
import styles from "./ProjectView.module.scss";
import classnames from "classnames";
import { Text, Paragraph, Image, Icon } from "../../elements";
import { ImageView } from "../";
import backArrow from "../../../images/icons/arrow-left.svg";
import nextArrow from "../../../images/icons/arrow-right-white.svg";

type Props = {
  data: {
    title: string,
    subtitle: string,
    background: string,
  },
  isOpen: boolean,
  closeProject: () => void,
}

type State = {
  variableHeaderVisible: boolean,
  imageViewOpen: boolean,
  imageViewData: {
    image: string,
    alt: string
  },
}

const intialState = Object.freeze({
  variableHeaderVisible: false,
  imageViewOpen: false,
  imageViewData: { image: "", alt: "" }
})

class ProjectView extends PureComponent<Props, State> {

  readonly state = intialState

  private projectRef = React.createRef<HTMLDivElement>();
  private titleRef = React.createRef<HTMLDivElement>();
  private bannerRef = React.createRef<HTMLImageElement>();

  static getDerivedStateFromProps(props: Props) {
    return {
      isOpen: props.isOpen,
    };
  }

  componentDidMount() {
    const project = this.projectRef.current;
    project && project.addEventListener("scroll", this.onScrollFunctions);
  }

  componentWillUnmount() {
    const project = this.projectRef.current;
    project && project.removeEventListener("scroll", this.onScrollFunctions);
  }

  componentDidUpdate() {
    this.stopPageFromScrolling();
  }

  onScrollFunctions = () => {
    const project = this.projectRef.current;
    const title = this.titleRef.current;
    const banner = this.bannerRef.current;
    const scrollTop = project && project.scrollTop / 1000;

    if (scrollTop && scrollTop >= 0.34) {
      this.setState({ variableHeaderVisible: true });
    } else {
      this.setState({ variableHeaderVisible: false });
    }

    if (banner && title) {
      //make header enlarge while scrolling
      if (scrollTop && scrollTop >= 0) {
        //image enlarges on scroll
        banner.style.transform =
          "translateY(-50%) scale(" + (scrollTop / 3 + 1) + ")";
        //become invisible on scroll
        banner.style.opacity = (1 - scrollTop).toString();
        title.style.opacity = (1 - scrollTop).toString();
      }
    }
  };

  handleClose = () => {
    const { closeProject } = this.props;
    const project = this.projectRef.current;
    closeProject && closeProject();
    setTimeout(() => {
      project && (project.scrollTop = 0);
    }, 300);
  };

  openImageView = (image: string, alt: string) => {
    this.setState({
      imageViewData: {
        image: image,
        alt: alt,
      },
      imageViewOpen: true,
    });
  };

  closeImageView = () => {
    this.setState({
      imageViewOpen: false,
    });
  };

  stopPageFromScrolling = () => {
    const { isOpen } = this.props;
    const body = document.getElementsByTagName("body")[0];
    isOpen ?
      body.style.overflow = "hidden"
      :
      body.style.overflow = "unset"
  }

  openMessagePopup = () => {
    alert("open popup");
  }

  render() {
    const { data, isOpen, } = this.props;
    const {
      variableHeaderVisible,
      imageViewOpen,
      imageViewData,
    } = this.state;
    const {
      handleClose,
      openImageView,
      projectRef,
      titleRef,
      bannerRef,
      closeImageView,
      openMessagePopup,
    } = this;

    return (
      <Fragment>
        <div
          ref={projectRef}
          className={classnames(styles.root, { [styles.active]: isOpen })}
        >
          <div
            id={"variableHeaderRef"}
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
              <Text text={"Projects"} strong />
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
                <Text variant={"h5"} text={data.subtitle} />
                <Text variant={"h1"} text={data.title} extraLarge />
              </div>
            </div>
          </div>

          <div className={classnames(styles.content)}>
            <div className={classnames(styles.summaryContainer)}>
              <div className={classnames(styles.summary)}>
                <Text
                  variant={"h2"}
                  text={
                    "Summary"
                  }
                />
                <Text
                  variant={"p"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                />
              </div>
              <div className={classnames(styles.skills)}>
                <Text
                  text={"Skills used"}
                  strong
                />
                <Text
                  text={"React JS"}
                />
              </div>
              <div className={classnames(styles.year)}>
                <Text
                  text={"Year"}
                  strong
                />
                <Text
                  text={"2018"}
                />
              </div>
            </div>

            <Paragraph
              lifted
              variant={"textAndImage"}
              imageClickFunc={() =>
                openImageView(data.background, "Digitas banner")
              }
              title={"Title"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              image={data.background}
              imageAlt={"Digitas banner"}
              imageDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              }
            />

            <Paragraph
              reversed
              variant={"textAndImage"}
              imageClickFunc={() =>
                openImageView(data.background, "Digitas banner")
              }
              title={"Title"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              image={data.background}
              imageAlt={"Digitas banner"}
              imageDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              }
            />

            <Paragraph
              variant={"image"}
              imageClickFunc={() =>
                openImageView(data.background, "Digitas banner")
              }
              image={data.background}
              imageAlt={"Digitas banner"}
              imageDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              }
            />
            <Image
              source={data.background}
              alt={"Digitas banner"}
            />
          </div>
          <footer className={classnames(styles.projectFooter)}>
            <div className={classnames(styles.imageContainer)}>
              <img src={data.background} alt={"Footer background"} />
            </div>
            <div className={classnames(styles.haze)} />
            <div className={classnames(styles.footerInner)} >
              <div className={classnames(styles.prevProject)}>
                <img src={backArrow} alt={"previous project"} />
                <Text strong text={"Previous project"} />
              </div>
              <div className={classnames(styles.titleContainer)}>
                <Text variant={"h2"} text={data.title} />
              </div>
              <div className={classnames(styles.nextProject)}>
                <Text strong text={"Next project"} />
                <img src={nextArrow} alt={"previous project"} />
              </div>
            </div>
            <div className={classnames(styles.socialFooter)}>
              <div className={classnames(styles.socialContainer)}>
                <a
                  href={
                    "https://www.linkedin.com/in/kevin-van-helden-671726141/"
                  }
                >
                  <Icon icon={"linkedIn"} />
                </a>
                <Icon clickFunc={openMessagePopup} icon={"mail"} />
              </div>
            </div>
          </footer>
        </div>
        <ImageView closeView={closeImageView} open={imageViewOpen} data={{ image: imageViewData.image, alt: imageViewData.alt }} />
      </Fragment>
    );
  }
}

export default ProjectView;
