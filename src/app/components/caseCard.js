
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkTheme } from '../styles/theme';
import { LikeIcon } from './Icons';
import 'typeface-quicksand';

const CaseCardWrapper = styled.div`
  background-color: ${darkTheme.grey}; 
  width: a00%;
  height: 250px; 
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  transition: background-color 0.5s ease-in-out;
  align-items: center;

  &:hover {
    background-color: #e0e0e0; /* Cambia el color de fondo al pasar el mouse */
  }

  .case-image {
    width: 100%;
    height: auto; /* Esto mantendrá la imagen proporcional al cambiar el ancho */
    max-height: 100px; /* Ajusta la altura de la imagen según tus necesidades */
    object-fit: cover;
    border-radius: 4px;
  }

  .case-title {
    font-weight: bold;
    font-size: 2rem; /* Ajusta el tamaño del título según tus necesidades */
    margin-top: auto /* Ajusta el espacio superior según tus necesidades */
    align-self: flex-start;

    
  }

  .case-description {
    font-size: 0.9rem;
    margin-top: -2rem; /* Ajusta el espacio superior de la descripción */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 4.3em;
    line-height: 1.1em;
    font-family: Quicksand;
  }

  .icon{
    display: flex;
    align-items: left;
    margin-bottom: 0.4rem;
  }
`;

const CaseCard = ({ title, description,likes }) => {
  return (
    <CaseCardWrapper>
      <h2 className="case-title">{title}</h2>
      <p className="case-description">{description}</p>
      <div className="icon">
          <LikeIcon />
          <p> {likes}</p>
    </div>
    </CaseCardWrapper>
  );
};

CaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default CaseCard;
