import { useEffect } from 'react';

import { SchoolNice } from '@prisma/client';
import axios from 'axios';
import moment from 'moment';
import { GetServerSideProps } from 'next';

import schoolKindSwitch from 'utils/schoolKindSwitch';

const SchoolIndex = ({
  schoolInfo,
  food,
  schedule,
  timetable,
}: {
  schoolInfo: SchoolNice;
}) => {
  useEffect(() => {
    console.log(schoolInfo);
    console.log(food);
    console.log(schedule);
  }, []);

  return (
    <div>
      <p>{schoolInfo.SCHUL_NM}</p>
      <p>{schoolInfo.HMPG_ADRES}</p>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { school } = context.query;
  const type = 'json';
  const pIndex = '1';
  const pSize = '100';
  // const ATPT_OFCDC_SC_CODE = '';
  // const SD_SCHUL_CODE = '';
  const MLSV_TO_YMD = moment().format('YYYYMMDD');
  const MLSV_FROM_YMD = moment().format('YYYYMMDD');

  const schoolInfo: SchoolNice = await axios
    .get(`${process.env.HOSTNAME}/api/schoolNice/${school}`)
    .then(({ data }) => {
      return data;
    });

  const food = await axios
    .get(
      `https://open.neis.go.kr/hub/mealServiceDietInfo?Type=${type}&pIndex=${pIndex}&pSize=${pSize}&ATPT_OFCDC_SC_CODE=${schoolInfo.ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${schoolInfo.SD_SCHUL_CODE}&MLSV_TO_YMD=${MLSV_TO_YMD}&MLSV_FROM_YMD=${MLSV_FROM_YMD}`
    )
    .then(({ data }) => {
      return data;
    });
  const schedule = await axios
    .get(
      `https://open.neis.go.kr/hub/SchoolSchedule?Type=${type}&pIndex=${pIndex}&pSize=${pSize}&ATPT_OFCDC_SC_CODE=${schoolInfo.ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${schoolInfo.SD_SCHUL_CODE}&AA_TO_YMD=${MLSV_TO_YMD}&AA_FROM_YMD=${MLSV_FROM_YMD}`
    )
    .then(({ data }) => {
      return data;
    });
  const timetable = await axios
    .get(
      `https://open.neis.go.kr/hub/${schoolKindSwitch(
        schoolInfo.SCHUL_KND_SC_NM
      )}?Type=${type}&pIndex=${pIndex}&pSize=${pSize}&ATPT_OFCDC_SC_CODE=${
        schoolInfo.ATPT_OFCDC_SC_CODE
      }&SD_SCHUL_CODE=${
        schoolInfo.SD_SCHUL_CODE
      }&TI_TO_YMD=${MLSV_TO_YMD}&TI_FROM_YMD=${MLSV_FROM_YMD}`
    )
    .then(({ data }) => {
      return data;
    });

  return {
    props: {
      schoolInfo,
      food,
      schedule,
      timetable,
    },
  };
};

export default SchoolIndex;
