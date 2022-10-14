import { School } from '@prisma/client';
import axios from 'axios';

const callSchool = async (schoolName: string) => {
  const school: School = await axios
    .get(`${process.env.HOSTNAME}/api/search/school/${schoolName}`)
    .then(async ({ data }) => {
      return data[0];
    });
  return school;
};

export default callSchool;
