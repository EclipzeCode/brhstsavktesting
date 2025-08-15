import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import "./Stack.css";

const Stack = ({
  cardsData = [],
  cardDimensions = { width: 300, height: 200 },
  sensitivity = 150,
  randomRotation = true,
  sendToBackOnClick = true,
  className = "",
}) => {
  const [draggedCard, setDraggedCard] = useState(null);
  const [cardOrder, setCardOrder] = useState(
    cardsData.map((_, index) => index)
  );

  const generateRandomRotation = useCallback(() => {
    return randomRotation ? Math.random() * 10 - 5 : 0;
  }, [randomRotation]);

  const handleCardClick = useCallback(
    (clickedIndex) => {
      if (!sendToBackOnClick) return;

      setCardOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        const cardIndex = newOrder.indexOf(clickedIndex);
        if (cardIndex > -1) {
          newOrder.splice(cardIndex, 1);
          newOrder.unshift(clickedIndex);
        }
        return newOrder;
      });
    },
    [sendToBackOnClick]
  );

  return (
    <div className={`stack-container ${className}`}>
      <div
        className="stack-cards"
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
        }}
      >
        {cardOrder.map((cardIndex, stackIndex) => {
          const card = cardsData[cardIndex];
          if (!card) return null;

          return (
            <motion.div
              key={card.id || cardIndex}
              className="stack-card"
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                zIndex: cardOrder.length - stackIndex,
              }}
              initial={{
                rotate: generateRandomRotation(),
                x: stackIndex * 2,
                y: stackIndex * 2,
              }}
              animate={{
                rotate: draggedCard === cardIndex ? 0 : generateRandomRotation(),
                x: draggedCard === cardIndex ? 0 : stackIndex * 2,
                y: draggedCard === cardIndex ? 0 : stackIndex * 2,
              }}
              drag
              dragConstraints={{
                left: -sensitivity,
                right: sensitivity,
                top: -sensitivity,
                bottom: sensitivity,
              }}
              dragElastic={0.1}
              whileHover={{ scale: 1.02, rotate: 0 }}
              whileDrag={{ scale: 1.05, rotate: 0, zIndex: 1000 }}
              onDragStart={() => setDraggedCard(cardIndex)}
              onDragEnd={() => setDraggedCard(null)}
              onClick={() => handleCardClick(cardIndex)}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              {card.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
