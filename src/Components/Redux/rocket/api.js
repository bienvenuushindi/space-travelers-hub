const url = 'https://api.spacexdata.com/v3/rockets';
const load = async () => {
  let result = [];
  await fetch(url).then((res) => res.json()).then((data) => {
    const filterBykeys = (array) => array.map((item) => {
      const {
        id, description, rocket_name: name, rocket_type: type, flickr_images: image,
      } = item;
      return {
        id, name, type, description, image,
      };
    });
    result = [...filterBykeys(data)];
  });
  return { rockets: result };
};

export default load;
