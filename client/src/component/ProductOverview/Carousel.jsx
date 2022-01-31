import React, { useState, useEffect, useRef } from 'react';
import styles from './Overview.styles.css';

const Carousel = ({ photos, handleImageChange }) => {
  const [hideRightArrow, setHideRightArrow] = useState(true);
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [ticking, setTicking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if ((el.scrollWidth !== el.clientWidth) && hideRightArrow && (el.scrollLeft !== maxScrollLeft)) {
      setHideRightArrow(false);
    }
    if ((el.scrollWidth === el.clientWidth) && !hideRightArrow && (el.scrollLeft === maxScrollLeft)) {
      setHideRightArrow(true);
    }
  }, []);

  useEffect(() => {
    let el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        setTicking(false);
        if (!ticking) {
          window.requestAnimationFrame(function() {
            setTicking(false);
          })
          setTicking(true);
        }
        if (e.deltaY === 0) {
          return;
        }
        e.preventDefault();
        const newDeltaY = scrollAccelerator(e.deltaY);
        el.scrollTo({
          left: el.scrollLeft + newDeltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return (() => {
        el.removeEventListener("wheel", onWheel);
      });
    }
  }, []);

  useEffect(() => {
    if(!ticking) {
      handleArrows();
    }
  }, [ticking]);

  const handleArrows = () => {
    const el = scrollRef.current;
    if (el.scrollLeft === (el.scrollWidth - el.clientWidth) && !hideRightArrow) {
      setHideRightArrow(true);
    }
    if (el.scrollLeft !== (el.scrollWidth - el.clientWidth) && hideRightArrow) {
      setHideRightArrow(false);
    }
    if (el.scrollLeft === 0 && !hideLeftArrow) {
      setHideLeftArrow(true);
    }
    if (el.scrollLeft !== 0 && hideLeftArrow) {
      setHideLeftArrow(false);
    }
  };

  const scrollCarouselLeft = () => {
    const el = scrollRef.current;
    el.scrollLeft += 98;
    handleArrows();
  };

  const scrollCarouselRight = () => {
    const el = scrollRef.current;
    el.scrollLeft -= 98;
    handleArrows();
  };

  return (
    <div className={styles.carousel} id='carousel' ref={scrollRef}>
      {
        hideLeftArrow ? ''
        : <div className={styles.leftArrow} onClick={() => { scrollCarouselRight(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Left Arrow</title>
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
          </svg>
        </div>
      }
      {photos.map((photo, index) => {
        return (
          <div className={styles.carouselItem} id='carousel-item' key={index} onClick={() => {handleImageChange(photos[index])}}>
            <img src={photo}/>
          </div>
        );
      })}
      {
        hideRightArrow ? ''
        : <div className={styles.rightArrow} onClick={() => { scrollCarouselLeft(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Right Arrow</title>
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
          </svg>
        </div>
      }
    </div>
  );
}

export default Carousel;
