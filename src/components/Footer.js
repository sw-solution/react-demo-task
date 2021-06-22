import { Fragment } from 'react';
import '../assets/css/homepage/footer.css';

export default function Footer({ footerData }) {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-bg-panel f f-between">
                    <div className="footer-bg-left">
                        <img src={footerData.footer_left_bg1} srcSet={`${footerData.footer_left_bg2} 2x, ${footerData.footer_left_bg3} 3x`} />
                        <div className="crown-panel f f-center-y">
                            <img src={footerData.crown_icon}></img>
                            <p>{footerData.crown_panel_content}</p>
                        </div>
                    </div>
                    <div className="footer-bg-right">
                        <div className="diamond-panel f f-center-y">
                            <p>{footerData.diamond_panel_content}</p>
                            <img src={footerData.diamond_icon}></img>
                        </div>
                        <img src={footerData.footer_right_bg1} srcSet={`${footerData.footer_right_bg2} 2x, ${footerData.footer_right_bg3} 3x`} />
                    </div>
                </div>
                <div className="company-logos">
                    <div className="top-panel f f-center-y">
                        {
                            footerData.companyLogos1.map(item => {
                                return (
                                    <div className="company-log-top-panel">
                                        <img src={item.logo}></img>
                                        {
                                            item.badge != 0 &&
                                            <span className="company-badge f f-center-x f-center-y">{item.badge}</span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="bottom-panel f f-center-y f-end-x">
                        {
                            footerData.companyLogos2.map(item => {
                                return (
                                    <div className="company-log-top-panel">
                                        <img src={item.logo}></img>
                                        {
                                            item.badge != 0 &&
                                            <span className="company-badge f f-center-x f-center-y">{item.badge}</span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="about-panel f f-between f-center-y row">
                    {
                        footerData.aboutContent.map(item => {
                            return (
                                <div className="about-content f f-column col-lg-4 col-12">
                                    <h1 className="title">{item.aboutTitle}</h1>
                                    <h2 className="medium-title">{item.mediumTitle}</h2>
                                    <p className="about-discription">{item.description}</p>
                                </div>
                            )
                        })
                    }
                    <img src={footerData.about_bg1} srcSet={`${footerData.about_bg1} 2x, ${footerData.about_bg1} 3x`} className="about-bg" />
                </div>
            </div>
        </Fragment>
    )
}