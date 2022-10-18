import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button, Spinner } from "react-bootstrap";
import Loading from "./conponents/Loading";
import ReloadBtn from "./conponents/ReloadBtn";

function App() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMeme = async () => {
    setLoading(true);

    const { data } = await (
      await fetch("https://api.imgflip.com/get_memes")
    ).json();

    setLoading(false);

    const shuffled = data.memes.sort(function () {
      return 0.5 - Math.random();
    });

    setMemes(shuffled.slice(0, 20));
  };

  useEffect(() => {
    loadMeme();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid>
        <ReloadBtn handleOnClick={loadMeme} />
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {memes.map((meme) => (
            <Col key={meme.id} style={{ display: "flex" }}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={meme.url} />
                <Card.Body
                  style={{
                    borderTop: "black 1px solid",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Card.Title style={{ textAlign: "center" }}>
                    {meme.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
