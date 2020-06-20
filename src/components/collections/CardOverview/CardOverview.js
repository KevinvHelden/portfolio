import React, { PureComponent } from "react";
import styles from "./CardOverview.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Card } from "../../elements";

class CardOverview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The data shown in the card
     */
    cards: PropTypes.array,
    /**
     * The function passed to every card
     */
    cardFunc: PropTypes.func,
  };

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
