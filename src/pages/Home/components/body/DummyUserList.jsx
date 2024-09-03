const DUMMY_USERS = [
  {
    createdAt: "2024-01-12T05:12:34.645Z",
    name: "Alex Smith",
    firstname: "Alex",
    lastname: "Smith",
    email: "alex45@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "1",
  },
  {
    createdAt: "2024-03-11T11:15:23.645Z",
    name: "Jordan Brown",
    firstname: "Jordan",
    lastname: "Brown",
    email: "jordan.brown@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "2",
  },
  {
    createdAt: "2024-04-10T09:05:17.645Z",
    name: "Taylor Davis",
    firstname: "Taylor",
    lastname: "Davis",
    email: "taylor99@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "3",
  },
  {
    createdAt: "2024-02-22T14:24:58.645Z",
    name: "Morgan Garcia",
    firstname: "Morgan",
    lastname: "Garcia",
    email: "morgan.g@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "4",
  },
  {
    createdAt: "2024-06-14T18:48:32.645Z",
    name: "Sam Williams",
    firstname: "Sam",
    lastname: "Williams",
    email: "sam123@outlook.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "5",
  },
  {
    createdAt: "2024-08-23T10:55:11.645Z",
    name: "Jamie Johnson",
    firstname: "Jamie",
    lastname: "Johnson",
    email: "jamie_j@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "6",
  },
  {
    createdAt: "2024-07-30T21:20:48.645Z",
    name: "Cameron Miller",
    firstname: "Cameron",
    lastname: "Miller",
    email: "cam.miller99@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "7",
  },
  {
    createdAt: "2024-05-17T07:05:49.645Z",
    name: "Drew Davis",
    firstname: "Drew",
    lastname: "Davis",
    email: "drew_davis@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "8",
  },
  {
    createdAt: "2024-03-08T12:34:56.645Z",
    name: "Casey Jones",
    firstname: "Casey",
    lastname: "Jones",
    email: "caseyjones@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "9",
  },
  {
    createdAt: "2024-09-15T15:23:45.645Z",
    name: "Alex Johnson",
    firstname: "Alex",
    lastname: "Johnson",
    email: "alexjohnson@outlook.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "10",
  },
  {
    createdAt: "2024-01-04T02:22:44.645Z",
    name: "Taylor Smith",
    firstname: "Taylor",
    lastname: "Smith",
    email: "taylor.smith12@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "11",
  },
  {
    createdAt: "2024-10-09T09:45:23.645Z",
    name: "Morgan Lopez",
    firstname: "Morgan",
    lastname: "Lopez",
    email: "morgan.lopez@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "12",
  },
  {
    createdAt: "2024-04-18T17:18:37.645Z",
    name: "Sam Lee",
    firstname: "Sam",
    lastname: "Lee",
    email: "sam.lee56@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "13",
  },
  {
    createdAt: "2024-11-22T08:14:29.645Z",
    name: "Jamie White",
    firstname: "Jamie",
    lastname: "White",
    email: "jamie.white@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "14",
  },
  {
    createdAt: "2024-02-27T19:25:34.645Z",
    name: "Cameron Martinez",
    firstname: "Cameron",
    lastname: "Martinez",
    email: "cameronm@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "15",
  },
  {
    createdAt: "2024-06-10T03:11:27.645Z",
    name: "Drew Brown",
    firstname: "Drew",
    lastname: "Brown",
    email: "drew.brown@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "16",
  },
  {
    createdAt: "2024-05-19T13:48:11.645Z",
    name: "Casey Taylor",
    firstname: "Casey",
    lastname: "Taylor",
    email: "caseytaylor@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "17",
  },
  {
    createdAt: "2024-08-13T21:07:33.645Z",
    name: "Alex Davis",
    firstname: "Alex",
    lastname: "Davis",
    email: "alexdavis@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "18",
  },
  {
    createdAt: "2024-03-05T16:36:22.645Z",
    name: "Jordan Moore",
    firstname: "Jordan",
    lastname: "Moore",
    email: "jordan.moore@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "19",
  },
  {
    createdAt: "2024-09-25T04:14:55.645Z",
    name: "Taylor Miller",
    firstname: "Taylor",
    lastname: "Miller",
    email: "taylormiller@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "20",
  },
  {
    createdAt: "2024-07-14T15:08:44.645Z",
    name: "Morgan Thompson",
    firstname: "Morgan",
    lastname: "Thompson",
    email: "morgant@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "21",
  },
  {
    createdAt: "2024-12-18T06:02:12.645Z",
    name: "Sam Gonzalez",
    firstname: "Sam",
    lastname: "Gonzalez",
    email: "sam.gonzalez99@outlook.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "22",
  },
  {
    createdAt: "2024-11-03T20:56:33.645Z",
    name: "Jamie Robinson",
    firstname: "Jamie",
    lastname: "Robinson",
    email: "jamie.robinson@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "23",
  },
  {
    createdAt: "2024-04-01T09:22:40.645Z",
    name: "Cameron Clark",
    firstname: "Cameron",
    lastname: "Clark",
    email: "cameron.clark@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "24",
  },
  {
    createdAt: "2024-10-27T01:50:20.645Z",
    name: "Drew Lewis",
    firstname: "Drew",
    lastname: "Lewis",
    email: "drew.lewis@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "25",
  },
  {
    createdAt: "2024-08-08T14:11:37.645Z",
    name: "Casey Walker",
    firstname: "Casey",
    lastname: "Walker",
    email: "casey.walker@outlook.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "26",
  },
  {
    createdAt: "2024-09-02T13:19:14.645Z",
    name: "Alex Harris",
    firstname: "Alex",
    lastname: "Harris",
    email: "alexharris99@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "27",
  },
  {
    createdAt: "2024-05-24T03:45:39.645Z",
    name: "Jordan Hall",
    firstname: "Jordan",
    lastname: "Hall",
    email: "jordanhall@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "28",
  },
  {
    createdAt: "2024-12-29T22:10:16.645Z",
    name: "Taylor Allen",
    firstname: "Taylor",
    lastname: "Allen",
    email: "taylor.allen@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "29",
  },
  {
    createdAt: "2024-01-16T10:29:47.645Z",
    name: "Morgan King",
    firstname: "Morgan",
    lastname: "King",
    email: "morgan.king@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "30",
  },
  {
    createdAt: "2024-02-08T16:53:01.645Z",
    name: "Sam Wright",
    firstname: "Sam",
    lastname: "Wright",
    email: "sam.wright@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "31",
  },
  {
    createdAt: "2024-03-22T05:18:03.645Z",
    name: "Jamie Scott",
    firstname: "Jamie",
    lastname: "Scott",
    email: "jamie.scott@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "32",
  },
  {
    createdAt: "2024-07-09T19:35:29.645Z",
    name: "Cameron Adams",
    firstname: "Cameron",
    lastname: "Adams",
    email: "cameron.adams@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "33",
  },
  {
    createdAt: "2024-11-12T11:09:18.645Z",
    name: "Drew Mitchell",
    firstname: "Drew",
    lastname: "Mitchell",
    email: "drew.mitchell@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "34",
  },
  {
    createdAt: "2024-04-14T12:06:54.645Z",
    name: "Casey Young",
    firstname: "Casey",
    lastname: "Young",
    email: "casey.young@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "35",
  },
  {
    createdAt: "2024-09-19T23:42:31.645Z",
    name: "Alex Hernandez",
    firstname: "Alex",
    lastname: "Hernandez",
    email: "alex.hernandez@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "36",
  },
  {
    createdAt: "2024-10-05T01:14:19.645Z",
    name: "Jordan Roberts",
    firstname: "Jordan",
    lastname: "Roberts",
    email: "jordan.roberts@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "37",
  },
  {
    createdAt: "2024-05-02T07:39:53.645Z",
    name: "Taylor Hernandez",
    firstname: "Taylor",
    lastname: "Hernandez",
    email: "taylor.h@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "38",
  },
  {
    createdAt: "2024-01-25T13:31:38.645Z",
    name: "Morgan Ramirez",
    firstname: "Morgan",
    lastname: "Ramirez",
    email: "morganr@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "39",
  },
  {
    createdAt: "2024-02-15T20:47:01.645Z",
    name: "Sam Campbell",
    firstname: "Sam",
    lastname: "Campbell",
    email: "samcampbell@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "40",
  },
  {
    createdAt: "2024-06-01T15:25:43.645Z",
    name: "Jamie Mitchell",
    firstname: "Jamie",
    lastname: "Mitchell",
    email: "jmitchell@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "41",
  },
  {
    createdAt: "2024-11-20T09:37:24.645Z",
    name: "Cameron Carter",
    firstname: "Cameron",
    lastname: "Carter",
    email: "cameron.carter@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "42",
  },
  {
    createdAt: "2024-08-29T04:11:56.645Z",
    name: "Drew Evans",
    firstname: "Drew",
    lastname: "Evans",
    email: "drew.e@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "43",
  },
  {
    createdAt: "2024-03-02T12:29:41.645Z",
    name: "Casey Nelson",
    firstname: "Casey",
    lastname: "Nelson",
    email: "casey.nelson@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "44",
  },
  {
    createdAt: "2024-12-25T18:17:28.645Z",
    name: "Alex Perez",
    firstname: "Alex",
    lastname: "Perez",
    email: "alexperez@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "45",
  },
  {
    createdAt: "2024-07-22T22:44:10.645Z",
    name: "Jordan Sanchez",
    firstname: "Jordan",
    lastname: "Sanchez",
    email: "jordansanchez@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "46",
  },
  {
    createdAt: "2024-05-07T23:09:52.645Z",
    name: "Taylor King",
    firstname: "Taylor",
    lastname: "King",
    email: "tking@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "47",
  },
  {
    createdAt: "2024-09-30T03:58:11.645Z",
    name: "Morgan Hill",
    firstname: "Morgan",
    lastname: "Hill",
    email: "morgan.hill@hotmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "48",
  },
  {
    createdAt: "2024-02-03T08:06:35.645Z",
    name: "Sam Harris",
    firstname: "Sam",
    lastname: "Harris",
    email: "samharris@yahoo.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "49",
  },
  {
    createdAt: "2024-06-18T07:13:14.645Z",
    name: "Jamie Anderson",
    firstname: "Jamie",
    lastname: "Anderson",
    email: "jamie.anderson@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/424.jpg",
    id: "50",
  },
];

export default DUMMY_USERS;
