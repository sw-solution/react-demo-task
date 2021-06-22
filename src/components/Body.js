import { Fragment } from 'react';
import '../assets/css/homepage/body.css';

export default function Body({ bodyData }) {
    return (
        <Fragment>
            <div className="background-panel">
                <img src={bodyData.bgx1} srcSet={`${bodyData.bgx2} 2x, ${bodyData.bgx3} 3x`} className="bg-top-left" />
                <div className="bg-top-right f f-end-y">
                    <img src={bodyData.spray1} srcSet={`${bodyData.spray2} 2x, ${bodyData.spray3} 3x`} className="bg-spray" />
                    <img src={bodyData.bgx1_topRight} srcSet={`${bodyData.bgx2_topRight} 2x, ${bodyData.bgx3_topRight} 3x`} className="bg-top-right_right" />
                </div>
            </div>
            <div className="body-content f f-between row">
                <div className="body-content-left f f-column col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="boby-content-title-panel row">
                        {
                            bodyData.title.map(item => {
                                return (
                                    <p className="body-title col-lg-12 col-md-6 col-sm-12">{item.top}<p className="body-title_bottom">{item.bottom}</p></p>
                                )
                            })
                        }
                    </div>
                    <p className="body-content-text">{bodyData.contentText}</p>
                    <div className="btn-panel row">
                        <div className=" col-sm-6 col-xs-6 col-12">
                            <button className="join-btn">{bodyData.buttonText}</button>
                        </div>
                        <div className="col-sm-6 col-xs-6 col-12">
                            <div className="player-pad f f-center-y">
                                <img src={bodyData.oval1} srcSet={`${bodyData.oval2} 2x, ${bodyData.oval3} 3x`} className="player-avatar-oval" />
                                <div className="player-pad-content">
                                    <p>{bodyData.player_pad_content1}</p>
                                    <p>{bodyData.player_pad_content2}</p>
                                </div>
                            </div>
                            <p className="bottom-content">{bodyData.bottom_content}</p>
                        </div>
                    </div>
                </div>
                <div className="body-content-right col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12">
                    <img src={bodyData.playCard1} srcSet={`${bodyData.playCard2} 2x, ${bodyData.playCard3} 3x`} className="player-cards-img" />
                </div>
            </div>
        </Fragment>
    )
}