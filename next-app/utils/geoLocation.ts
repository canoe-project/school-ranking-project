const geolocation = () => {
  let location;

  function success(pos: { coords: { latitude: number; longitude: number } }) {
    location = {
      loaded: true,
      coordinates: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      },
    };
  }

  function error(err: { code: number; message: string }) {
    location = {
      coordinates: { lat: 0, lng: 0 },
      loaded: true,
      err,
    };
  }

  navigator.geolocation.getCurrentPosition(success, error);

  return location;
};

export default geolocation;
