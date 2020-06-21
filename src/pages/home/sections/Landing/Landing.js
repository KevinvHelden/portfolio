import React, { PureComponent } from "react";
import styles from "./Landing.module.css";
import { Text, Icon } from "../../../../components/elements";
import classnames from "classnames";

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { anchor } = this.props;
    return (
      <section id={anchor} className={classnames(styles.root)}>
        <div className={classnames(styles.title)}>
          <div className={classnames(styles.outerRing)}>
            <div className={classnames(styles.outerRingTwo)}>
              <div className={classnames(styles.innerRingTwo)}>
                <div className={classnames(styles.innerRing)}>
                  <div className={classnames(styles.image)} />
                </div>
              </div>
            </div>
          </div>

          <Text variant={"h1"} text={"Kevin"} extraLarge />
          <Text variant={"h1"} text={"van Helden"} extraLarge />
          <Text
            variant={"p"}
            strong
            text={
              "Welcome to my portfolio, I’m a webdeveloper with a background in UX/UI design"
            }
          />
        </div>
        <div className={classnames(styles.scroll)}>
          <Icon icon={"mouse"} />
        </div>
      </section>
    );
  }
}

export default Landing;