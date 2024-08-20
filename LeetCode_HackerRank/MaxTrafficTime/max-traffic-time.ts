/*
Server Traffic Monitor
- There is client-server architecture with n clients and one server. 
Each client starts its interaction with the server at the second start[i] and stops at the second end[i]. The maximum traffic is defined as the maximum number of concurrent interactions with the server.
- Find the earliest time at which the maximum number of clients are interacting with the server.
Note: The endpoint is also included in the interaction.
Example
Suppose start = [1, 6, 2,9] and end = [8, 7, 6, 10]
=> Find the earliest time with the highest traffic
*/

function getMaxTrafficTime(start: number[], end: number[]): number {
  const events: [number, number][] = [];

  for (let i = 0; i < start.length; i++) {
    events.push([start[i], 1]);
    events.push([end[i], -1]);
  }
  events.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let maxClients = 0;
  let maxTime = 0;
  let currentClients = 0;

  for (const event of events) {
    currentClients += event[1];
    if (currentClients > maxClients) {
      maxClients = currentClients;
      maxTime = event[0];
    }
  }

  return maxTime;
}

const startTime = Array.from({ length: 100000 }, (_, i) =>
  Math.floor(Math.random() * 100000000)
);
const endTime = Array.from(
  { length: 100000 },
  (_, i) =>
    startTime[i] + Math.floor(Math.random() * (100000000 - startTime[i]))
);

console.time("getMaxTrafficTime");
console.log(getMaxTrafficTime(startTime, endTime));
console.timeEnd("getMaxTrafficTime");
