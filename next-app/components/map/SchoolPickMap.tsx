import { useEffect, useState, Fragment } from 'react';

import { MapMarker, Map } from 'react-kakao-maps-sdk';

import { Iinfra } from 'interface/infrastructure/commonInfrastructure';
import { ILocationType } from 'interface/location/commonLocation';

const SchoolPickMap = ({
  aorundSchool,
  location,
}: {
  aorundSchool: Iinfra[];
  location: ILocationType;
}) => {
  const [info, setInfo] = useState<Iinfra>();
  // const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState<kakao.maps.Map>();

  useEffect(() => {
    if (!map) return;
    const bounds = new kakao.maps.LatLngBounds();
    aorundSchool.map((school) => {
      if (
        school !== undefined &&
        school.LTTUD !== undefined &&
        school.LGTUD !== undefined &&
        school.LGTUD !== null &&
        school.LTTUD !== null
      ) {
        bounds.extend(
          new kakao.maps.LatLng(
            parseFloat(school.LTTUD),
            parseFloat(school.LGTUD)
          )
        );
      }
      return school;
    });
    if (aorundSchool !== undefined && map !== undefined) {
      map.setBounds(bounds);
    }
  }, [aorundSchool, map]);

  return (
    <Fragment>
      <Map
        center={{
          lat:
            location.coordinates?.lat === undefined
              ? 0
              : location.coordinates?.lat,
          lng:
            location.coordinates?.lng === undefined
              ? 0
              : location.coordinates?.lng,
        }}
        style={{
          width: '100%',
          height: '350px',
        }}
        level={3}
        onCreate={setMap}
      >
        {aorundSchool.map((marker: Iinfra) => {
          if (marker.LTTUD !== null && marker.LGTUD !== null) {
            return (
              <MapMarker
                key={`marker-${marker.SCHUL_NM}-${marker.LTTUD},${marker.LGTUD}`}
                position={{
                  lat: parseFloat(marker.LTTUD),
                  lng: parseFloat(marker.LGTUD),
                }}
                onClick={() => setInfo(marker)}
              ></MapMarker>
            );
            return true;
          }
        })}
      </Map>
      <div>{<p>{info?.SCHUL_NM}</p>}</div>
    </Fragment>
  );
};

export default SchoolPickMap;
