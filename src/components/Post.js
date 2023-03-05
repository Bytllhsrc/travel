import React from "react"
import "./styles/Post.css"
import icon from "./images/pinicon.png"


export default function Post(props) {

    return (
        <>
            <div>
                <div className="cities">


                    <img src={props.data.imageUrl} alt="" className="cities_img" />

                    <div className="cities_text">

                        <img src={icon} className="pin_icon" />


                        <span className="location">{props.data.location}</span>

                        <span >
                            <a href={props.data.googleMapsUrl} target="_blank" className="view_maps_link"   > View on maps</a>
                        </span>
                        <h1> {props.data.title} </h1>
                        <h4> {props.data.startDate + " - " + props.data.endDate} </h4>
                        <p className="cities_paragraph" > {props.data.description} </p>

                    </div>


                </div>
                <div class="horizontal-line"></div>
            </div>
        </>
    )
}