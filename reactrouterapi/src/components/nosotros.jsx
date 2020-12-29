
import React, { useState, useEffect, Fragment } from 'react';

import { Link } from 'react-router-dom';

const Nosotros = () => {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        obtenerDatos()
    }, [])
    const obtenerDatos = async () => {
        const data = await fetch('http://jsonplaceholder.typicode.com/posts')
        const posts = await data.json()
        setLista(posts)
    }
    

    return (
        <Fragment>
            <h1 className="text-center">Noticias</h1>
            <div className="row">
                {   lista.map((item,id)=>(

                    <div className="col-10 col-sm-10 col-md-4 col-lg-3 p-2" key={item.id}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body}</p>
                                <Link to={`/nosotros/${item.id}`}>
                                <button className="btn btn-dark">Ver Mas</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                  )) }
                  
            </div>
        </Fragment>
    );
}
export default Nosotros;