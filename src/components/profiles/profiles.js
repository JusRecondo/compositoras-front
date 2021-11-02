import React, { useEffect, useState } from "react";
import './profiles.css';
import ProfileCard from "../profileCard/profileCard";

const Profiles = ( props ) => {

    const [ profiles, setProfiles ] = useState([]);
    const url = '/api/compositoras/';

    useEffect( () => {
        handleFetch( url );        
        //eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );

    const handleFetch = ( url ) => {
        fetch( url )
        .then( response => {
            if(!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        } )
        .then( data => {
            setProfiles( data );   
        } )
    }

/* 
    const fakeId = */ 
    return (
        <main className="profiles">
            <section>
                {profiles.length !== 0 ? 
                    profiles.map( ( profile ) => 
                        <ProfileCard profile={ profile } key={ profile['_id'] }/>
                    )   
                :    
                <article>
                    <h2>Cargando...</h2>
                </article> }
            </section>
        </main>
    );
}

export default Profiles;