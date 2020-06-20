import React, { PureComponent } from "react";
import styles from "./Intro.module.css";
import { Text } from "../../../../components/elements";
import classnames from "classnames";

class Intro extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { anchor } = this.props;
    return (
      <section id={`${anchor}`} className={classnames(styles.root)}>
        {/*-------------------------------------------INTRO-----------------------------------------------*/}
        <div className={classnames(styles.article)}>
          <Text variant={"h1"} text={"Intro"} />
          <div
            id={`${anchor}-glamorousgoat`}
            className={classnames(styles.articlePiece)}
          >
            <Text variant={"h5"} text={"Glamorous Goat"} />
            <div className={classnames(styles.articlePieceLarge)}>
              <Text
                variant={"p"}
                text={
                  "Mijn afstudeeropdracht is gemaakt voor Glamorous Goat. Dit is een native iOS en Android ontwikkelaar die gevestigd is in Eindhoven. Om de mobiele applicaties te beheren en de data hiervan in te zien leveren ze een CMS/dashboard, dit is een web applicatie die geschreven wordt met React JS. Een aantal klanten waarvoor zij dit CMS/dashboard gemaakt hebben zijn Eindhoven Airport, Zimmer Biomet, Philips DPS."
                }
              />
              <br />
              <Text
                variant={"p"}
                text={
                  "Glamorous Goat streeft om de beste kwaliteit app te leveren binnen de branche. Om dit te bereiken hebben ze in house mobiele en web developers samen met een designer. Momenteel hebben zij het idee dat het dashboard wat ze leveren nog niet aan hun standaard van beste kwaliteit voldoet. Een reden hiervan kan zijn omdat ze voorheen erg technisch gefocust waren en vanaf oktober pas een designer in dienst genomen hebben. Hierdoor is er nog geen UX onderzoek gedaan om de gebruiksvriendelijkheid te testen of te verbeteren. Om deze reden kan het zijn dat hier vooruitgang in te maken is. De huidige dashboards worden gemaakt met standaard templates en Google componenten. Het gebruik hiervan limiteert de flexibiliteit van de componenten waardoor er geen maatwerk mogelijk is."
                }
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
