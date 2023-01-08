import { MovieCard } from "../components/MovieCard"

import { Wishlist } from "../hooks/Wishlist"

import * as Styles from "../styles/pages/Wishlist"

export function WishList() {
  const { wishlist, handleAddOrRemoveMovieOnWishlist, isMovieInWishlist } =
  Wishlist()

  return (
    <Styles.Container>
      <h1>Minha lista ({wishlist.length})</h1>

      <div className="cards">
        {wishlist.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleAddMovieOnWishlist={handleAddOrRemoveMovieOnWishlist}
            inWishlist={isMovieInWishlist(movie.id)}
            className="card"
          />
        ))}
      </div>
    </Styles.Container>
  )
}
