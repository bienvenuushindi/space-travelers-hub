/* eslint-disable camelcase */

const url = 'https://api.spacexdata.com/v3/missions';
const getMissionList = async () => {
  let result = [];
  await fetch(url).then((res) => res.json()).then((data) => {
    const filterBykeys = (array) => array.map((item) => {
      const {
        mission_id, description, mission_name, joined,
      } = item;
      return {
        mission_id, mission_name, description, joined,
      };
    });
    result = [...filterBykeys(data)];
  });
  return { missions: result };
};

export default getMissionList;
