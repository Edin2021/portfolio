import demoLinkIcon from "../images/illustarions/demo-link-icon.svg";
import { FaGithub } from "react-icons/fa";

function Project({ project }) {
  const { image, techUsed, name, info, repo, demo } = project;
  return (
    <article className="project">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h4 className="tech-used">
          <span>{techUsed}</span>
          <a href={repo} target="_blank" rel="noreferrer" className="repo-link">
            <FaGithub />
            <span className="visually-hidden">Github</span>
          </a>
        </h4>
        <h3 className="name">{name}</h3>
        <p className="info">{info}</p>
        <a className="demo-link" href={demo} target="_blank" rel="noreferrer">
          Live Demo <img src={demoLinkIcon} alt="demo link icon" />
        </a>
      </div>
    </article>
  );
}

export default Project;
