import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
// import { IoArrowDropdownCircle } from "react-icons/io";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// a movie/show counts as "recently added" if it was released in the last 30 days
function isRecentlyAdded(movie, days = 30) {
  const date = movie?.release_date || movie?.first_air_date;
  if (!date) return false;
  const diffDays = (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= days;
}

function MovieCard({ movie }) {
  console.log(movie);
  let genres = ['Adventure', 'Action', 'Thriller']


  const isRecent = isRecentlyAdded(movie)
  return (
    <div className={styles.cardWrapper}>
      {/* poster img */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* hover card  */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="hover image"
        />

        {/* badge inside movie */}
        {isRecent && <div className={styles.badge}>Recently added</div>}
        {/* buttons row*/}
        <div className={styles.buttonRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoChevronDownCircleOutline
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>
        {/* metadata row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>
        {/* general */}
        <div className={styles.genres}>
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
