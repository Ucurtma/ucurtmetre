export const isProduction = window && window.app_env === 'production';
const backendUrl = !isProduction
  ? 'https://ucurtma-backend-test.herokuapp.com'
  : 'https://api.ucurtmaprojesi.com';

const config = {
  endpoint: `${backendUrl}/graphql`,
};

export default config;
