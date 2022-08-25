const url = 'https://api.spacexdata.com/v3/rockets';
export const rockets = {};
const load = async () => {
  await fetch(url).then((res) => res.json()).then((data) => {
    const filterBykeys = (array) => array.map((item) => {
      const {
        id, description, rocket_name: name, rocket_type: type, flickr_images: image,
      } = item;
      return {
        id, name, type, description, image,
      };
    });
    rockets.data = [...filterBykeys(data)];
  });
  return { rockets: rockets.data };
};
export default load;
