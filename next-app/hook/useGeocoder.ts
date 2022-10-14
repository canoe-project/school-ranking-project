import { useCallback, useEffect, useState } from 'react';

interface IGeoInfoState {
  result: kakao.maps.services.RegionCode[];
  status: kakao.maps.services.Status;
}
const useGeocoder = (location: kakao.maps.LatLng | undefined) => {
  const [localLocation, setLocalLocation] = useState<kakao.maps.LatLng>(
    new kakao.maps.LatLng(33.452613, 126.570888)
  );
  const [geoState, setGeoState] = useState<IGeoInfoState>();

  const setCallback = useCallback(() => {
    const geo = new kakao.maps.services.Geocoder();
    geo.coord2RegionCode(
      localLocation.getLng(),
      localLocation.getLat(),
      (
        result: kakao.maps.services.RegionCode[],
        status: kakao.maps.services.Status
      ) => {
        setGeoState({ result, status });
      }
    );
  }, [localLocation]);

  useEffect(() => {
    setCallback();
  }, [setCallback]);

  useEffect(() => {
    if (location !== undefined) {
      setLocalLocation(location);
    }
  }, [location]);

  const setValue = (setLocation: kakao.maps.LatLng) => {
    try {
      setLocalLocation(setLocation);
    } catch (error) {
      console.log(error);
    }
  };
  return [geoState, setValue];
};

export { useGeocoder };
