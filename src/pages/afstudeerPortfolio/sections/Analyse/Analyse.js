import React, { PureComponent } from "react";
import styles from "./Analyse.module.css";
import { Text } from "../../../../components/elements";
import classnames from "classnames";

class Analyse extends PureComponent {
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
          <Text variant={"h1"} text={"Analyse"} />
          <div
            id={`${anchor}-gebruiksvriendelijkheid`}
            className={classnames(styles.articlePiece)}
          >
            <Text variant={"h5"} text={"Gebruiksvriendelijkheid"} />
            <div className={classnames(styles.articlePieceLarge)}>
              <Text
                variant={"p"}
                text={
                  "Om de gebruiksvriendelijkheid te verbeteren is er onderzoek verricht naar "
                }
              />
              <br />
              <ul>
                <li>
                  <Text
                    variant={"p"}
                    text={"De gebruiker van het CMS/dashboard"}
                  />
                </li>
                <li>
                  <Text
                    variant={"p"}
                    text={"Hoe de klant het CMS/dashboard gebruikt"}
                  />
                </li>
                <li>
                  <Text
                    variant={"p"}
                    text={
                      "Welke huidige functionaliteit aangepast of verwijdert moet worden"
                    }
                  />
                </li>
                <li>
                  <Text
                    variant={"p"}
                    text={"Welke functionaliteit het huidige dashboard mist"}
                  />
                </li>
                <li>
                  <Text variant={"p"} text={"Het gebruik van kleur"} />
                </li>
              </ul>
              <Text
                text={"In dit onderdeel wordt de volgende deelvraag behandeld:"}
              />
              <Text
                text={
                  "“Hoe kan de gebruiksvriendelijkheid van het CMS/dashboard verbeterd worden?”"
                }
              />
              <Text
                text={
                  "de conclusies worden getest en toegepast in de ontwikkelfase."
                }
              />
            </div>
            <div className={classnames(styles.articlePieceLarge)}>
                <Text text={"De gebruiker"} strong />
                <p>Er is gekozen om gebruik te maken van een <a href={""}>interview</a> (<strong>VELD</strong>) met een aantal Glamorous Goat klanten die momenteel gebruik maken van een CMS/dashboard. Dit is gedaan om erachter te komen wie zij als gebruiker zijn en wie er bij hun bedrijf nog meer gebruik maakt van het dashboard. Door een interview te houden is het mogelijk om niet alleen de gebruiker direct te spreken maar ook om nieuwe vragen te stellen en uitleg te geven bij onduidelijkheden</p>
                <Text text={"Omdat de communicatie manager van Eindhoven Airport de enige gebruiker is die reageerde na meerdere pogingen is er gekozen om een enquête (VELD) te sturen naar de resterende klanten. Een enquête geeft ook inzicht op de gebruiker maar hierbij is het niet mogelijk om extra vragen te stellen of uitleg te geven tijdens het uitvoeren hiervan. Ook is hiervoor gekozen omdat het de gebruiker vrijheid geeft in wanneer ze deze invullen waardoor er wellicht meer reacties gegeven worden. De enquête is ingevuld door de business development manager bij Zimmer Biomet."} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Analyse;
