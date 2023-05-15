import logo from './logo.svg';
import './App.css';
// import Card from './Components/Card/Card';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './Components/News/News';

function App() {
  // const items = [
  //   { name: 'first item', description: 'linux lover bd', img: 'https://en.banglapedia.org/images/3/34/NationalFlag.jpg' },
  //   { name: 'second item', description: 'Apple', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' },
  //   { name: 'third item', description: 'Tiger', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuivABB78lOMZO79z_1884cdml564R3UO_NA&usqp=CAU' },
  // ]


  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2023-05-12&to=2023-05-12&sortBy=popularity&apiKey=828fd4e70af5450aabd767989bb412aa')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])


  return (
    //---------bootstrap--------------

    // <div class="row row-cols-1 row-cols-md-2 g-4">
    //   {
    //     items.map(item => <Card
    //       item={item}
    //     ></Card>)
    //   }
    // </div>

    //------react bootstrap----------------
    // <div className="App">
    //   <Button variant='primary'>Hello me</Button>
    //   <Spinner animation="border" variant="dark" />
    // </div>

    <div className="App">
      {news.length === 0 ? <Spinner animation="border" variant="dark" /> :
        <Row xs={1} md={2} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>}
    </div>
  );
}

export default App;
