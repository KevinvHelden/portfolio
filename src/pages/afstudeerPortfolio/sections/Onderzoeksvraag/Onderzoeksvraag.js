import React, { PureComponent } from "react";
import styles from "./Onderzoeksvraag.module.css";
import { Text } from "../../../../components/elements";
import classnames from "classnames";

class Onderzoeksvraag extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { anchor } = this.props;
    return (
      <section id={`${anchor}`} className={classnames(styles.root)}>
        {/*-------------------------------------------ONDERZOEKSVRAAG-----------------------------------------------*/}
        <div className={classnames(styles.article)}>
          <Text variant={"h1"} text={"Onderzoeksvraag"} />
          {/*-------------------------------------------OPDRACHTOMSCHRIJVING-----------------------------------------------*/}
          <div
            id={`${anchor}-opdrachtomschrijving`}
            className={classnames(styles.articlePiece)}
          >
            <Text variant={"h5"} text={"Opdracht omschrijving"} />
            <div className={classnames(styles.articlePieceLarge)}>
              <Text
                variant={"p"}
                text={
                  "Glamorous Goat wilde graag de gebruiksvriendelijkheid van het CMS/dashboard onderzoeken en verbeteren. Daarnaast wilden ze het ontwerp- en ontwikkelproces verbeteren en versnellen. Het CMS/dashboard moet gemakkelijk visueel en functioneel toepasbaar zijn op al hun klanten. Om dit te realiseren stelden ze voor om:"
                }
              />
              <br />
              <ul>
                <li>
                  <Text
                    variant={"p"}
                    text={
                      "UX onderzoek te doen voor een betere gebruiksvriendelijkheid."
                    }
                  />
                </li>
                <li>
                  <Text
                    variant={"p"}
                    text={
                      "Ontwerpregels opstellen zoals in design systems om de consistentie van een onderbouwd ontwerp te waarborgen."
                    }
                  />
                </li>{" "}
                <li>
                  <Text
                    variant={"p"}
                    text={
                      "Gebruik te maken van componenten in zowel het ontwerp als de code. Hierdoor is het herbruikbaar zodat het product gemakkelijk schaalbaar is. Zij gebruiken React JS voor de huidige code te schrijven."
                    }
                  />
                </li>
              </ul>
              <br />
              <Text
                variant={"p"}
                text={
                  "Er is met de design lead en opdrachtgever gesproken over welke aspecten van het CMS/dashboard belangrijk zijn m.b.t. een oplevering gezien de opdracht te groot is om compleet uit te voeren. Hierbij is akkoord gegaan om een tabel voor het CMS gedeelte te maken omdat hierin de meeste verschillende data geplaatst kan worden."
                }
              />
            </div>
          </div>
          {/*-------------------------------------------HOOFDVRAAG-----------------------------------------------*/}
          <div
            id={`${anchor}-hoofdvraag`}
            className={classnames(styles.articlePiece)}
          >
            <Text variant={"h5"} text={"Hoofdvraag"} />
            <div className={classnames(styles.articlePieceLarge)}>
              <Text
                variant={"p"}
                text={
                  "Hoe kan Glamorous Goat zorgen voor een betere gebruiksvriendelijkheid en een consistent en schaalbaar ontwikkelproces bij het maken van dashboards die toepasbaar zijn op al hun huidige en toekomstige klanten?"
                }
              />
            </div>
          </div>
          {/*-------------------------------------------DEELVRAGEN-----------------------------------------------*/}
          <div
            id={`${anchor}-deelvragen`}
            className={classnames(styles.articlePiece)}
          >
            <Text variant={"h5"} text={"Deelvragen"} />
            <div className={classnames(styles.articlePieceLarge)}>
              <ul>
                <li>
                  <Text variant={"p"} text={"Hoe kan de gebruiksvriendelijkheid van het CMS/dashboard verbeterd worden?"} />
                </li>
                <li>
                  <Text variant={"p"} text={"Hoe kan een design system zorgen voor consistentie en schaalbaarheid in het ontwerpproces?"} />
                </li>
                <li>
                  <Text variant={"p"} text={"Hoe kan ontwerp software helpen bij het creëren van consistentie en schaalbaarheid?"} />
                </li>
                <li>
                  <Text variant={"p"} text={"Hoe kan het gebruik van React zorgen voor consistentie en schaalbaarheid in het ontwikkelproces?"} />
                </li>
                <li>
                  <Text variant={"p"} text={"Hoe kunnen ontwerp componenten toepasbaar zijn op alle huidige en toekomstige klanten?"} />
                </li>
                <li>
                  <Text variant={"p"} text={"Hoe kunnen React componenten toepasbaar zijn op alle huidige en toekomstige klanten?"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Onderzoeksvraag;
