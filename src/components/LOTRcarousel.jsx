import React, { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=";
const Key1 = "ae45a237";

function LOTRcarousel({ title, filterKeyword }) { 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URL}${Key1}&s=movie`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        return response.json();
      })
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search.slice(0, 30));
        }
      })
      .catch((error) => {
        console.error("Errore durante il fetch:", error);
      });
  }, []);

 
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  const chunkMovies = (movies, size) => {
    const chunks = [];
    for (let i = 0; i < movies.length; i += size) {
      chunks.push(movies.slice(i, i + size));
    }
    return chunks;
  };

  const movieChunks = chunkMovies(filteredMovies, 6); 

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
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{
                        width: "100%",
                        maxWidth: "660px",
                        height: "500px",
                        objectFit: "contain",
                        borderRadius: "6px",
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

export default LOTRcarousel;
