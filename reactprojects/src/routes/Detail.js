import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import styles from "./Detail.module.css"


function Datail(){
    const [loading,setLoading] =useState(true);
    const [movies,setMovies] = useState([]);
    const {id} =useParams();
    const getMovie_details =async () => {
        const json = await 
        (await fetch
            (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
         
         setMovies(json.data.movie);
         setLoading(false);
        //  console.log(json);
    };
    useEffect(() => {
        getMovie_details();
    
    } ,[]);
     console.log(movies);

    return (
        <div>
            {loading ? (<h1>Loading ...</h1>) : 
            (<div >
                <header className={styles.movie__header}>
                <h1>영화 상세 페이지
                <Link to="/"><button>뒤로가기</button></Link></h1>
                </header>
                <div className={styles.movie__detail}>
                    <img src={movies.large_cover_image} alt={movies.title} ></img>
                    <div className={styles.movie__data}>
                    <h1><p>{movies.title_long}</p> </h1>
                    <p>개봉날짜 -{movies.year} // 평점 : {movies.rating} //런닝타임 :{movies.runtime}</p>
                    <ul className={styles.movie__genres}>
                        {movies.genres.map((genres)=>(
                            <li key={genres}>{genres}</li>  
                        ))}
                    </ul>
                    <ul>
                    <p>{movies.description_intro}</p>
                    <p>{movies.description_full}</p>
                    </ul>
                    </div>
                </div>
                
            
            
            </div>)}
        </div>
    );
}

export default Datail;