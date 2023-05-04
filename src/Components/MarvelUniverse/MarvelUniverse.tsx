import React from "react";
import useApi from "../../api/useApi";
import {useEffect, useState} from "react";
import HeroCard from "./HeroCard/HeroCard";
import './MarvelUniverse.scss';
import HeroDescription from "./HeroDescription/HeroDescription";
import Loader from "../Loader/Loader";

const MarvelUniverse = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [activeHero, setActiveHero] = useState<any>(null);
  const [activeHeroData, setActiveHeroData] = useState<any>(null);
  const [offset, setOffset] = useState<number>(0);
  
  const api = useApi();
  
  useEffect(() => {
  api.getCharacters(offset, 20)
    .then(response => {
      if (offset > 0) setData([...data, ...response.data.results]);
      else
        setData(response.data.results);

      setIsLoading(false);
    })  
    .catch(error => {
      console.log(error);
      alert('Error while fetching heroes list from Marvel API. Please check console');
      setIsLoading(false);
    })
  }, [offset]);

  useEffect(() => {
    if (activeHero) {
      api.getCharacter(activeHero)
        .then(response => {
          setActiveHeroData(response.data.results[0])
        })
        .catch(error => {
          console.log(error);
          alert('Error while fetching hero info from Marvel API. Please check console');
        })
    }
  },[activeHero])

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1000)
  },[isLoading])


  const renderHeroes = () => {
    if (data) {
      return (
        <div className={'main__heroesContainer'}>
          {data.map((item: any) => {
            return <HeroCard key={item.id} hero={item} onClick={(heroId: any) => setActiveHero(heroId)} isActive={activeHero === item.id}/>
          })}
        </div>
      )
    }
    return null;
  }

  return (
    <>
      <div className={'main'}>
        <div className={'main__heroDescriptionContainer'}>
          {activeHeroData ? <HeroDescription hero={activeHeroData}/> : <h2>Choose hero</h2>}
        </div>
        <div>
          <h2>Marvel Heroes</h2>
          {renderHeroes()}
          <button className={'main__buttonMore'} onClick={() => setOffset(offset +20)}>Show more</button>
        </div>
      </div>
      {showLoader && <Loader visibility={isLoading}/>}
    </>


  )
}

export default MarvelUniverse;