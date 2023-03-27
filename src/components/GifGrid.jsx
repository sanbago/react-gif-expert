import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);
    
    return (
    <>
        <h3>{category}</h3>
        
        {
            isLoading && (<h2>Cargando...</h2>)   
        }
        
        <div className="card-grid">
            {/* Images.map... */}
            {images.map((image) => (
                <GifItem 
                    key={image.id}
                    {...image}//Pasa todas las propiedades de image como properties
                    // title={image.title}
                    // url={image.url}
                /> 
            ))}
        </div>
        

    
    
    </>
  )
}
