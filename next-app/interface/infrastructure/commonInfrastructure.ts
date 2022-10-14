import { School } from '@prisma/client';
// https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword-request-category-group-code
export type CommonKeywords =
  | '대형마트'
  | '편의점'
  | '학교'
  | '학원'
  | '주차장'
  | '지하철역'
  | '은행'
  | '문화시설'
  | '중개업소'
  | '공공기관'
  | '관광명소'
  | '숙박'
  | '음식점'
  | '카페'
  | '병원'
  | '약국';

export interface Iinfra extends School {
  infra: {
    MT1?: kakao.maps.services.PlacesSearchResultItem[];
    CS2?: kakao.maps.services.PlacesSearchResultItem[];
    PS3?: kakao.maps.services.PlacesSearchResultItem[];
    SC4?: kakao.maps.services.PlacesSearchResultItem[];
    AC5?: kakao.maps.services.PlacesSearchResultItem[];
    PK6?: kakao.maps.services.PlacesSearchResultItem[];
    OL7?: kakao.maps.services.PlacesSearchResultItem[];
    SW8?: kakao.maps.services.PlacesSearchResultItem[];
    BK9?: kakao.maps.services.PlacesSearchResultItem[];
    CT1?: kakao.maps.services.PlacesSearchResultItem[];
    AG2?: kakao.maps.services.PlacesSearchResultItem[];
    PO3?: kakao.maps.services.PlacesSearchResultItem[];
    AT4?: kakao.maps.services.PlacesSearchResultItem[];
    AD5?: kakao.maps.services.PlacesSearchResultItem[];
    FD6?: kakao.maps.services.PlacesSearchResultItem[];
    CE7?: kakao.maps.services.PlacesSearchResultItem[];
    HP8?: kakao.maps.services.PlacesSearchResultItem[];
    PM9?: kakao.maps.services.PlacesSearchResultItem[];
  };
}

export interface IInfra extends kakao.maps.services.PlacesSearchResultItem {
  infra: {
    MT1?: kakao.maps.services.PlacesSearchResultItem[];
    CS2?: kakao.maps.services.PlacesSearchResultItem[];
    PS3?: kakao.maps.services.PlacesSearchResultItem[];
    SC4?: kakao.maps.services.PlacesSearchResultItem[];
    AC5?: kakao.maps.services.PlacesSearchResultItem[];
    PK6?: kakao.maps.services.PlacesSearchResultItem[];
    OL7?: kakao.maps.services.PlacesSearchResultItem[];
    SW8?: kakao.maps.services.PlacesSearchResultItem[];
    BK9?: kakao.maps.services.PlacesSearchResultItem[];
    CT1?: kakao.maps.services.PlacesSearchResultItem[];
    AG2?: kakao.maps.services.PlacesSearchResultItem[];
    PO3?: kakao.maps.services.PlacesSearchResultItem[];
    AT4?: kakao.maps.services.PlacesSearchResultItem[];
    AD5?: kakao.maps.services.PlacesSearchResultItem[];
    FD6?: kakao.maps.services.PlacesSearchResultItem[];
    CE7?: kakao.maps.services.PlacesSearchResultItem[];
    HP8?: kakao.maps.services.PlacesSearchResultItem[];
    PM9?: kakao.maps.services.PlacesSearchResultItem[];
  };
}
