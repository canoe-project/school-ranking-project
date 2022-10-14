/* eslint-disable prefer-const */
import { Dispatch, useMemo } from 'react';

import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { useGeoCategoryCode } from 'hook/useGeoCategoryCode';
import { CommonKeywords } from 'interface/infrastructure/commonInfrastructure';
import { ILocationType } from 'interface/location/commonLocation';
import { setAroundSchool } from 'store/schoolReducer';
import reqSchool from 'utils/reqSchool';

const asyncInit = (
  keyword: CommonKeywords,
  location: ILocationType,
  code: string,
  dispatch: Dispatch<AnyAction>
) => {
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch(
    keyword,
    (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다

        for (let i = 0; i < data.length; i += 1) {
          if (data[i].category_group_code === code) {
            reqSchool(data[i].place_name).then((result) => {
              // console.log({ ...result[0], infra: {} });
              dispatch(setAroundSchool({ ...result, infra: {} }));
            });
          }
        }
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    },
    {
      ...(location.coordinates !== undefined && {
        location: new kakao.maps.LatLng(
          location.coordinates.lat,
          location.coordinates.lng
        ),
      }),
      radius: 2000,
      sort: kakao.maps.services.SortBy.ACCURACY,
      size: 7,
    }
  );
  return true;
};

const useSearchKeyword = (keyword: CommonKeywords, location: ILocationType) => {
  const dispatch = useDispatch();
  const code = useGeoCategoryCode(keyword);
  const memo = useMemo(() => {
    if (keyword !== undefined && code !== undefined && location.loaded) {
      return asyncInit(keyword, location, code, dispatch);
    }
    return false;
  }, [location, keyword]);
  // useEffect(() => {
  //   if (keyword === undefined || code === undefined) return;
  //   kakao.maps.load(() => {
  //     asyncInit(keyword, setMarkers, location, code);
  //   });
  // }, [location, keyword]);

  return memo;
};

export { useSearchKeyword };
