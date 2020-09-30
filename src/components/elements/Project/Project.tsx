import React, { PureComponent } from "react";
import styles from "./Project.module.scss";
import classnames from "classnames";
import loadingImage from "../../../images/icons/noImage.svg";
import { Text } from "../";
import { getUrl } from '../../../firebase/helpers';
const firebase = require("firebase");

type Props = {
  data: {
    title: string,
    tags: Array<string>,
    description: string,
    bannerSource: string,
    index: number,
  },
  alignment?: string,
  clickFunc: (id: number) => void,
}

type State = {
  bannerSource: string,
}

class Project extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { bannerSource: "" };
  }

  componentDidMount() {
    this.storeBanner("projectBanners", this.props.data.bannerSource);
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

  storeBanner = (folder: string, image: string) => {
    getUrl(folder, image).then(src => this.setState({
      bannerSource: src
    }));
  }

  handleClick = () => {
    const { clickFunc, data } = this.props;
    clickFunc && clickFunc(data.index);
  }

  render() {
    const { data, alignment } = this.props;
    const { formatTags, handleClick } = this;
    const { bannerSource } = this.state;

    return (
      <div className={classnames(styles.root, { [styles.left]: alignment === "left" })}>
        <div className={classnames(styles.title)}>
          <Text variant={"p"} text={formatTags(data.tags)} strong />
          <Text variant={"h2"} text={data.title} />
          <Text variant={"p"} text={data.description} />
          <Text clickFunc={handleClick} variant={"p"} text={"Read more"} strong />
        </div>
        <div className={classnames(styles.imageView)}>
          <div className={classnames(styles.imageContainer)}>
            {bannerSource ?
              <img
                className={classnames(styles.image)}
                src={bannerSource ? bannerSource : ""}
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
