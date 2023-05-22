import { useState, useContext } from 'react';
import { places } from 'components/context/data.jsx';
import { getImageUrl } from 'components/context/utils.jsx';
import { SizeContext } from 'components/context/Context'

export default function TestApp() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <SizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List imageSize={imageSize} />
      </SizeContext.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}

      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(SizeContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
