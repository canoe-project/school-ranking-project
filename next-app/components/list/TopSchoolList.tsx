import { title } from 'process';

import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from 'store/store';

const TopSchoolList = () => {
  const aorundSchoolsRudux = useSelector((state: RootState) => state.school);

  return (
    <div>
      <p>{title}</p>
      {aorundSchoolsRudux.map((school, idx) => {
        return (
          <Fragment key={idx}>
            <p>{school.place_name}</p>
            <p>{school.infra.HP8?.length}</p>
            {/* <p>{survey}</p>
            <p>{review}</p> */}
          </Fragment>
        );
      })}
    </div>
  );
};

export default TopSchoolList;
