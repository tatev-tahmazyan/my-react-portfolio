import Header from './Header';
import {Routes,Route} from 'react-router-dom';
import { routes } from '../../routes';
import './style.scss';

const Main = () => {
    return(
        <main>
            <Header />
            <section className="project-section">
            <Routes>
                {routes.map((route, index) => {
                    return <Route
                            element={route.element}
                            path={route.path}
                            key={index}
                        />
                })}
            </Routes> 
            </section>            
        </main>
    );
}

export default Main;