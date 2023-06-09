import { useEffect,useState } from "react";
import { Movie } from "../types/Movie";



export function Movielist()
{
    const [MovieData, setMovieData] = useState<Movie[]>([]);

    useEffect (() => {
        const fetchMovie = async () => {
            const rsp = await fetch('https://localhost:4000/Movie');
            const temp = await rsp.json();
            setMovieData(temp);
    };
    fetchMovie();
   },[]);

    
    return (
    <>
        <div className="row">
            <h1>Peliculas</h1>

        </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Movie Title</th>
                    <th>Category</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Rating</th>
                    <th>Edited</th>
                    <th>Lent To</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {MovieData.map((m) => (
                    <tr key={m.movieID}>
                        <td>{m.title}</td>
                        <td>{m.category}</td>
                        <td>{m.year}</td>
                        <td>{m.director}</td>
                        <td>{m.rating}</td>
                        <td>{m.edited}</td>
                        <td>{m.lentTo}</td>
                        <td>{m.notes}</td>
                    
                    </tr>
                        
                ))}
            </tbody>
        </table>
    </>
    );
};