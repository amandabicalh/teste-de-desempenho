import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 30 },
    { duration: '10s', target: 50 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  const res = http.post('http://localhost:3000/checkout/crypto');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}
