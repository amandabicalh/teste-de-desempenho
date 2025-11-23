import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 20,
  duration: '30s',
};

export default function () {
  const res = http.post('http://localhost:3000/checkout/simple');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}
