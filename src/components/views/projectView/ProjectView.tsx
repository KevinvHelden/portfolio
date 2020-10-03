import React, { PureComponent, Fragment } from "react";
import styles from "./ProjectView.module.scss";
import classnames from "classnames";
import { Text, Paragraph, Icon } from "../../elements";
import { ImageView } from "../";
import backArrow from "../../../images/icons/arrow-left.svg";
import nextArrow from "../../../images/icons/arrow-right-white.svg";

type Props = typeof ProjectView.defaultProps & {
  isOpen: boolean,
  closeProject: () => void,
  switchProject: (destination: any, fadeOut: (direction: string) => void, fadeIn: (direction: string) => void) => void,
  data: {
    title: string,
    skills_used: Array<string>,
    subtitle: string,
    summary: string,
    year: string,
    index: number,
  },
  banner: string,
  paragraphs: any[],
  allIndexes: number[],
}

type State = {
  currentProject: number,
  isOpen: boolean,
  variableHeaderVisible: boolean,
  imageViewOpen: boolean,
  imageViewData: {
    image: string,
    alt: string
  },
}

class ProjectView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentProject: 0,
      isOpen: false,
      variableHeaderVisible: false,
      imageViewOpen: false,
      imageViewData: {
        image: "",
        alt: ""
      }
    };
  }

  static defaultProps = {
    data: {
      title: "",
      skills_used: [],
      subtitle: "",
      summary: "",
      year: "",
      number: 0,
    },
    banner: "",
    paragraphs: [],
    allIndexes: [],
  };

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

  mapSkills = () => {
    const { data } = this.props;
    const skills = data.skills_used;
    return skills.map((skill: string, key: number) => (
      <Text key={key} text={skill} />
    )
    )
  }

  mapParagraphs = () => {
    const { paragraphs } = this.props;
    const { openImageView } = this;
    return paragraphs.map((paragraph: any, key: number) => (
      <Paragraph
        key={key}
        lifted={paragraph.lifted}
        reversed={paragraph.reversed}
        variant={paragraph.variant}
        imageClickFunc={openImageView}
        title={paragraph.title}
        text={paragraph.text}
        image={paragraph.imageSource}
        imageAlt={paragraph.imageAlt}
        imageDescription={paragraph.imageDescription}
      />
    ))
  }

  fadeOut = (direction: string) => {
    const rootInner = document.getElementById("rootInner");
    if (rootInner) {
      //pushes content to left
      direction === "next" ?
        rootInner.style.transform = "translateX(-200px)"
        :
        rootInner.style.transform = "translateX(200px)";
      rootInner.style.opacity = "0";
    }
  }

  fadeIn = (direction: string) => {
    const project = this.projectRef.current;
    const title = this.titleRef.current;
    const banner = this.bannerRef.current;
    const rootInner = document.getElementById("rootInner");
    if (rootInner && banner && title && project) {
      project.style.scrollBehavior = "unset";
      //scrolls back up
      project.scrollTop = 0;
      project.style.scrollBehavior = "smooth";
      //image enlarges on scroll
      banner.style.transform =
        "translateY(-50%) scale(1)";
      //become invisible on scroll
      banner.style.opacity = "1";
      title.style.opacity = "1";
      rootInner.style.transition = "unset";
      direction === "next" ?
        rootInner.style.transform = "translateX(200px)"
        :
        rootInner.style.transform = "translateX(-200px)";
      setTimeout(() => {
        rootInner.style.transition = "inherit";
        rootInner.style.transform = "translateX(0)";
        rootInner.style.opacity = "1";
      }, 300);
    }
  }

  handleNextClick = () => {
    //enable loading animation
    const { switchProject } = this.props;
    switchProject("next", () => this.fadeOut("next"), () => this.fadeIn("next"));
  }

  handlePreviousClick = () => {
    //enable loading animation
    const { switchProject } = this.props;
    switchProject("previous", () => this.fadeOut("previous"), () => this.fadeIn("previous"));
  }

  render() {
    const { isOpen, data, banner, allIndexes } = this.props;
    const {
      variableHeaderVisible,
      imageViewOpen,
      imageViewData,
    } = this.state;
    const {
      handleClose,
      projectRef,
      titleRef,
      bannerRef,
      closeImageView,
      mapSkills,
      mapParagraphs,
      handleNextClick,
      handlePreviousClick,
    } = this;

    return (
      <Fragment>
        <div
          ref={projectRef}
          className={classnames(styles.root, { [styles.active]: isOpen })}
        >
          <div id={"rootInner"} className={classnames(styles.rootInner)}>
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
                <img ref={bannerRef} src={banner} alt={"background"} />
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
                      data.summary
                    }
                  />
                </div>
                <div className={classnames(styles.skills)}>
                  <Text
                    text={"Skills used"}
                    strong
                  />
                  <div>
                    {mapSkills()}
                  </div>
                </div>
                <div className={classnames(styles.year)}>
                  <Text
                    text={"Year"}
                    strong
                  />
                  <Text
                    text={data.year}
                  />
                </div>
              </div>
              {mapParagraphs()}
            </div>
            <footer className={classnames(styles.projectFooter)}>
              <div className={classnames(styles.imageContainer)}>
                <img src={banner} alt={"Footer background"} />
              </div>
              <div className={classnames(styles.haze)} />
              <div className={classnames(styles.footerInner)} >
                {
                  allIndexes.some(otherIndex => otherIndex < data.index) &&
                  (
                    <div className={classnames(styles.prevProject)} onClick={handlePreviousClick}>
                      <img src={backArrow} alt={"previous project"} />
                      <Text strong text={"Previous project"} />
                    </div>
                  )
                }
                <div className={classnames(styles.titleContainer)}>
                  <Text variant={"h2"} text={data.title} />
                </div>
                {
                  allIndexes.some(otherIndex => otherIndex > data.index) &&
                  (<div className={classnames(styles.nextProject)} onClick={handleNextClick}>
                    <Text strong text={"Next project"} />
                    <img src={nextArrow} alt={"previous project"} />
                  </div>)
                }
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
                  <Icon link={"mailto:k.v.helden96@hotmail.com"} icon={"mail"} />
                </div>
              </div>
            </footer>
          </div>
        </div>
        <ImageView closeView={closeImageView} open={imageViewOpen} data={{ image: imageViewData.image, alt: imageViewData.alt }} />
      </Fragment>
    );
  }
}

export default ProjectView;
