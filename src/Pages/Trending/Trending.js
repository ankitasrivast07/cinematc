import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContentCard from '../../Components/ContentCard/ContentCard';
import "./Trending.css";
import CustomPagination from '../../Components/Pagination/CustomPagination';
// import "../../Components/Pagination/CustomPagination";
export default function Trending() {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchTrendingData = async () => {
   const {data}= await axios.get(
       `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
   );
    // console.log(data.results);
    setContent(data.results);
};

useEffect(() => {
    fetchTrendingData();
     // eslint-disable-next-line
}, [page])

    return (
        <div>
             <span className="pageTitle">Trending Today</span> 
             <div className="trending">
                 {
                     content && content.map((c)=>
                     <ContentCard key={c.id} id={c.id} poster={c.poster_path}
                         title={c.title || c.name}
                         date={c.first_air_date || c.release_date}
                         media_type={c.media_type}
                         vote_average={c.vote_average}
                     />
                     )
                 }
             </div> 
         <CustomPagination setPage={setPage}/>
        </div>
    )
}
