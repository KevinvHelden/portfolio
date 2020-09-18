import React, { PureComponent, Fragment } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import RootRef from '@material-ui/core/RootRef';
import { Text, Icon } from "../../elements";

import Logo from "../../../images/icons/logo_white.svg";

type Props = {
  activePage: () => string,
  alt: boolean,
  navClickFunc: (ref: string) => void,
  pageRefs: {
    home: string,
    projects: string,
    contact: string,
  },
}

type State = {
  activePage: string,
  activeOverlay: boolean,
  alt: boolean,
}

class Header extends PureComponent<Props, State> {

  state:State = {
    activePage: "home",
    activeOverlay: false,
    alt: false,
  };

  private hamburgerRef = React.createRef<HTMLDivElement>();

  static getDerivedStateFromProps(props: Props) {
    return {
      activePage: props.activePage(),
      alt: props.alt
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateActivePage);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateActivePage);
  }

  updateActivePage = () => {
    this.setState({
      activePage: this.props.activePage()
    })
  }

  toggleHamburger = () => {
    const { activeOverlay } = this.state;
    this.setState({ activeOverlay: !activeOverlay });
  };

  handleOverlayHome = () => {
    const { navClickFunc, pageRefs } = this.props;
    this.toggleHamburger();
    navClickFunc(pageRefs.home);
  }

  handleOverlayProjects = () => {
    const { navClickFunc, pageRefs } = this.props;
    this.toggleHamburger();
    navClickFunc(pageRefs.projects);
  }

  handleOverlayContact = () => {
    const { navClickFunc, pageRefs } = this.props;
    this.toggleHamburger();
    navClickFunc(pageRefs.contact);
  }

  render() {
    const { activePage, alt, activeOverlay } = this.state;
    const { navClickFunc, pageRefs } = this.props;
    const { toggleHamburger, handleOverlayHome, handleOverlayProjects, handleOverlayContact } = this;
    return (
      <Fragment>
        <div
          className={classnames(styles.overlay, {
            [styles.active]: activeOverlay,
          })}
        >
          <div className={classnames({ [styles.active]: activePage === "home" })}>
            <Text variant={"h6"} clickFunc={handleOverlayHome} text={"About"} strong />
          </div>
          <div className={classnames({ [styles.active]: activePage === "projects" })}>
            <Text variant={"h6"} clickFunc={handleOverlayProjects} text={"Projects"} strong />
          </div>
          <div className={classnames({ [styles.active]: activePage === "contact" })}>
            <Text variant={"h6"} clickFunc={handleOverlayContact} text={"Contact"} strong />
          </div>
        </div>

        <div className={classnames(styles.root)}>
          <div className={classnames(styles.side)}>
            <a
              className={classnames(styles.logo)}
              href={"/"}
            >
              <img src={Logo} alt={"Logo"} />
            </a>
          </div>
          {!alt && (
            <div className={classnames(styles.navigation)}>
              <div className={classnames(styles.navItems)}>
                <div
                  onClick={() => navClickFunc(pageRefs.home)}
                  className={classnames(styles.navItem, {
                    [styles.active]: activePage === "home",
                  })}
                >
                  <Text text={"About"} strong />
                </div>
                <div
                  onClick={() => navClickFunc(pageRefs.projects)}
                  className={classnames(styles.navItem, {
                    [styles.active]: activePage === "projects",
                  })}
                >
                  <Text text={"Projects"} strong />
                </div>
                <div
                  onClick={() => navClickFunc(pageRefs.contact)}
                  className={classnames(styles.navItem, {
                    [styles.active]: activePage === "contact",
                  })}
                >
                  <Text text={"Contact"} strong />
                </div>
              </div>
            </div>
          )}

          <div className={classnames(styles.side)}>
            {!alt && (
              <div className={classnames(styles.social)}>
                <a
                  href={
                    "https://www.linkedin.com/in/kevin-van-helden-671726141/"
                  }
                >
                  <Icon icon={"linkedIn"} />
                </a>
              </div>
            )}
            {!alt && (
              <div className={styles.hamburger}>
                <RootRef rootRef={this.hamburgerRef}>
                  <Icon
                    icon={activeOverlay ? "arrowRight" : "hamburgerClosed"}
                    clickFunc={toggleHamburger}
                  />
                </RootRef>

              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
