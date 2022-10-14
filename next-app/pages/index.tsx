import { useState, useEffect, Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TopSchoolList from 'components/list/TopSchoolList';
import SchoolPickMap from 'components/map/SchoolPickMap';
import { useGeolocation } from 'hook/useGeolocation';
import { useSearchKeyword } from 'hook/useSearchKeyword';
import { RootState } from 'store/store';
import { setUserLocation } from 'store/userLocationReducer';

function App() {
  const user = useSelector((state: RootState) => state.user);
  const aorundSchoolsRudux = useSelector((state: RootState) => state.school);
  const dispatch = useDispatch();

  // const [info, setInfo] =
  //   useState<kakao.maps.services.PlacesSearchResultItem>();
  // const [map, setMap] = useState<kakao.maps.Map>();
  const location = useGeolocation();
  const aroundSchools = useSearchKeyword('학교', location);

  // const markers = useSearchMap('학교', map, location);

  const [loading, setLoading] = useState(true);
  // const [klocation, setLocation] = useState<kakao.maps.LatLng>();

  // const coder = useGeocoder(klocation);

  useEffect(() => {
    kakao.maps.load(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (location.loaded) {
      dispatch(
        setUserLocation({
          lat: location.coordinates?.lat,
          lng: location.coordinates?.lng,
        })
      );
    }
  }, [location, dispatch]);
  if (loading) return <></>;
  return (
    <div className="App">
      {location.loaded ? (
        <Fragment>
          <TopSchoolList></TopSchoolList>
          <SchoolPickMap
            aorundSchool={aorundSchoolsRudux}
            location={location}
          />
          <ul>
            {aroundSchools &&
              aorundSchoolsRudux.map((school, idx) => {
                // console.log(school);
                return (
                  <li key={`${idx}-${school.SCHUL_NM}`}>
                    <p>{school.SCHUL_NM}</p>
                    {/* <SchoolListItem
                      schoolName={school.place_name}
                      key={idx}
                      index={idx}
                    /> */}
                  </li>
                );
              })}
          </ul>
        </Fragment>
      ) : (
        'Location data not available yet.'
      )}
    </div>
  );
}
export default App;
