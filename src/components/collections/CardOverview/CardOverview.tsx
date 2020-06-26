import React, { PureComponent } from "react";
import styles from "./CardOverview.module.scss";
import classnames from "classnames";

import { Card } from "../../elements";

interface Props {
  cards: {
    title: string,
    subtitle: string,
    image: {
      src: string,
      alt: string,
    }
  }[],
  cardFunc: () => void,
}

class CardOverview extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  formatCards = () => {
    const { cards, cardFunc } = this.props;

    return cards.map((card, index) => (
      <Card
        data={{
          title: card.title,
          subtitle: card.subtitle,
          image: {
            src: card.image.src,
            alt: card.image.alt
          }
        }
        }
        clickFunc={cardFunc} key={index} />
    ));
  };

  render() {
    const { formatCards } = this;

    return <div className={classnames(styles.root)}>{formatCards()}</div>;
  }
}

export default CardOverview;
