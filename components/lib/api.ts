import axios from 'axios';

export function getURL(path = '') {
  return `${'https://auth-test-api-techinnover.herokuapp.com/api/v1'}${path}`;
}

// Helper to make GET requests the endpoint
export async function makeRequest(
  path: string,
  method: string = 'GET',
  body: { [key: string]: string },
) {
  const requestUrl = getURL(path);
  const response = await axios({
    method,
    url: requestUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
  const data = await response.data;
  return data;
}
