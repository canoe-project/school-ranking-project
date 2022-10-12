import { useState } from 'react';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

import useGeoLocation from 'hook/useGeolocation';
import { useSearchMap } from 'hook/useSearchMap';

const handleMarker = (marker: kakao.maps.services.PlacesSearchResultItem) => {
  console.log(marker);
};

function App() {
  // const [info, setInfo] =
  //   useState<kakao.maps.services.PlacesSearchResultItem>();
  const [map, setMap] = useState<kakao.maps.Map>();
  const location = useGeoLocation();
  const markers = useSearchMap('공공기관', map, location);

  // useEffect(() => {
  //   console.log(markers);
  // }, [markers]);
  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.4907391344019,
        lng: 127.015423519689,
      }}
      style={{
        width: '100%',
        height: '350px',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers &&
        markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.place_name}-${marker.y},${marker.x}`}
            position={{ lat: parseFloat(marker.y), lng: parseFloat(marker.x) }}
            onClick={() => handleMarker(marker)}
          >
            {/* {info && info.content === marker.content && (
              <div style={{ color: '#000' }}>{marker.content}</div>
            )} */}
          </MapMarker>
        ))}
    </Map>
  );
  // const location = useGeoLocation();

  // useEffect(() => {}, [location]);

  // return (
  //   <div className="App">
  //     {location.loaded ? (
  //       <UserMap
  //         lat={
  //           location.coordinates?.lat === undefined
  //             ? 0
  //             : location.coordinates?.lat
  //         }
  //         lng={
  //           location.coordinates?.lng === undefined
  //             ? 0
  //             : location.coordinates?.lng
  //         }
  //       />
  //     ) : (
  //       'Location data not available yet.'
  //     )}
  //   </div>
  // );
}

export default App;
// export default function IndexPage() {
//   return (
//     <Layout>
//       <h1>NextAuth.js Example</h1>
//       <p>
//         This is an example site to demonstrate how to use{' '}
//         <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
//       </p>
//     </Layout>
//   );
// }
