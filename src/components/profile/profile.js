import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './profile.css';

const Profile = ( props ) => {

    const [ profile, setProfile ] = useState({});

    const { id } = useParams();

    const url = '/api/compositoras/' + id;

    const { setHeading } = props;

    useEffect( () => { 
        fetch( url )
        .then( response => {
            if(!response.ok) {
                throw Error(response.status);
            }
            return response.json();
        } )
        .then( data => {
            setProfile( data ); 
            let heading = `${ data.name } (${ data.years })`;
            setHeading( heading );   
        } )      
        //eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );

    return (
        <>
        { profile.name ? 
        <main className="profile">
            <section className="info">
                <p>{ profile.info } </p>
                <figure>
                    <img src={ profile.img } alt={ `Foto de ${ profile.name }` }/>
                </figure>
            </section> 
            <section className="media">
               <iframe src={ profile.url.replace('/watch?v=', '/embed/') } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
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