// K6 Performance Testing

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 50, // Virtual Users
    duration: '40s', // Durasi pengujian
};

export default function () {
    const url = 'http://localhost:3000'; // Ganti dengan endpoint Anda
    const res = http.get(url);
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
    sleep(1);
}
