const url = 'https://api.spacexdata.com/v3/rockets';
const load = async () => {
  let result = [];
  await fetch(url).then((res) => res.json()).then((data) => {
    result = [...data];
  });
  return { rockets: result };
};

export default load;
