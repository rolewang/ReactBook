import StarRating from "./StarRating"
import { FaTrash } from "react-icons/fa";


export default function Color({id, title, color, rating, onRemove = f => f, onRate = f => f}) {
    

    return(
        <>
        <h1>{title}</h1>
        <button onClick={() => onRemove(id)}><FaTrash></FaTrash></button>
        <div className="colorDiv" style={{ height: 50, backgroundColor: color}}></div>
        <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)}></StarRating>
        </>
    )
}