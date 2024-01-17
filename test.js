// Ex1: === and == operator
// Nêu ví dụ về so sánh == và === để thấy được cái nào chặt chẽ hơn

// Ex2: Ko chay code viet ra ket qua

undefined == null;
undefined === null;

"" == undefined;
"" === undefined;

"" == null;
"" === null;

0 == "";
0 === "";

// Ex3: Tạo một class tên là Car gồm các thuộc tính
// id, name, brand, year, maxVelocity, acceleration

// Ex4: Cho một array sau, hãy dựa trên array này,
// tạo ra một array mới với toàn bộ các phần tử là các instance của Car
const sourceURL = "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/cars";
// {id, name, year, acceleration, max_velocity, brand} => Car{...maxVelocity}
const carList = [
  {
    year: "2024-01-16T18:27:27.521Z",
    name: "Sonya Brekke I",
    brand: "Schimmel Point",
    acceleration: 33278,
    max_velocity: 61399,
    id: "1",
  },
  {
    year: "2024-01-16T22:43:05.590Z",
    name: "Alonzo Walsh",
    brand: "Reagan Terrace",
    acceleration: 352,
    max_velocity: 40151,
    id: "2",
  },
  {
    year: "2024-01-17T00:57:13.844Z",
    name: "Mrs. Angela Hammes",
    brand: "Gregory Loop",
    acceleration: 6358,
    max_velocity: 64863,
    id: "3",
  },
  {
    year: "2024-01-16T20:50:15.235Z",
    name: "Shaun Roob",
    brand: "Heller Row",
    acceleration: 71674,
    max_velocity: 73996,
    id: "4",
  },
  {
    year: "2024-01-16T12:57:13.681Z",
    name: "Mitchell Daniel I",
    brand: "Morar Canyon",
    acceleration: 43527,
    max_velocity: 52083,
    id: "5",
  },
  {
    year: "2024-01-17T04:40:11.578Z",
    name: "Mr. Johnnie Boyer",
    brand: "Murazik Plain",
    acceleration: 74994,
    max_velocity: 81453,
    id: "6",
  },
  {
    year: "2024-01-16T23:51:53.833Z",
    name: "Emma Huels",
    brand: "Waelchi Points",
    acceleration: 48988,
    max_velocity: 216,
    id: "7",
  },
  {
    year: "2024-01-17T11:54:50.115Z",
    name: "Christy Reilly",
    brand: "Tessie Via",
    acceleration: 75097,
    max_velocity: 53927,
    id: "8",
  },
  {
    year: "2024-01-16T22:12:07.551Z",
    name: "Ken Monahan",
    brand: "Kasandra Ville",
    acceleration: 72608,
    max_velocity: 29081,
    id: "9",
  },
  {
    year: "2024-01-16T17:38:43.067Z",
    name: "Toni Leffler",
    brand: "Tate Keys",
    acceleration: 9931,
    max_velocity: 20095,
    id: "10",
  },
  {
    year: "2024-01-17T07:44:55.156Z",
    name: "Kerry Koch",
    brand: "Era Summit",
    acceleration: 37332,
    max_velocity: 42158,
    id: "11",
  },
  {
    year: "2024-01-16T19:37:14.735Z",
    name: "Sophie Wiegand",
    brand: "Mills Curve",
    acceleration: 13599,
    max_velocity: 10637,
    id: "12",
  },
  {
    year: "2024-01-16T19:45:47.266Z",
    name: "Claire Rosenbaum",
    brand: "Bailey Mills",
    acceleration: 80973,
    max_velocity: 80411,
    id: "13",
  },
  {
    year: "2024-01-17T10:46:26.045Z",
    name: "Angel Bergnaum",
    brand: "Alejandrin Harbors",
    acceleration: 3719,
    max_velocity: 79554,
    id: "14",
  },
  {
    year: "2024-01-17T08:28:32.359Z",
    name: "Gayle Nikolaus",
    brand: "Huels Fort",
    acceleration: 59546,
    max_velocity: 61148,
    id: "15",
  },
  {
    year: "2024-01-16T13:39:05.499Z",
    name: "Mr. Vera Kertzmann",
    brand: "Tromp Lake",
    acceleration: 26150,
    max_velocity: 83973,
    id: "16",
  },
  {
    year: "2024-01-16T15:53:57.404Z",
    name: "Olive Price",
    brand: "Runolfsdottir Fork",
    acceleration: 19903,
    max_velocity: 67,
    id: "17",
  },
  {
    year: "2024-01-16T15:30:06.766Z",
    name: "Mrs. Brent Abshire",
    brand: "Anderson Rue",
    acceleration: 37667,
    max_velocity: 63528,
    id: "18",
  },
  {
    year: "2024-01-16T21:31:06.566Z",
    name: "Kate Padberg",
    brand: "Caitlyn Shores",
    acceleration: 85445,
    max_velocity: 27672,
    id: "19",
  },
  {
    year: "2024-01-17T04:43:20.557Z",
    name: "Rafael Sipes",
    brand: "Graham Lights",
    acceleration: 19747,
    max_velocity: 93769,
    id: "20",
  },
  {
    year: "2024-01-17T10:18:26.510Z",
    name: "Phillip Willms",
    brand: "Conor Loop",
    acceleration: 83953,
    max_velocity: 98017,
    id: "21",
  },
  {
    year: "2024-01-17T05:31:00.502Z",
    name: "Everett Schmitt",
    brand: "Kihn Green",
    acceleration: 92805,
    max_velocity: 80223,
    id: "22",
  },
  {
    year: "2024-01-16T19:00:00.040Z",
    name: "Kristopher Bergnaum",
    brand: "Carmela Roads",
    acceleration: 28004,
    max_velocity: 84110,
    id: "23",
  },
  {
    year: "2024-01-16T13:25:11.624Z",
    name: "Dr. Sheldon Bogan",
    brand: "Lamont Point",
    acceleration: 17109,
    max_velocity: 86008,
    id: "24",
  },
  {
    year: "2024-01-17T03:46:41.539Z",
    name: "Darrel Hyatt",
    brand: "Edyth Ridges",
    acceleration: 40449,
    max_velocity: 64470,
    id: "25",
  },
  {
    year: "2024-01-17T02:19:37.284Z",
    name: "Louis Kulas",
    brand: "Denesik Glen",
    acceleration: 2932,
    max_velocity: 11488,
    id: "26",
  },
  {
    year: "2024-01-17T03:05:05.397Z",
    name: "Bethany Brown",
    brand: "Jaleel Stream",
    acceleration: 14482,
    max_velocity: 20566,
    id: "27",
  },
  {
    year: "2024-01-16T23:25:51.063Z",
    name: "Norma Homenick",
    brand: "Ben Roads",
    acceleration: 78485,
    max_velocity: 84363,
    id: "28",
  },
  {
    year: "2024-01-16T17:18:59.770Z",
    name: "Lorenzo Wehner I",
    brand: "Alec Dam",
    acceleration: 29728,
    max_velocity: 52856,
    id: "29",
  },
  {
    year: "2024-01-16T22:33:05.377Z",
    name: "Elijah Spinka",
    brand: "Corwin Lock",
    acceleration: 35496,
    max_velocity: 70167,
    id: "30",
  },
];
fetch(url).then(res => res.json()).then((data) => {console.log(data)});

class Car {
    constructor(props) {
        this.laslf = props.alsdfls;
        
    }
}

// Ex5: Tạo một project reactjs mới với tên project là my-cars
// tại trang chủ copy danh sách cars đã có ở bài 4 sang và hiển thị danh sách cars theo bảng với các cột

// id | name | brand | year | acceleration | max velocity
