import Recommendation from "../components/Recommendation";
import { sections } from "../data"

function Experience() {
  return (
    <section className="experience">
      <h2>
        Experience<span id="experience"></span>
      </h2>
      <span className="underline"></span>
      {sections.experience.map((item) => (
        <section className="tile">
          <aside>
            <a href={item.company.siteUrl}>
              <img
                src={item.company.logo.light}
                alt="limesharp"
                className="logo show-light"
              />
              <img
                src={item.company.logo.dark}
                alt="limesharp"
                className="logo show-dark"
              />
            </a>
            <div className="recommendations-desktop">
              <Recommendation recommendations={item.recommendations} />
            </div>
          </aside>
          <article>
            <h3>
              <b>{item.company.name},</b> {item.company.location} -{" "}
              {item.company.role}
            </h3>
            <div className="period">{item.company.period}</div>
            <section className="about">
              <h4>
                <span className="underline vertical"></span>
                About
              </h4>
              <p>{item.about.paragraph}</p>
              <ul>
                {item.about.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </section>
          </article>
          <div className="recommendations-mobile">
            <Recommendation recommendations={item.recommendations} />
          </div>
        </section>
      ))}
    </section>
  );
}

export default Experience;