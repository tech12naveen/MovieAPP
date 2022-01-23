import logo from './logo.svg';
import './App.css';
import {Movie} from "./Movie";
import Button from '@mui/material/Button';
import React, {useEffect, useState } from 'react'; 
import { Switch, Route, Link} from 'react-router-dom';
import {UseParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export 
function App() {
  const [mode ,setMode]=useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [movies, setMovies]= useState([  ]);
  useEffect(()=>{
    fetch("https://619e3833131c600017089423.mockapi.io/movies")
.then((data)=>data.json())
.then((mvs)=>setMovies(mvs));
  },[])
   
    const [name,  SetName]=useState("");
    const [rating,  SetRating]=useState("");
    const [summary,  SetSummary]=useState("");
    const [poster,  SetPoster]=useState("");
    const addMovie= ()=>{
      console.log(name , summary,rating ,poster);
        const newmovie={
          name:name,
         summary:summary,
         poster:poster,
          rating:rating
};
setMovies([...movies,newmovie]);
        }
       
        const paperstyle= { borderRadius: 0, minHeight:"100vh"};
        // imported from the customization theming area
        
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation ={4} style={paperstyle}>
    <div className="App">
      <ul>
        
        <li>
          <Link to ="/"> Home</Link>
          <h1> Welcome to the movie</h1>
        </li>
        <li>
          <Link to ="/movies"> movies</Link>
        </li>
        <li>
          <Link to ="/Color-game"> color-game
          </Link>
        </li>
        </ul>
        <Switch>
        <Route path="/movies">
        <Moviedetails/>
             </Route>
        <Route path="/movies">
        <h1> TRAILERS OF MOVIES</h1>
        </Route>
        </Switch>
        <button style={{marginLeft:"auto"}} onClick={()=> setMode(mode==="light"?"dark":"light")}>
          {mode==="light"?"dark":"light"}mode
        </button>
        <div className="movies-list">

      <input onChange={(event)=>{SetName(event.target.value)}} placeholder="Enter a movie name"/> 
      <input onChange={(event)=>{SetRating(event.target.value)}} placeholder="Enter a movie rating"/>
      <input onChange={(event)=>{SetSummary(event.target.value)}} placeholder="Enter a movie summary"/>
      <input onChange={(event)=>{SetPoster(event.target.value)}} placeholder="Enter a movie url "/>  
      <Button variant ="contained" onClick={addMovie}>Add a Movie</Button>
      </div> 
      {/* {users.map((user) => ( */}
        {/* <Msg name ={user.name} pic={user.pic}/> */}
        
        
        <section className="movie-list">
        {movies.map(({name,poster,summary,rating}) =>(
        <Movie
         name={name}
        poster={poster}
        summary={summary}
        rating={rating}
        />
        ))}
        </section>
      <Counter/>
      
    </div>
    </Paper>
    </ThemeProvider>
    
  );
}
export default App;

function Counter(){
  const [like, SetLike]= useState(1);
  const [dislike, SetDisLike]= useState(1);
return (
  <div className="likes-dislikes">
<button onClick ={()=> SetLike(like+1)}> like</button>
<button onClick ={()=> SetDisLike(dislike+1)}> dislike</button>
<p>{like}</p>
<p>{dislike}</p>
</div>
);
}

function Moviedetails({movies}){
  
const history=useHistory();
  console.log(movies,Movie);
  return(
    <div movie-details-container>
      <iframe width="100%" height="800" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="Avengers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

      </iframe>
      <div class="movie-detail-container">
        <h3 className="movie-name">{Movie.name}</h3>
        <p className="movie-rating">{Movie.rating}</p>
        <button onClick={()=>history.goBack()}>Back</button>
      </div>
      
    </div>
  
  );      
  }
  
