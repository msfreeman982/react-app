import React from "react";
import './HeroCard.scss';
const HeroCard = ({hero, onClick, isActive} : any) => {

  return (
    <div data-testid="hero-item" className={`heroCard ${isActive ? 'heroCard_active' : ''}`} onClick={() => onClick(hero.id)}>
      <div data-testid="hero-item" className={'heroCard__image'}>
        <img src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt={'hero image'}></img>
      </div>
      <div className={'heroCard__name'}>{hero.name}</div>
    </div>
  )
}
export default HeroCard;