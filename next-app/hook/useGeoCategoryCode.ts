import { useState, useEffect } from 'react';

import { CommonKeywords } from 'interface/infrastructure/commonInfrastructure';

const categoryCode = {
  대형마트: 'MT1',
  편의점: 'CS2',
  어린이집: 'PS3',
  학교: 'SC4',
  학원: 'AC5',
  주차장: 'PK6',
  주유소: 'OL7',
  지하철역: 'SW8',
  은행: 'BK9',
  문화시설: 'CT1',
  중개업소: 'AG2',
  공공기관: 'PO3',
  관광명소: 'AT4',
  숙박: 'AD5',
  음식점: 'FD6',
  카페: 'CE7',
  병원: 'HP8',
  약국: 'PM9',
};
const useGeoCategoryCode = (keyword: CommonKeywords) => {
  const [pickCode, setPickCode] = useState<string>('');

  useEffect(() => {
    if (keyword !== undefined) {
      setPickCode(categoryCode[keyword]);
    }
  }, [keyword]);

  return pickCode;
};

export { useGeoCategoryCode };
