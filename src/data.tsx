export type City = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Car = {
  id: number;
  model: string;
  registrationNumber: string;
  price_per_hour: number;
  price_per_day: number;
  homeCity: number;
};

export type Extra = "GPS" | "Child Seat" | "Wi-Fi" | "Extra Driver";

export type Booking = {
  carId: number;
  customerId: number;
  startDate: Date;
  endDate: Date;
  extras: Extra[];
};

export const cities: City[] = [
  {
    id: 1,
    name: "Oslo",
    country: "Norway",
    latitude: 59.9133301,
    longitude: 10.7389708,
  },
  {
    id: 2,
    name: "Bergen",
    country: "Norway",
    latitude: 60.3912621,
    longitude: 5.3220544,
  },
  {
    id: 3,
    name: "Trondheim",
    country: "Norway",
    latitude: 63.430565,
    longitude: 10.3950637,
  },
  {
    id: 4,
    name: "Stavanger",
    country: "Norway",
    latitude: 58.9699755,
    longitude: 5.7331074,
  },
];

export const cars: Car[] = [
  {
    id: 1,
    model: "VW Golf",
    registrationNumber: "ABC123",
    price_per_hour: 100,
    price_per_day: 1000,
    homeCity: 1,
  },
  {
    id: 2,
    model: "Audi A3",
    registrationNumber: "DEF456",
    price_per_hour: 200,
    price_per_day: 2000,
    homeCity: 2,
  },
  {
    id: 3,
    model: "Skoda Octavia",
    registrationNumber: "GHI789",
    price_per_hour: 300,
    price_per_day: 3000,
    homeCity: 3,
  },
  {
    id: 4,
    model: "Mercedes C",
    registrationNumber: "JKL012",
    price_per_hour: 400,
    price_per_day: 4000,
    homeCity: 1,
  },
  {
    id: 5,
    model: "BMW X5",
    registrationNumber: "MNO345",
    price_per_hour: 500,
    price_per_day: 5000,
    homeCity: 2,
  },
  {
    id: 6,
    model: "Tesla Model S",
    registrationNumber: "PQR678",
    price_per_hour: 600,
    price_per_day: 6000,
    homeCity: 3,
  },
  {
    id: 7,
    model: "Volvo XC90",
    registrationNumber: "STU901",
    price_per_hour: 700,
    price_per_day: 7000,
    homeCity: 1,
  },
  {
    id: 8,
    model: "Ford Focus",
    registrationNumber: "VWX234",
    price_per_hour: 150,
    price_per_day: 1500,
    homeCity: 2,
  },
  {
    id: 9,
    model: "Toyota Corolla",
    registrationNumber: "YZA567",
    price_per_hour: 250,
    price_per_day: 2500,
    homeCity: 3,
  },
  {
    id: 10,
    model: "Honda Civic",
    registrationNumber: "BCD890",
    price_per_hour: 350,
    price_per_day: 3500,
    homeCity: 1,
  },
];

export const extraPrices = [
  { name: "GPS", price: 50 },
  { name: "Child Seat", price: 100 },
  { name: "Wi-Fi", price: 200 },
  { name: "Extra Driver", price: 500 },
];

export const bookings: Booking[] = [
  {
    carId: 1,
    customerId: 1,
    startDate: new Date("2021-10-01T10:00:00"),
    endDate: new Date("2021-10-01T12:00:00"),
    extras: [],
  },
  {
    carId: 2,
    customerId: 2,
    startDate: new Date("2021-10-02T09:00:00"),
    endDate: new Date("2021-10-02T18:00:00"),
    extras: ["GPS", "Child Seat"],
  },
  {
    carId: 3,
    customerId: 3,
    startDate: new Date("2021-10-03T08:00:00"),
    endDate: new Date("2021-10-04T08:00:00"),
    extras: ["Wi-Fi"],
  },
  {
    carId: 4,
    customerId: 4,
    startDate: new Date("2021-10-05T14:00:00"),
    endDate: new Date("2021-10-06T14:00:00"),
    extras: ["GPS", "Extra Driver"],
  },
  {
    carId: 5,
    customerId: 5,
    startDate: new Date("2021-10-07T07:00:00"),
    endDate: new Date("2021-10-08T19:00:00"),
    extras: [],
  },
  {
    carId: 1,
    customerId: 2,
    startDate: new Date("2021-10-09T10:30:00"),
    endDate: new Date("2021-10-09T16:30:00"),
    extras: ["Child Seat", "Wi-Fi"],
  },
  {
    carId: 3,
    customerId: 1,
    startDate: new Date("2021-10-10T10:00:00"),
    endDate: new Date("2021-10-10T14:00:00"),
    extras: ["GPS"],
  },
  {
    carId: 4,
    customerId: 3,
    startDate: new Date("2021-10-11T09:00:00"),
    endDate: new Date("2021-10-11T17:00:00"),
    extras: ["Extra Driver"],
  },
];

export const customers: Customer[] = [
  {
    id: 1,
    name: "Nils Olsen",
    email: "nils@olsen.com",
    phone: "12345678",
    address: "Lykkeveien 1, Oslo",
  },
  {
    id: 2,
    name: "Kari Larsen",
    email: "kari@larsen.com",
    phone: "87654321",
    address: "Regnveien 2, Bergen",
  },
  {
    id: 3,
    name: "Jens Pettersen",
    email: "jens@pettersen.com",
    phone: "23456789",
    address: "Stjerneveien 3, Trondheim",
  },
  {
    id: 4,
    name: "Eva Johansen",
    email: "eva@johansen.com",
    phone: "98765432",
    address: "Blomstveien 4, Stavanger",
  },
  {
    id: 5,
    name: "Oscar Nordmann",
    email: "oscar@nordmann.com",
    phone: "34567890",
    address: "Fjellveien 5, Tromsø",
  },
  {
    id: 6,
    name: "Ida Eriksen",
    email: "ida@eriksen.com",
    phone: "45678901",
    address: "Elveveien 6, Kristiansand",
  },
  {
    id: 7,
    name: "Thomas Solberg",
    email: "thomas@solberg.com",
    phone: "56789012",
    address: "Granveien 7, Fredrikstad",
  },
  {
    id: 8,
    name: "Sara Vik",
    email: "sara@vik.com",
    phone: "67890123",
    address: "Høydeveien 8, Drammen",
  },
  {
    id: 9,
    name: "Ane Dahl",
    email: "ane@dahl.com",
    phone: "78901234",
    address: "Dalveien 9, Sarpsborg",
  },
  {
    id: 10,
    name: "Per Simonsen",
    email: "per@simonsen.com",
    phone: "89012345",
    address: "Kløverveien 10, Skien",
  },
];
