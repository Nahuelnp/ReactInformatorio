import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Users = () => {



    const { id } = useParams()


    const [posteos, setPosteos] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        obtenerDatos();
        obtenerImagenes();
        obtenerComentarios();
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        const posts = await data.json()
        setPosteos(posts)
    };


    const obtenerImagenes = async () => {
        const data = await fetch(`http://jsonplaceholder.typicode.com/photos/${id}`)
        const photo = await data.json()
        setImagenes(photo)
    }
    const obtenerComentarios = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const comment = await data.json()
        setComentarios(comment)
    }

    return (
        <Fragment>

<Link to={`/nosotros/`}>
                                
            <button className="btn btn-dark mt-3" >
                Back
        </button>
                            </Link>
            <div className="text-center">
                <h3>{posteos.title}</h3>
                <img src={imagenes.url} alt="" className="img-fluid m-5" />
                <p>{posteos.body}</p>
            </div>
            <h3>Comments</h3>
            <div className="list-group p-4">
                {comentarios.map((item, id) => (
                    <div key={item.id}>
                        <div className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.name}</h5>
                            </div>
                            <p className="mb-1">{item.body}</p>
                            <small>{item.email}</small>
                        </div>
                    </div>
                ))}
            </div>

        </Fragment>
    );
}

export default Users;