import "./creations.scss";
import { creations } from "../../data";

export default function Portfolio() {
  return (
    <div className="creations" id='creations'>
        <div className="banner">
          /portfolio
        </div>
        <div className="container">
          {creations.map((d) => (
            <div className="whole-item">
              <a href={d.link} target="_blank">
              <div className="item">
                <img src={d.img} alt=""></img>
                <h3>{d.title}</h3>
              </div>
              </a>
              <span>{d.desc}</span>
            </div>
          ))}
        </div>
    </div>
  )
}
