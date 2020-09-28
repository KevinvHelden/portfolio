import React, { PureComponent } from "react";
import styles from "./ProjectOverview.module.scss";
import classnames from "classnames";
import { Project } from "../../elements";

type Props = {
  projects: [{
    title: string,
    description: string,
    tags: Array<string>,
    bannerSource: string,
  }],
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

  compare = (a: any, b: any) => {
    if (a.index < b.index) {
      return -1;
    }
    if (a.index > b.index) {
      return 1;
    }
    return 0;
  }

  sortByIndex = (items: any) => {
    return items.sort(this.compare);
  }

  formatCards = () => {
    const { projects, projectFunc } = this.props;
    const { sortByIndex } = this;
    const sortedProjects = sortByIndex(projects);
    if (projects) {
      return sortedProjects.map((project: any, index: number) => (
        <Project
          data={project}
          alignment={this.isOdd(index) ? "left" : "right"}
          clickFunc={projectFunc}
          key={index}
        />
      ))
    };
  };

  render() {
    const { formatCards } = this;
    return <div className={classnames(styles.root)}>{formatCards()}</div>;
  }
}

export default ProjectOverview;
