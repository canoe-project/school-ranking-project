import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { useGeoCategoryCode } from 'hook/useGeoCategoryCode';
import {
  CommonKeywords,
  IInfra,
} from 'interface/infrastructure/commonInfrastructure';
import { ILocationType } from 'interface/location/commonLocation';
import { setInfra } from 'store/schoolReducer';

const asyncInit = (
  keyword: CommonKeywords,
  location: ILocationType,
  code: string,
  dispatch: Dispatch<AnyAction>,
  index: number,
  setChecker: Dispatch<SetStateAction<IInfra[] | undefined>>
) => {
  const marker: IInfra[] = [];
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch(
    keyword,
    (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다

        for (let i = 0; i < data.length; i += 1) {
          if (data[i].category_group_code === code) {
            marker.push({ ...data[i], infra: {} });
          }
        }
      }

      dispatch(setInfra({ key: index, cate: code, value: marker }));
      setChecker(marker);
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
};

const AroundInfra = ({
  keyword,
  LTTUD,
  GLTUD,
  index,
}: {
  keyword: CommonKeywords;
  LTTUD: string;
  GLTUD: string;
  index: number;
}) => {
  const dispatch = useDispatch();
  const [test, setTest] = useState<IInfra[]>();
  const code = useGeoCategoryCode(keyword);

  useEffect(() => {
    asyncInit(
      keyword,
      {
        loaded: true,
        coordinates: {
          lat: parseFloat(LTTUD),
          lng: parseFloat(GLTUD),
        },
      },
      code,
      dispatch,
      index,
      setTest
    );
  }, []);
  useEffect(() => {
    if (test !== undefined) {
      dispatch(setInfra({ key: index, cate: code, value: test }));
    }
  }, [test]);
  return (
    <p>
      {test !== undefined &&
        test.map((a, idx) => {
          return <p key={idx}>{a.place_name}</p>;
        })}
    </p>
  );
};

export default AroundInfra;
