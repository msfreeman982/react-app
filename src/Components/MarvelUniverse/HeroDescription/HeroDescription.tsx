import React from "react";
import './HeroDescription.scss'

const HeroDescription = ({hero}: any) => {

  return (
    <div className={'heroDescription'}>
      <div className={'heroDescription__image'}>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={'hero image'}/>
      </div>
      <div className={'heroDescription__name'}>
        {hero.name}
      </div>
      <div className={'heroDescription__description'}>
        {hero.description || 'no description'}
      </div>
      {hero.comics.items.length > 0 &&
        <div className={'heroDescription__comics'}>
          <h3 className={'heroDescription__series__title'}>Comics:</h3>
          {hero.comics.items.map((item: any) => {
            return <div key={item.name}>{item.name}</div>
          })
          }
        </div>
      }

      {hero.series.items.length > 0 &&
        <div className={'heroDescription__series'}>
          <h3 className={'heroDescription__series__title'}>Series:</h3>
          {hero.series.items.map((item: any) => {
            return <div key={item.name}>{item.name}</div>
          })
          }
        </div>

      }
    </div>
  )
}

export default HeroDescription;