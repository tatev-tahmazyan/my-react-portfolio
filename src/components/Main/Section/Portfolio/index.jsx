import './style.scss';
import { Container } from 'react-bootstrap';
import { portfolioItems } from './links/index.js';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <Container>
          <div className="cards-cont d-flex flex-wrap justify-content-center pt-5 ">
          {portfolioItems.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="card">
                    <div className="card__thumb">
                      <img src={item.img} className="card__image" alt="task-img" />
                        <div className="card__caption w-100">
                              <h3 className="card__title">{item.title}</h3>           
                              <p className="card__snippet">{item.description} </p>
                              <Link to={item.link} className="card__button pt-2 pb-2 pr-4 pl-4">learn more</Link>
                        </div>
                    </div>
                  </div>      
                </div>
              )
            })}   
            </div>  
        </Container>
    );
}
export default Portfolio;