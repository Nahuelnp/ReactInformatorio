
import React, { useState, useEffect, Fragment } from 'react';

const Inicio = () => {
    return (

        <Fragment>
            <h1 className="text-center">Inicio</h1>
            <div className="row justify-content-center m-4">
                <div className="col-10 col-md-4 col-sm-10 col-lg-4 col-xl-4 bg-prymary">
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing </h3>
                    <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim expedita similique dicta ipsum sunt. Quaerat autem dolores repudiandae officia placeat asperiores iure deserunt facilis, modi accusamus nemo culpa neque?
                </p>
                </div>
                <div className="col-10 col-md-8 col-sm-8 col-lg-8  col-xl-8 text-center">
                    <img src="http://placeimg.com/640/380/any" alt="" className="img-fluid" /></div>
            </div>
            <div className="row justify-content-center m-4">
                <div className="col-10 col-md-8 col-sm-8 col-lg-8  col-xl-7    text-center">
                    <img src="http://placekitten.com/g/640/380" alt="" className="img-fluid" /></div>
            <div className="col-10 col-md-4 col-sm-8 col-lg-4 col-xl-4 bg-prymary">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ullam harum hic adipisci </h3>
                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim expedita similique dicta ipsum sunt. Quaerat autem dolores repudiandae officia placeat asperiores iure deserunt facilis, modi accusamus nemo culpa neque?
                </p>
            </div>
            </div>

        </Fragment>
    );
}

export default Inicio;