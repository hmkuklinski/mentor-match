import { potentialMatches } from "../profileInfo";
import { useRef, useState} from 'react'; //for click scroll
import { ScrollMenu} from 'react-horizontal-scrolling-menu'; //for touchscreen scroll


export default function SwipeSection(){
    //get reference:
    const myRef = useRef(null);

    //track whether user is dragging or not:
    const [isDragging, setIsDragging]= useState(false);
    
    //for getting X starting location and for generating the scroll movement:
    const [startingX, setStartingX]= useState(0);
    const [scrollLeft, setScrollLeft]= useState(0);

    //user clicks the left mouse button:
    const onMouseDown= (e) =>{
        //toggle isDragging:
        setIsDragging(true);
        
        //get starting x position
        setStartingX(e.pageX- myRef.current.offsetLeft);
        setScrollLeft(myRef.current.scrollLeft);
    }

     //tracking where user moves mouse:
    const onMouseMove = (e) => {
        //if not dragging, return
        if (!isDragging){
            return;
        }
        //prevent default for image dragging
        //NOTE: had to add draggable property to img tag too
        e.preventDefault();

        //get current x position:
        const myX = e.pageX- myRef.current.offsetLeft;

        //scroll distance
        const newX = (myX-startingX) *1.5;
        myRef.current.scrollLeft = scrollLeft - newX;
    }


    return (
        <div className="swipe-container">
            
        </div>
    );
}



