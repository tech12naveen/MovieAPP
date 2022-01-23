function Moviedetails({movies}){
    const history=useHistory();
      console.log(movies,Movie);
      return(
        <div movie-details-container>
          <iframe width="100%" height="800" src="https://www.youtube.com/embed/TcMBFSGVi1c" title="Avengers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    
          </iframe>
          <div className ="movie-detail-container">
            <h3 className="movie-name">{Movie.name}</h3>
            <p className="movie-rating">{Movie.rating}</p>
    
            <button onClick={()=>history.goBack()}>Back</button>
          </div>
          
        </div>
      );      
      }