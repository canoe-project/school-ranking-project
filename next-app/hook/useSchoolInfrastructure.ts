import { useEffect, useState } from 'react';

import axios from 'axios';

const callSchool = async (schoolName) => {
  const school = await axios
    .get(`${process.env.HOSTNAME}/api/search/school/${schoolName}`)
    .then(async ({ data }) => {
      return data;
    });
  return school;
};

const useSchoolInfrastructure = async (schoolName: string) => {
  // localhost:3000/api/search/school/탕정초등학교
  const [school, setShcool] = useState();
  useEffect(() => {
    callSchool(schoolName).then((data) => setShcool(data));
  }, [schoolName]);
  useEffect(() => {
    console.log(school);
  }, [school]);
  return school;
};

export { useSchoolInfrastructure };
