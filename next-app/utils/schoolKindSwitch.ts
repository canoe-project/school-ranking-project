const schoolKindSwitch = (SCHUL_KND_SC_NM: string) => {
  enum Kinds {
    els = 'elsTimetable',
    mis = 'misTimetable',
    his = 'hisTimetable',
    sps = 'spsTimetable',
  }
  switch (SCHUL_KND_SC_NM) {
    case '초등학교':
      return Kinds.els;
    case '중학교':
      return Kinds.mis;
    case '고등학교':
      return Kinds.his;
    case '특수학교':
      return Kinds.sps;
    default:
      return '';
  }
};

export default schoolKindSwitch;
