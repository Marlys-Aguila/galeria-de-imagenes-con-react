import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import imagen01 from './assets/imgs/nature-01.jpg';
import imagen02 from './assets/imgs/nature-02.jpg';
import imagen03 from './assets/imgs/nature-03.jpg';
import imagen04 from './assets/imgs/nature-04.jpg';
import imagen05 from './assets/imgs/nature-05.jpg';
import imagen06 from './assets/imgs/nature-06.jpg';

function App() {
    return (
        <div className='pt-4 main-container'>

            <div className='container'>

                <Header tituloHeader="Galería de Imágenes con React"  /> 

                <div className='row justify-content-center'>

                    <Card className="col-12 col-md-4" imgCard={imagen01} tituloCard="Bosque Verde" descripcionCard="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus quas cumque, rerum deleniti et quam sequi." />

                    <Card className="col-12 col-md-4" imgCard={imagen02} tituloCard="Cabaña en el Bosque" descripcionCard="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus quas cumque, rerum deleniti et quam sequi." />

                    <Card className="col-12 col-md-4" imgCard={imagen03} tituloCard="Lago Moraine" descripcionCard="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus quas cumque, rerum deleniti et quam sequi." />

                    <Card className="col-12 col-md-4" imgCard={imagen04} tituloCard="Montañas Marrones" descripcionCard="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus quas cumque, rerum deleniti et quam sequi." />

                    <Card className="col-12 col-md-4" imgCard={imagen05} tituloCard="Montañas y Ríos" descripcionCard="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus quas cumque, rerum deleniti et quam sequi." />

                    <Card className="col-12 col-md-4" imgCard={imagen06} tituloCard="Cascadas" descripcionCard="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusamus quas cumque, rerum deleniti et quam sequi." />

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default App
