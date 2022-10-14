/* eslint-disable prefer-const */
import { useState, useEffect } from 'react';

import { CommonKeywords } from 'interface/infrastructure/commonInfrastructure';
import { ILocationType } from 'interface/location/commonLocation';

const asyncInit = (
  keyword: CommonKeywords,
  setMarkers: (marker: any) => void,
  map: kakao.maps.Map | undefined,
  location: ILocationType
) => {
  const ps = new kakao.maps.services.Places();

  ps.keywordSearch(
    keyword,
    (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        data.map((d) => {
          bounds.extend(
            new kakao.maps.LatLng(parseFloat(d.y), parseFloat(d.x))
          );
          if (d.category_group_name === keyword) {
            setMarkers(
              (marker: kakao.maps.services.PlacesSearchResultItem[]) => {
                const checkedMaker = marker === undefined ? [] : marker;
                return [...checkedMaker, d];
              }
            );
          }
          return d;
        });
        if (map !== undefined) {
          map.setBounds(bounds);
        }
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    },
    {
      ...(location.coordinates !== undefined && {
        location: new kakao.maps.LatLng(
          location.coordinates?.lat,
          location.coordinates?.lng
        ),
      }),
      radius: 2000,
      sort: kakao.maps.services.SortBy.ACCURACY,
      size: 15,
    }
  );
};

const useSearchMap = (
  keyword: CommonKeywords,
  map: kakao.maps.Map | undefined,
  location: ILocationType
) => {
  const [markers, setMarkers] =
    useState<kakao.maps.services.PlacesSearchResultItem[]>();

  useEffect(() => {
    if (!map) return;
    asyncInit(keyword, setMarkers, map, location);
  }, [keyword, setMarkers, map, location]);

  return markers;
};

export { useSearchMap };
