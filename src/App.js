import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';



function App() {
  return (
    <div>
      <div className="ui comments">
        <div className="comment">
          <a className="avatar">
            <img alt="Avatar" src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a className="author">Stevie Feliciano</a>
            <div className="metadata">
              <div className="date">2 days ago</div>
              <div className="rating">
                <i className="star icon"></i>
                5 Faves
              </div>
            </div>
            <div className="text">
              Hey guys, I hope this example comment is helping you read this documentation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
