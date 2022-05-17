import "./sidebar.scss"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Sidebar() {
    return (
        <div className='sidebar' id='sidebar'>
            <div className="links">
                <ul>
                    <li>
                        <a href='#home'>/home</a>
                    </li>
                    <li>
                        <a href='#about'>/about</a>
                    </li>
                    <li>
                        <a href='#creations'>/creations</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-logos" href="/">
                <a href="mailto:shelbyy.herrera@gmail.com">
                    <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </a>
                <a href="https://github.com/shelbystrawberry">
                    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/shelby-herrera">
                    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
            </div>
        </div>
    )
}
