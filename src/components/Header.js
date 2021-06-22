import '../assets/css/homepage/header.css';

export default function Header({ headerData }) {
    return (
        <header className="header-bar">
            <div className="header-banner f f-center-y">
                <div className="banner-text-panel">
                    <span className="banner-text">{headerData.bannerText1}</span>
                    <span className="banner-text">{headerData.bannerText2}</span>
                    <span className="banner-text">{headerData.bannerText3}</span>
                </div>
                <div className="banner-text-panel">
                    <span className="banner-text">{headerData.bannerText1}</span>
                    <span className="banner-text">{headerData.bannerText2}</span>
                    <span className="banner-text">{headerData.bannerText3}</span>
                </div>
            </div>
            <div className="header-nav-bar f f-start-y f-between">
                <img src={headerData.logo} className="logo-img"  alt=""></img>
                <nav className="nav-bar f f-start-y">
                    {
                        headerData.navs.map((item) => {
                            return (
                                <a className="nav-bar-item" href={item.path}>
                                    {item.nav}
                                    {
                                        item.badge &&
                                        <span className="nav-badge">{item.badge}</span>
                                    }
                                </a>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
    )
}