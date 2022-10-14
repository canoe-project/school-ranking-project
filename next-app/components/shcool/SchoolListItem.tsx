import { useState, useEffect, useCallback, memo } from 'react';

import { School } from '@prisma/client';
import axios from 'axios';
import { useSelector } from 'react-redux';

import AroundInfra from 'components/infra/AroundInfra';
import { RootState } from 'store/store';
// import { useEffect, useState } from 'react';
// import { ILocationType } from 'interface/location/commonLocation';

const callSchool = async (schoolName: string) => {
  const school = await axios
    .get(`${process.env.HOSTNAME}/api/search/school/${schoolName}`)
    .then(async ({ data }) => {
      return data;
    });
  return school;
};

const SchoolListItem = ({
  schoolName,
  index,
}: {
  schoolName: string;
  index: number;
}) => {
  const [school, setShcool] = useState<School>();
  const aorundSchoolsRudux = useSelector((state: RootState) => state.school);
  const call = useCallback(() => {
    callSchool(schoolName).then((data: School[]) => {
      setShcool(data[0]);
    });
  }, [schoolName]);
  useEffect(() => {
    call();
  }, [schoolName]);

  if (school === undefined) return <></>;
  return (
    <li>
      <p
        onClick={() => {
          console.log(aorundSchoolsRudux[index].infra);
        }}
      >
        {school?.SCHUL_NM}
      </p>
      {school.LTTUD !== null && school.LGTUD !== null && (
        <AroundInfra
          keyword={'병원'}
          LTTUD={school.LTTUD}
          GLTUD={school.LGTUD}
          index={index}
        />
      )}
    </li>
  );
};

export default memo(SchoolListItem);
