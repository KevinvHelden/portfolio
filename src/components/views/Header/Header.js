import React, { PureComponent, Fragment } from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Text, Icon } from "../../elements";
import { Dropdown } from "../../views";

import Logo from "../../../images/icons/logo_white.svg";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePage: props.activePage,
      activeOverlay: false,
    };
    this.homeRef = React.createRef();
    this.projectRef = React.createRef();
    this.contactRef = React.createRef();
    this.hamburgerRef = React.createRef();
  }

  static propTypes = {
    activePage: PropTypes.string.isRequired,
    alt: PropTypes.bool,
  };

  static getDerivedStateFromProps(nextProps) {
    return { activePage: nextProps.activePage, alt: nextProps.alt };
  }

  componentDidMount() {
    const { alt } = this.props;
    !alt &&
      this.homeRef.current.addEventListener("click", this.handleHomeClick);
    !alt &&
      this.projectRef.current.addEventListener(
        "click",
        this.handleProjectsClick
      );
    !alt &&
      this.contactRef.current.addEventListener(
        "click",
        this.handleContactClick
      );
  }

  componentWillUnmount() {
    const { alt } = this.props;
    !alt &&
      this.homeRef.current.removeEventListener("click", this.handleHomeClick);
    !alt &&
      this.projectRef.current.removeEventListener(
        "click",
        this.handleProjectsClick
      );
    !alt &&
      this.contactRef.current.removeEventListener(
        "click",
        this.handleContactClick
      );
  }

  scrollFunc = (id) => {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ block: "center" });
  };

  handleHomeClick = () => {
    this.scrollFunc("#home");
  };

  handleProjectsClick = () => {
    this.scrollFunc("#projects");
  };

  handleContactClick = () => {
    this.scrollFunc("#contact");
  };

  toggleHamburger = () => {
    const { activeOverlay } = this.state;
    this.setState({ activeOverlay: !activeOverlay });
  };

  render() {
    const { activePage, alt, activeOverlay } = this.state;
    const { toggleHamburger } = this;

    return (
      <Fragment>
        {alt ? (
          <div
            className={classnames(styles.overlay, {
              [styles.active]: activeOverlay,
            })}
          >
            <div className={classnames(styles.overlayInner)}>
              <Dropdown
                large
                title={"Intro"}
                content={["Glamorous Goat"]}
                clickFunc={toggleHamburger}
              />
              <Dropdown
                large
                title={"Onderzoeksvraag"}
                content={["Opdracht omschrijving", "Hoofdvraag", "Deelvragen"]}
                clickFunc={toggleHamburger}
              />
              <Dropdown
                large
                title={"Analyse"}
                content={[
                  "Gebruiksvriendelijkheid",
                  "Consistent en schaalbaar ontwerpen",
                  "Consistent en schaalbaar ontwikkelen",
                  "Toepasbaarheid op alle huidige en toekomstige klanten",
                ]}
                clickFunc={toggleHamburger}
              />
              <Dropdown
                large
                title={"Ontwikkelen en ontwerpen"}
                content={[
                  "Gebruiksvriendelijkheid",
                  "Consistent en schaalbaar ontwerpen",
                  "Consistent en schaalbaar ontwikkelen",
                  "Toepasbaarheid op alle huidige en toekomstige klanten",
                ]}
                clickFunc={toggleHamburger}
              />
              <Dropdown
                large
                title={"Conclusie"}
                content={[
                  "Onderzoeksvraag",
                  "Meerwaarde Glamorous Goat",
                  "Advies",
                ]}
                clickFunc={toggleHamburger}
              />
            </div>
          </div>
        ) : (
          <div
            className={classnames(styles.overlay, {
              [styles.active]: activeOverlay,
            })}
          >
            <Text text={"Normal overlay"} strong />
          </div>
        )}

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
                  ref={this.homeRef}
                  className={classnames(styles.navItem, {
                    [styles.active]: activePage === "home",
                  })}
                >
                  <Icon
                    icon={activePage === "home" ? "home" : "homeDeselected"}
                  />
                  <Text text={"Home"} strong />
                </div>
                <div
                  ref={this.projectRef}
                  className={classnames(styles.navItem, {
                    [styles.active]: activePage === "projects",
                  })}
                >
                  <Icon
                    icon={
                      activePage === "projects"
                        ? "projects"
                        : "projectsDeselected"
                    }
                  />
                  <Text text={"Projects"} strong />
                </div>
                <div
                  ref={this.contactRef}
                  className={classnames(styles.navItem, {
                    [styles.active]: activePage === "contact",
                  })}
                >
                  <Icon
                    icon={activePage === "contact" ? "mail" : "mailDeselected"}
                  />
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
                  <Icon icon={"linkedIn"} alt={"LinkedIn"} />
                </a>
              </div>
            )}
            {!alt && (
              <div className={styles.hamburger}>
                <Icon
                  reference={this.hamburgerRef}
                  icon={activeOverlay ? "arrowRight" : "hamburgerClosed"}
                  clickFunc={toggleHamburger}
                />
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
