import renderApi from '@api/render-api';

renderApi.auth('rnd_dfz0iQh1VXR4EhUL5geo7OImmCcB');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));