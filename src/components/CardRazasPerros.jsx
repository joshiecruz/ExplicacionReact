function CardRazasPerros ({nombreRaza, imagen, color}){
    return(
      <li className='breedCard'>
        <div className={color}>
            <div className='contenedorImagen'>
            <img src={imagen} alt={nombreRaza} />
             </div>
             <span className='breedTitle'>{nombreRaza}</span>
             </div>
       </li>
    );
  }

  export default CardRazasPerros;