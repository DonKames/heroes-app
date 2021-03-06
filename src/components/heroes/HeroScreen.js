import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);

  console.log('Hero: ', hero, 'HeroeId: ', heroeId);

  //const hero = getHeroById(heroeId);

  if (!hero) {
    return <Navigate to='/' />;
  }

  const handleReturn = () => {
    if ( window.history.length <= 2){
      navigate('/');
    }else{
      navigate(-1);
    }
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={ superhero }
          className='img-thumbnail card animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{ superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
          <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Return
        </button>
      </div>
    </div>
  )
};
