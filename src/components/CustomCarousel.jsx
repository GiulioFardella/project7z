import React, { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=";
const Key1 = "ae45a237"; 

function CustomCarousel({title}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Includiamo la chiave nell'URL
    fetch(`${URL}${Key1}&s=documentary`) // Il parametro 's=movie' serve per ottenere una lista di film
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        return response.json();
       
      })
      .then((data) => {
        console.log("rispostanumeroapi",data.Search.length)
        if (data.Search) { console.log(data)
          setMovies(data.Search.slice(0,300)); 
        }
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error);
      });
  },);

  // Funzione per dividere i film in pagine per il carosello
  const chunkMovies = (movies, size) => {
    const chunks = [];
    for (let i = 0; i < movies.length; i += size) {
      chunks.push(movies.slice(i, i + size));
    }
    return chunks;
  };

  const movieChunks = chunkMovies(movies, 6); // Dividi i film in blocchi di 6

  return (
    <div>
      <h2>{title}</h2>
      <Carousel controls indicators className="mb-4">
        {movieChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row className="d-flex align-items-center">
              {chunk.map((movie) => (
                <Col
                  xs={12}
                  md={4}
                  lg={2}
                  key={movie.imdbID}
                  className="text-center mb-3"
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      padding: "1px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      
                    }}
                  >
                    <img
                      className=""
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{
                        width: "100%", 
                        maxWidth: "660px",
                        height: "500px",
                        objectFit: "contain",
                        borderRadius:"6px" 
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
