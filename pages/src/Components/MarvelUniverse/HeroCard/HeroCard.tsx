import React from "react";
import "./HeroCard.scss";

const HeroCard = ({hero, onClick, isActive} : any) => {
  return (
    <div className={`heroCard ${isActive ? 'heroCard_active' : ''}`} onClick={() => onClick(hero.id)} role="button">
      <div className={'heroCard__image'}>
        <img src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt={'hero image'}></img>
      </div>
      <div className={'heroCard__name'}>{hero.name}</div>
    </div>
  )
}
export default HeroCard;