import React, { PureComponent } from "react";
import styles from "./CardOverview.module.scss";
import classnames from "classnames";

import { Card } from "../../elements";

interface Props {
  cards: object[],
  cardFunc: () => void,
}

class CardOverview extends PureComponent <Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  formatCards = () => {
    const { cards, cardFunc } = this.props;

    return cards.map((card, index) => (
      <Card data={card} clickFunc={cardFunc} key={index} />
    ));
  };

  render() {
    const { formatCards } = this;

    return <div className={classnames(styles.root)}>{formatCards()}</div>;
  }
}

export default CardOverview;
