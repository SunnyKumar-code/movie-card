
import './App.css'
import Card from './Card/card'

function App() {

  const movieData = [
    {
      "title": "Bright",
      "year": 2017,
      "director": "David Ayer",
      "duration": "117 min",
      "genres": ["Action", "Crime", "Fantasy"],
      "description": "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
      "poster_url": "https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_FMjpg_UX1000_.jpg",
      "background_url": "https://occ-0-8407-1361.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABffPAIPjEhT-aDZ2CPJqSvpx5OnrhKOXDYgwT2PIskGUmpJtnTgSHsWnJv84EVD_6XUt0hcgOVdyF2REM8Mvcia5Dx7rLq1QprqQ.jpg?r=b7e"
    },
    {
      "title": "Inception",
      "year": 2010,
      "director": "Christopher Nolan",
      "duration": "148 min",
      "genres": ["Action", "Adventure", "Sci-Fi"],
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      "poster_url": "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
      "background_url": "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Inception-movie-poster-1.jpg"
    },
    {
      "title": "The Matrix",
      "year": 1999,
      "director": "Lana Wachowski, Lilly Wachowski",
      "duration": "136 min",
      "genres": ["Action", "Sci-Fi"],
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "poster_url": "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      "background_url": "https://m.media-amazon.com/images/S/pv-target-images/16ec8f9f0689604fe752313eddbd29b5167edb42551adeed552165fe5b1f42c7._SX1080_FMjpg_.jpg"
    },
    {
      "title": "Avatar",
      "year": 2009,
      "director": "James Cameron",
      "duration": "162 min",
      "genres": ["Action", "Adventure", "Fantasy"],
      "description": "A paraplegic Marine is sent to the moon Pandora on a unique mission, but he becomes torn between following orders and protecting the world he feels is his home.",
      "poster_url": "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
      "background_url": "https://i.ytimg.com/vi/PLtgIILX7E8/hq720.jpg"
    },
    {
      "title": "Interstellar",
      "year": 2014,
      "director": "Christopher Nolan",
      "duration": "169 min",
      "genres": ["Adventure", "Drama", "Sci-Fi"],
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "poster_url": "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      "background_url": "https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/Interstellar.jpg?format=1500w"
    }
  ];
  
  return (
    <div className='mainContainer'>
    
      {
        movieData.map((movie,idx)=>{
          return (
          <Card key={idx} {...movie}/>
          )
        })
      }
    </div>
  )
}

export default App
