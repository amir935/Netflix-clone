import { BsPlusCircleFill } from "react-icons/bs";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({ movie }) {
  let genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
  ];
  return (
    <div className={styles.cardWrapper}>
      {/* Poster image */}
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt="poster image"
      />
      {/* hover card */}
      <div className={styles.hoverCard}>
        {/*img */}
        <img
          className={styles.hoverImage}
          src={movie.poster_path}
          alt="hover image"
        />
        badge
        <div className={styles.badge}> Recently added </div>
        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
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
        {/* genre */}
        <div>
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}>.</span>
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
