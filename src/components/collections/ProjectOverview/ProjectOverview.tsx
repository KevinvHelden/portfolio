import React, { PureComponent } from "react";
import styles from "./ProjectOverview.module.scss";
import classnames from "classnames";

import { Project } from "../../elements";

type Props = {
  projects: {
    title: string,
    tags: string,
    description: string,
    image: {
      src: string,
      alt: string,
    }
  }[],
  projectFunc: () => void,
}

class ProjectOverview extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  isOdd = (num: number) => {
    return num % 2;
  }

  formatCards = () => {
    const { projects, projectFunc } = this.props;

    return projects.map((project, index) => (
      <Project
        data={{
          title: project.title,
          tags: project.tags,
          description: project.description,
          image: {
            src: project.image.src,
            alt: project.image.alt
          }
        }
        }
        alignment={this.isOdd(index) ? "left" : "right"}
        clickFunc={projectFunc} key={index} />
    ));
  };

  render() {
    const { formatCards } = this;

    return <div className={classnames(styles.root)}>{formatCards()}</div>;
  }
}

export default ProjectOverview;
