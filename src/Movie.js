import React, { useState } from 'react'; 
import Card from '@mui/material/Card';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Movie({name,poster,summary,rating}){
     const styles={visibility:"hidden"}
     const history=useHistory();
     const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });
    return (
      <ThemeProvider theme={theme}>
    <card className="movie-container">
      <img className="movie-poster" src={poster}
       alt={name}
       />
       
    <div className="movie-specs"><h3 className="movie-name">{name}</h3>
    <p className="movie-rating">{rating}</p>
    <p >{summary}   </p>
    <button onClick={()=> history.push('/Color-game')}></button>
    </div>
    <Counter/>
    
    </card>
    </ThemeProvider>
    )}
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