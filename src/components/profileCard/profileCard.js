import React from "react";
import './profileCard.css';
import { Link } from 'react-router-dom'; 

const ProfileCard = ( props ) => {

    const { profile } = props;
    const { img, name, _id } = profile;

    return (
        <article className="profile-card">

            <Link to={'/'+ _id }>
                <img src={ img } alt={ name }/>
            </Link>
            <Link to={'/'+ _id }>
                <h3>{ profile.name }</h3>
            </Link>
        </article>
    );

}

export default ProfileCard;