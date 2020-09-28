import React, { PureComponent } from "react";
import styles from "./Project.module.scss";
import classnames from "classnames";
import loadingImage from "../../../images/icons/noImage.svg";
import { Text } from "../";
import getImage from '../../../firebase/helpers/getImage';

type Props = {
  data: {
    title: string,
    tags: Array<string>,
    description: string,
    bannerSource: string,
  },
  alignment?: string,
  clickFunc: () => void,
}

class Project extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  formatTags = (tags: Array<string>) => {
    let tagsString: string = "";
    tags.map((tag: string) =>
      tagsString === "" ?
        tagsString = tagsString.concat(tag)
        :
        tagsString = tagsString.concat(` - ${tag}`)
    );
    return tagsString
  }

  render() {
    const { data, clickFunc, alignment } = this.props;
    const { formatTags } = this;
    console.log(getImage("projectBanners", "3rdYearInternshipSmall.jpeg"));

    return (
      <div className={classnames(styles.root, { [styles.left]: alignment === "left" })}>
        <div className={classnames(styles.title)}>
          <Text variant={"p"} text={formatTags(data.tags)} strong />
          <Text variant={"h2"} text={data.title} />
          <Text variant={"p"} text={data.description} />
          <Text clickFunc={clickFunc && clickFunc} variant={"p"} text={"Read more"} strong />
        </div>
        <div className={classnames(styles.imageView)}>
          <div className={classnames(styles.imageContainer)}>
            {data.bannerSource ?
              <img
                className={classnames(styles.image)}
                src={data.bannerSource}
                alt={"banner"}
                draggable={false}
              />
              :
              <img className={classnames(styles.imagePlaceholder)} src={loadingImage} alt={"imageNotLoaded"} draggable={false} />
            }
          </div>
          <div className={classnames(styles.outline)} />
        </div>

      </div>
    );
  }
}

export default Project;
