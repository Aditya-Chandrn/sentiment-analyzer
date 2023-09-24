const randomData = [
  {
    callId: "Call1",
    productId: "Product1",
    empId: "Employee1",
    customerId: "Customer1",
    callRating: 4.2,
    callLength: "10:30" // 10 minutes and 30 seconds
  },
  {
    callId: "Call2",
    productId: "Product2",
    empId: "Employee2",
    customerId: "Customer2",
    callRating: 3.5,
    callLength: "15:45" // 15 minutes and 45 seconds
  },
  {
    callId: "Call3",
    productId: "Product3",
    empId: "Employee3",
    customerId: "Customer3",
    callRating: 4.8,
    callLength: "8:15" // 8 minutes and 15 seconds
  },
  {
    callId: "Call4",
    productId: "Product4",
    empId: "Employee4",
    customerId: "Customer4",
    callRating: 3.9,
    callLength: "20:10" // 20 minutes and 10 seconds
  },
  {
    callId: "Call5",
    productId: "Product5",
    empId: "Employee5",
    customerId: "Customer5",
    callRating: 4.1,
    callLength: "14:20" // 14 minutes and 20 seconds
  },
  {
    callId: "Call6",
    productId: "Product6",
    empId: "Employee6",
    customerId: "Customer6",
    callRating: 3.7,
    callLength: "7:45" // 7 minutes and 45 seconds
  },
  {
    callId: "Call7",
    productId: "Product7",
    empId: "Employee7",
    customerId: "Customer7",
    callRating: 4.5,
    callLength: "11:35" // 11 minutes and 35 seconds
  },
  {
    callId: "Call8",
    productId: "Product8",
    empId: "Employee8",
    customerId: "Customer8",
    callRating: 3.0,
    callLength: "18:50" // 18 minutes and 50 seconds
  },
  {
    callId: "Call9",
    productId: "Product9",
    empId: "Employee9",
    customerId: "Customer9",
    callRating: 4.9,
    callLength: "13:15" // 13 minutes and 15 seconds
  },
  {
    callId: "Call10",
    productId: "Product10",
    empId: "Employee10",
    customerId: "Customer10",
    callRating: 3.8,
    callLength: "16:25" // 16 minutes and 25 seconds
  },
  {
    callId: "Call11",
    productId: "Product11",
    empId: "Employee11",
    customerId: "Customer11",
    callRating: 4.0,
    callLength: "10:05" // 10 minutes and 5 seconds
  },
  {
    callId: "Call12",
    productId: "Product12",
    empId: "Employee12",
    customerId: "Customer12",
    callRating: 3.3,
    callLength: "8:30" // 8 minutes and 30 seconds
  },
  {
    callId: "Call13",
    productId: "Product13",
    empId: "Employee13",
    customerId: "Customer13",
    callRating: 4.7,
    callLength: "20:15" // 20 minutes and 15 seconds
  },
  {
    callId: "Call14",
    productId: "Product14",
    empId: "Employee14",
    customerId: "Customer14",
    callRating: 3.6,
    callLength: "14:55" // 14 minutes and 55 seconds
  },
  {
    callId: "Call15",
    productId: "Product15",
    empId: "Employee15",
    customerId: "Customer15",
    callRating: 4.2,
    callLength: "7:10" // 7 minutes and 10 seconds
  },
  {
    callId: "Call16",
    productId: "Product16",
    empId: "Employee16",
    customerId: "Customer16",
    callRating: 3.7,
    callLength: "11:20" // 11 minutes and 20 seconds
  },
  {
    callId: "Call17",
    productId: "Product17",
    empId: "Employee17",
    customerId: "Customer17",
    callRating: 4.9,
    callLength: "18:05" // 18 minutes and 5 seconds
  },
  {
    callId: "Call18",
    productId: "Product18",
    empId: "Employee18",
    customerId: "Customer18",
    callRating: 3.2,
    callLength: "13:50" // 13 minutes and 50 seconds
  },
  {
    callId: "Call19",
    productId: "Product19",
    empId: "Employee19",
    customerId: "Customer19",
    callRating: 4.8,
    callLength: "16:40" // 16 minutes and 40 seconds
  },
  {
    callId: "Call20",
    productId: "Product20",
    empId: "Employee20",
    customerId: "Customer20",
    callRating: 3.5,
    callLength: "22:15" // 22 minutes and 15 seconds
  },
  {
    callId: "Call21",
    productId: "Product21",
    empId: "Employee21",
    customerId: "Customer21",
    callRating: 4.4,
    callLength: "10:55" // 10 minutes and 55 seconds
  },
  {
    callId: "Call22",
    productId: "Product22",
    empId: "Employee22",
    customerId: "Customer22",
    callRating: 3.1,
    callLength: "9:20" // 9 minutes and 20 seconds
  },
  {
    callId: "Call23",
    productId: "Product23",
    empId: "Employee23",
    customerId: "Customer23",
    callRating: 4.3,
    callLength: "14:05" // 14 minutes and 5 seconds
  },
  {
    callId: "Call24",
    productId: "Product24",
    empId: "Employee24",
    customerId: "Customer24",
    callRating: 3.4,
    callLength: "7:35" // 7 minutes and 35 seconds
  },
  {
    callId: "Call25",
    productId: "Product25",
    empId: "Employee25",
    customerId: "Customer25",
    callRating: 4.6,
    callLength: "11:45" // 11 minutes and 45 seconds
  },
  {
    callId: "Call26",
    productId: "Product26",
    empId: "Employee26",
    customerId: "Customer26",
    callRating: 3.9,
    callLength: "18:30" // 18 minutes and 30 seconds
  },
  {
    callId: "Call27",
    productId: "Product27",
    empId: "Employee27",
    customerId: "Customer27",
    callRating: 4.1,
    callLength: "13:05" // 13 minutes and 5 seconds
  },
  {
    callId: "Call28",
    productId: "Product28",
    empId: "Employee28",
    customerId: "Customer28",
    callRating: 3.3,
    callLength: "16:50" // 16 minutes and 50 seconds
  },
  {
    callId: "Call29",
    productId: "Product29",
    empId: "Employee29",
    customerId: "Customer29",
    callRating: 4.7,
    callLength: "22:40" // 22 minutes and 40 seconds
  },
  {
    callId: "Call30",
    productId: "Product30",
    empId: "Employee30",
    customerId: "Customer30",
    callRating: 3.6,
    callLength: "10:15" // 10 minutes and 15 seconds
  },
  {
    callId: "Call31",
    productId: "Product31",
    empId: "Employee31",
    customerId: "Customer31",
    callRating: 4.4,
    callLength: "12:30" // 12 minutes and 30 seconds
  },
  {
    callId: "Call32",
    productId: "Product32",
    empId: "Employee32",
    customerId: "Customer32",
    callRating: 3.1,
    callLength: "9:15" // 9 minutes and 15 seconds
  },
  {
    callId: "Call33",
    productId: "Product33",
    empId: "Employee33",
    customerId: "Customer33",
    callRating: 4.3,
    callLength: "14:55" // 14 minutes and 55 seconds
  },
  {
    callId: "Call34",
    productId: "Product34",
    empId: "Employee34",
    customerId: "Customer34",
    callRating: 3.4,
    callLength: "7:40" // 7 minutes and 40 seconds
  },
  {
    callId: "Call35",
    productId: "Product35",
    empId: "Employee35",
    customerId: "Customer35",
    callRating: 4.6,
    callLength: "11:10" // 11 minutes and 10 seconds
  },
  {
    callId: "Call36",
    productId: "Product36",
    empId: "Employee36",
    customerId: "Customer36",
    callRating: 3.2,
    callLength: "18:25" // 18 minutes and 25 seconds
  },
  {
    callId: "Call37",
    productId: "Product37",
    empId: "Employee37",
    customerId: "Customer37",
    callRating: 4.8,
    callLength: "13:45" // 13 minutes and 45 seconds
  },
  {
    callId: "Call38",
    productId: "Product38",
    empId: "Employee38",
    customerId: "Customer38",
    callRating: 3.9,
    callLength: "16:15" // 16 minutes and 15 seconds
  },
  {
    callId: "Call39",
    productId: "Product39",
    empId: "Employee39",
    customerId: "Customer39",
    callRating: 4.1,
    callLength: "22:20" // 22 minutes and 20 seconds
  },
  {
    callId: "Call40",
    productId: "Product40",
    empId: "Employee40",
    customerId: "Customer40",
    callRating: 3.7,
    callLength: "10:50" // 10 minutes and 50 seconds
  },
];

export {randomData};
