import {Link} from  'react-router-dom';

function CardRazasPerros ({nombreRaza, imagen, color}){
    return(
      <li className='breedCard'>
        <Link to='/bordercollie'>
        <div className={color}>
            <div className='contenedorImagen'>
            <img src={imagen} alt={nombreRaza} />
             </div>
             <span className='breedTitle'>{nombreRaza}</span>
             </div>
             </Link>
       </li>
    );
  }

  export default CardRazasPerros;