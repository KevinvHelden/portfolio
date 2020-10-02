import React, { PureComponent } from "react";
import styles from "./Landing.module.scss";
import { Text } from "../../../../components/elements";
import classnames from "classnames";
import scroll from '../../../../images/icons/mouse.svg';
import cutOut from '../../../../images/cutout.png';


type Props = {
  anchor: string,
  reference: string,
}

class Landing extends PureComponent<Props> {
  render() {
    const { anchor, reference } = this.props;
    return (
      <section ref={reference} id={anchor} className={classnames(styles.root)}>
        <div className={classnames(styles.title)}>
          <div className={classnames(styles.textInner)}>
            <Text variant={"h1"} text={"Hi, I'm"} extraLarge />
            <Text variant={"h1"} text={"Kevin van Helden"} extraLarge />
            <Text
              variant={"p"}
              strong
              text={
                "Welcome to my portfolio, I’m a webdeveloper with a background in UX/UI design"
              }
            />
          </div>
          <div className={classnames(styles.cutoutBackground)}/>
          <img src={cutOut} alt={"Kevin cutout"} draggable={false} />
        </div>
        <div className={classnames(styles.scroll)}>
          <img src={scroll} alt={"scroll"} />
        </div>
      </section>
    );
  }
}

export default Landing;