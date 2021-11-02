import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './profile.css';

const Profile = () => {

    const [ profile, setProfile ] = useState({});

    const { id } = useParams();

    const url = '/api/compositoras/' + id;

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
            setProfile( data );    
        } )
    }


    return (
        <>
        { profile.name ? 
        <main className="profile">
            <h2>{ profile.name }</h2>      
            <h3>{ profile.years }</h3>  
            <section className="info">
                <p>{ profile.info } </p>
                <figure>
                    <img src={ profile.img } alt={ `Foto de ${ profile.name }` }/>
                </figure>
            </section> 
            <section className="media">
               <iframe width="560" height="315" src={ profile.url.replace('/watch?v=', '/embed/') } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </section>
        </main>
        :
        <main>
            <h2>Cargando...</h2>
        </main>
        }
        </>
    );
}

export default Profile;