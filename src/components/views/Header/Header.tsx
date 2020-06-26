import React, { PureComponent, Fragment } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import RootRef from '@material-ui/core/RootRef';

import { Text, Icon } from "../../elements";
import { Dropdown } from "../../views";

import Logo from "../../../images/icons/logo_white.svg";

type Props = {
  activePage: string,
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

const intialState = Object.freeze({ activePage: "", activeOverlay: false, alt: false, })

class Header extends PureComponent<Props, State> {

  readonly state = intialState;

  private hamburgerRef = React.createRef<HTMLDivElement>();

  static getDerivedStateFromProps(props: Props) {
    return {
      activePage: props.activePage,
      alt: props.alt
    };
  }

  toggleHamburger = () => {
    const { activeOverlay } = this.state;
    this.setState({ activeOverlay: !activeOverlay });
  };

  render() {
    const { activePage, alt, activeOverlay } = this.state;
    const { navClickFunc, pageRefs } = this.props;
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
                  onClick={() => navClickFunc(pageRefs.home)}
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
                  onClick={() => navClickFunc(pageRefs.projects)}
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
                  onClick={() => navClickFunc(pageRefs.contact)}
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
