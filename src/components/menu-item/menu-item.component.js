import React from "react";
import { withRouter } from "react-router-dom"
import "./minu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history,linkUrl, match }) => (

    <div className={`menu-item ${size ? size : ""}`} onClick={() => {
        // console.log(`history ${history} match.url ${match.url} "linkUrl"${linkUrl}`)
        history.push(`${match.url}${linkUrl}`)
    }} >

        <div className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }} />

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);