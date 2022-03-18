import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div>
                    <a href="#home" className="tab">/home</a>
                </div>
                    <a href="#about" className="tab">/about</a>
                <div>
                    <a href="#creations" className="tab">/creations</a>
                </div>
            </div>

        </div>
    )
}
