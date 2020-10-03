import React, { PureComponent } from "react";
import styles from "./Projects.module.scss";
import classnames from "classnames";
import { ProjectOverview } from "../../../../components/collections";
import { ProjectView } from "../../../../components/views";
import db from '../../../../firebase/db';
import { getUrl, getDocs } from '../../../../firebase/helpers';

type Props = {
  anchor: string,
  reference: string,
}

type State = {
  projectIsOpen: boolean,
  projectId: number,
  projectViewData: any,
  projectViewBanner: string,
  projectViewParagraphs: any,
  allProjectIndexes: any,
}

class Projects extends PureComponent<Props, State> {

  state: State = {
    projectIsOpen: false,
    projectId: 0,
    projectViewData: {
      title: "",
      skills_used: [],
      subtitle: "",
      summary: "",
      year: "",
      index: 0,
    },
    projectViewBanner: "",
    projectViewParagraphs: [],
    allProjectIndexes: [],
  };

  openProject = (id: number) => {
    this.retrieveData(id);
  };

  closeProject = () => {
    this.setState({
      projectIsOpen: false,
    })
  }

  switchProject = (destination: any, fadeOut: (direction: string) => void, fadeIn: (direction: string) => void) => {
    const { retrieveData } = this;
    const currentProject = this.state.projectViewData.index;
    let destinationProject = 0;
    if (destination === "next") {
      destinationProject = currentProject + 1
    } else if (destination === "previous") {
      destinationProject = currentProject - 1
    }

    retrieveData(destinationProject, () => fadeOut(destination), () => fadeIn(destination), destination);
  }

  storeProjectIndexes = (indexes: number[]) => {
    const { allProjectIndexes } = this.state;
    if (allProjectIndexes.length === 0) {
      this.setState({
        allProjectIndexes: indexes
      })
    }
  }

  retrieveData = async (
    id: number,
    fadeOut?: (desination: string) => void,
    fadeIn?: (destination: string) => void,
    direction?: string) => {
    const { projectId } = this.state;
    //If a new project is opened
    if (projectId !== id) {
      //Gets the project with the given id
      await db.collection("projectOverviews").where("index", "==", id)
        .get()
        .then((querySnapshot: any) => {
          const doc = querySnapshot.docs[0];
          //Gets the banner of the project
          getUrl("projectViewBanners", doc.data().banner).then((src: string) => {
            getDocs(`projectOverviews/${doc.id}/paragraphs`).then((paragraphs) => {
              //fades projectview out if needed
              fadeOut && fadeOut(direction ? direction : "");
              setTimeout(() => {
                //sets all info in state after fade out
                this.setState({
                  projectViewBanner: src,
                  projectViewData: doc.data(),
                  projectViewParagraphs: paragraphs,
                  projectIsOpen: true,
                  projectId: id,
                  //fades projectview back if needed after the state has been set
                }, fadeIn && (() => { fadeIn(direction ? direction : "") }));
              }, 300);
            });
          });
        })
        .catch(function (error: any) {
          console.log("Error getting documents: ", error);
        });
      //Same project as before is opened so no calls to firebase
    } else {
      this.setState({
        projectIsOpen: true,
      });
    }
  }

  render() {
    const { anchor, reference } = this.props;
    const { openProject, closeProject, storeProjectIndexes, switchProject } = this;
    const { projectIsOpen, projectViewData, projectViewBanner, projectViewParagraphs, allProjectIndexes } = this.state;

    return (
      <section ref={reference} id={anchor} className={classnames(styles.root)}>
        <ProjectOverview projectFunc={openProject} loadFunc={storeProjectIndexes} />
        <ProjectView data={projectViewData} paragraphs={projectViewParagraphs} banner={projectViewBanner} allIndexes={allProjectIndexes} switchProject={switchProject} isOpen={projectIsOpen} closeProject={closeProject} />
      </section>
    );
  }
}

export default Projects;