import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomPagination from '../../Components/Pagination/CustomPagination';
import ContentCard from '../../Components/ContentCard/ContentCard';
import Genres from '../../Components/Genres/Genres';
import useGenresIds from '../../hooks/useGenresIds';

export default function Movies() {
   const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforAPI = useGenresIds(selectedGenres);
  console.log(genreforAPI);
    const fetchMovies=async()=>{
    const {data}=await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforAPI}`);
    
     setContent(data.results);
     setNumOfPages(data.total_pages);
    }
    useEffect(() => {
        fetchMovies();
    }, [genreforAPI, page])
    return (
        <div>
     
           <span className="pageTitle">Movies</span> 
           <Genres  type="movie" 
           genres={genres}
           setSelectedGenres={setSelectedGenres} 
           setGenres={setGenres}
               setPage={setPage}
               selectedGenres={selectedGenres}
           />
           <div className="trending">
                 {
                     content && content.map((c)=>
                     <ContentCard key={c.id} id={c.id} poster={c.poster_path}
                         title={c.title || c.name}
                         date={c.first_air_date || c.release_date}
                         media_type="movie"
                         vote_average={c.vote_average}
                     />
                     )
                 }
             </div> 
             {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
        </div>
    )
}
