import { useState } from 'react'
import Logo from './assets/panda.svg'
import './App.css'
import Image1 from './assets/image1.jpg'

function MagicButton() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
       {count}
      </button>
    </div>)
};


const ImgData = {
  image: Image1,
  title: 'Image 1',
  description: 'Image of dog',
  width: '30vw',
  height: '30vw'
};

const feelingbuttons = [
  { id: 1, feeling: 'Hate', color: '#800000'},
  { id: 2, feeling: "Don't Like", color: '#D83927'},
  { id: 3, feeling: 'Like', color: '#1BE46F'},
  { id: 4, feeling: 'Love', color:'#47B86C' },
];

function ZineRack() {
  const listZines = feelingbuttons.map(zine =>
    <button class="buttonZones"
    key={zine.id}
    style={{
      backgroundColor: zine.color
    }}
  >
    {zine.feeling}
    <MagicButton />
  </button>
  );
  return(
    <div class="Zones"> {listZines}  </div>
    
  ) }
 
function Bookshelf() {
  return (
    <div>
      <h2>{ImgData.feeling} </h2>
      {ImgData.image &&
      <img
        className="bookCover"
        src={ImgData.image}
        alt={feelingbuttons.feeling + ' cover'}
        style={{
          width: ImgData.width,
          height: ImgData.height
        }}
      />
      }
    </div>
  );
}

function App() {
  return (

    <div className="App">
      <h1>How do you feel about this image?</h1>
      <header className="AppHeader">
        <Bookshelf />
        <ZineRack />
      </header>
    </div>
  );
}
export default App;