import React, { useState } from "react";
import { useQuery, gql } from '@apollo/client';
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  }
}));

/** PEOPLE gql query to retreive all characters */
export const PEOPLE = gql`
  query getAllPeople {
  allPeople {
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
  }
}
`;

/**
 * Home Page is the Starwars Characters home page.
 * We display a grid of characters fetched with useQuery with the PEOPLE query
 */
const Home = () => {

  const { loading, error, data } = useQuery(PEOPLE);

  const cardStyles = useStyles();

  const total = Object.keys(data?.allPeople).length;

   const [characters, setCharacters] = useState(data?.allPeople.slice(0, total));

  const [pageNumber, setPageNumber] = useState(0);

  const charactersPerPage = 10;

 const pageCount = (Math.ceil(total / charactersPerPage));

  const pagesVisited = pageNumber * charactersPerPage;

  let navigate = useNavigate();

  
  // const handlePageClick = ( { selected }) => {
  //   setPageNumber(selected);
  // }

  
    return (
        <Container>
        <Grid container spacing={2} className={cardStyles.grid}>
            {characters.slice(pagesVisited, pagesVisited + charactersPerPage)
            .map((person: any) => (
                //person.name
            <Grid item xs={12} md={8} lg={4}>
                 <Card sx={{ maxWidth: 345 }}>
                 <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {person.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gender: {person.gender}
                               <p>Height: {person.height}</p> 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                     </CardActions>
                 </Card>
              
            </Grid>
            ))}
         </Grid>

         <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        //onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />


         </Container>
       
            );
  


};

export default Home;
