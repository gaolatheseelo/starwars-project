import { useQuery, gql } from '@apollo/client';
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/** PEOPLE gql query to retreive all characters */
export const PERSON = gql`
  query getPerson{$name: name} {
  person {name} {
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

function Profile() {

    const { loading, error, data } = useQuery(PERSON);


  let navigate = useNavigate();

  const [character, setCharacter] = useState(data?.person);

  return (
    <div className="container">
      <div className="row m-2">
        {character.map((character: any) => {
          return (
            <div key={character.name} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">
                    {character.name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    Gender: {character.gender}
                  </h6>
                  <p className="card-text">Height: {character.height} cm</p>
                  <p>Date of Birth: {character.birth_year}</p>
                  <p>Character Mass: {character.mass}</p>
                  <p>Hair Color: {character.hair_color}</p>
                  <p>Skin Color: {character.skin_color}</p>
                  <p>Eye Color: {character.eye_color}</p>
                  {/*<p className="card-media  component={img} image={https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg}"> 

          </p> */}
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => navigate(`/`)}
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
