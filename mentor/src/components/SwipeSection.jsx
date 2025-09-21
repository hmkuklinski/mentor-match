import SwipeBottom from "./SwipeBottom";
import { useState, useEffect } from "react";
import { potentialMatches } from "../profileInfo";
import Layout from "./Layout";
export default function SwipeSection() {
  const [cards, setCards] = useState(potentialMatches);
  const [myMentors, setMyMentors] = useState([]);
  const [cardClicked, setCardClicked]= useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showMatchMessage, setShowMatchMessage]= useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

 

  const swipeThreshold = 100;

  // Drag handlers
  const onDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.pageX ?? e.touches[0].pageX;
    setStartX(pageX);
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const pageX = e.pageX ?? e.touches[0].pageX;
    setDeltaX(pageX - startX);
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (deltaX > swipeThreshold) swipeCard("like");
    else if (deltaX < -swipeThreshold) swipeCard("dislike");
    else setDeltaX(0);
  };

  const swipeCard = (action) => {
    if (cards.length === 0) return;
    setActiveButton(action);
    const [topCard, ...rest] = cards;
    if (action === "like") {
        setShowMatchMessage(true);
        setTimeout(() => {
            setShowMatchMessage(false);
        }, 2000);
        setMyMentors((prev) => [...prev, topCard]);
    }
        
    setCards(rest);
    setDeltaX(0);
    setTimeout(() => setActiveButton(null), 300);
  };

  const topCard = cards[0];
  const nextCard = cards[1];

  const toggleDisplay = () =>{
    setCardClicked((prev) => !prev);
  }

   useEffect(() => {
    setCardClicked(false);
    }, [topCard]);

  return (
    <Layout>
        {showMatchMessage && (
            <div className="connection-msg" style={{position:"absolute", top:"3%", right:"3%", zIndex:200000}}>
                <img src="/assets/men.png" alt="connection!" draggable={false} width="250px" height="80px"/>
            </div>
        )}
    <div style={{ width: 300, margin: "auto", textAlign: "center" }}>
      
      {/* Card area with arrows */}
      <div className="card-area" style={{ position: "relative", width: "100%", height: 400 }}>
        
        {/* Next card behind */}
        {nextCard && (
          <div
            className="mentor-card next-card"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              transform: "scale(0.95)",
              opacity: 0.8,
            }}
          >
            <img src={topCard.imgsrc} alt={topCard.name} draggable={false} />
            <h4>{topCard.name}</h4>
            <p>{topCard.title}</p>
            <p>{topCard.company}</p>
          </div>
        )}

        {/* Top card */}
       {topCard ? (
        <div
            className="mentor-card top-card"
            style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            transform: `translateX(${deltaX}px) rotate(${deltaX / 10}deg)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
            }}
                onMouseDown={onDragStart}
                onMouseMove={onDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                onTouchStart={onDragStart}
                onTouchMove={onDragMove}
                onTouchEnd={onDragEnd}
                
            >
                {cardClicked ? (
                    <>
                    <h4>{topCard.name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, illo voluptas quasi sunt et sapiente corporis obcaecati exercitationem consectetur accusantium. Et illo quo, autem reprehenderit molestias pariatur! Aut, eligendi doloremque?</p>
                    </>
                ):(<>
                    <img src={topCard.imgsrc} alt={topCard.name} draggable={false} />
                    <h4>{topCard.name}</h4>
                    <p>{topCard.title}</p>
                    <p>{topCard.company}</p>
                </>)}
            </div>
            ) : (
            <div
                style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#666"
                }}
            >
                <h3>That was all the mentors we had for right now. Check the "My Mentors" section to see who you matched with!🎉</h3>
            </div>
        )}


        {/* Arrows directly under the card area */}
        <div className="arrow-buttons" style={{
          position: "absolute",
          bottom: -50, // slightly below the cards
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          zIndex: 10
        }}>
            {nextCard && (
                <button className={`swipe-btn ${activeButton === "dislike" ? "dislike-active" : ""}`} onClick={() => swipeCard("dislike")}>
                <img src="/assets/icons/cross.png" alt="dislike" draggable={false} />
                </button>
            )}
            {nextCard && (<button onClick={() => toggleDisplay()}>
                <img src="/assets/icons/info.png" alt="info" draggable={false} />
            </button>)}
            {nextCard && (
            <button className={`swipe-btn ${activeButton === "like" ? "like-active" : ""}`}onClick={() => swipeCard("like")}>
              <img src="/assets/icons/heart.png" alt="like" draggable={false} />
            </button>
          )}
          
        </div>
      </div>
    </div></Layout>
  );
}
