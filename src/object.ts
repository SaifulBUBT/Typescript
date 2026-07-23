type Coordinates = {
  lat: number;
  long: number;
};

type Address = {
  street: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  coordinates: Coordinates;
};

type Contact = {
  phone: string;
};

type User = {
  name: string;
  age: number;
  email: string;
  isPremium: boolean;
  address: Address;
  contact: Contact;
};

const user: User = {
  name: "John Doe",
  age: 25,
  email: "s.saifulbubt@gmail.com",
  isPremium: true,
  address: {
    street: "Main road",
    city: "Dhaka",
    state: "Dhaka division",
    zip: 1230,
    country: "Bangladesh",
    coordinates: {
      lat: 23.8103,
      long: 90.4125,
    },
  },
  contact: {
    phone: "+8801865484688",
  },
};

export { user };
