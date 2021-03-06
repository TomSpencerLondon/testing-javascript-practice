const createUrl = (lat, lon) => {
  return lat && lon
    ? `https://www.google.co.uk/maps/@${lat},${lon},12.14z`
    : '';
};

const setLocation = (window, location) => {
  window.location = location;
};

const onSuccess = position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = createUrl(lat, lon);

  setLocation(window, url);
};

const onError = error => {
  document.getElementById('error').innerHTML = error.message;
};

const locate = () => {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

export { locate };
