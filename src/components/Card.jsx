import './card.css';

function Card(props) {
  return (
    <div className='card text-center m-3 p-0 border-0' style={{width: 280}}>
        <img src={props.imgCard} alt={props.tituloCard} />
        <div className='card-body'>
            <h4 className='card-title'> {props.tituloCard} </h4>
            <p className='card-text'> {props.descripcionCard} </p>
            <button type="button" className="btn btn-outline-light">Click Aquí</button>
        </div>
    </div>
  )
}

export default Card