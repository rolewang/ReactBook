import { FaStar } from "react-icons/fa"

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f}) {
    // const createArray = (length) => [...Array(length)];
    const createArray = function (length) {
        return [...Array(length)]
    }
    const Star = ({ selected = false, onSelect = f => f }) =>( // f => f douse nothing except stops react from throwing errors
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>)
        
    return(
        <>
        {createArray(totalStars).map((n, i)=> (
            <Star 
              key={i}
              selected={selectedStars > i}
              onSelect={() => onRate(i + 1)}
              />
        ))}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
        </>
    )
    
}