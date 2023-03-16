import MarvelLogoIco from './marvel-logo.svg';
import './Loader.scss';
const Loader = ({visibility}: any) => {

  return (
    <div className={`loader ${visibility ? '' : 'loader_hidden'}`}>
      <img src={MarvelLogoIco} alt={'marvel logo'}/>
    </div>
  )
}

export default Loader;