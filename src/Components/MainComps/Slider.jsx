import { useEffect, useState, Children, cloneElement } from "react"

// import {slide1} from '../../img/slider/slide1.png'
// import {slide2} from '../../img/slider/slide2.png'
// import {slide3} from '../../img/slider/slide3.png'

// const img =[
//     <img key={slide1} src={slide1}/>,
//     <img key={slide2} src={slide2}/>,
//     <img key={slide3} src={slide3}/>,
// ]


export function Carousel({children}){
    
    const [pages, setPages]=useState([])
    useEffect(()=>{
        setPages(
           Children.map(children, (child)=>{
               return cloneElement(child,{
                   style: {
                     height:'100%',
                     maxWidth:'100%',
                     minWidth: '100%',

                   }
               })
           }) 
        )
    },[])

    return (
        <div className="main-container">
            {/* <button className="btn-fwd">&#60;</button> */}
            <div className="window">
                <div className="all-pages-container">
                    {pages}
                </div>
            </div>
            {/* <button className="btn-fwd">&#62;</button> */}
        </div>
    )
}