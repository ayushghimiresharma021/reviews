import React, { useState } from "react";
import {FaChevronLeft, FaChevronRight, FaQuoteLeft} from 'react-icons/fa';
import reviews from "./data";


const Divsion = () => {
    const [index,setIndex] = useState(0)
    const [{id,name,job,image,text}] = reviews[index]
    const checkNumber = (number) => {
        if (number>reviews.length-1){
            return  0;
        }
        else if (number<0){
            return reviews.length-1
        }
        return number 
    }
    const previous = () => {
        setIndex( (index) => {
            let num = index-1
            return checkNumber(num)
        })

    }
    const next = () => {
        setIndex( (index) => {
            let num1 = index+1
            return checkNumber(num1);
        })
    }
    const RandomNumber = () => {
        let random = Math.floor(Math.random*reviews.length)
        if (random===index){
                return random+1
        }
        setIndex(checkNumber(random)) ;
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name}></img>
                <span className="quote-icon">
                    <FaQuoteLeft />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p  className="job">{job}</p>
            <p  className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={previous}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={next}>
                    <FaChevronRight />
            </button>
            </div>
            <button className="random-btn" onClick={RandomNumber}>Surprise</button>
        </article>
    )
}
export default Divsion ;