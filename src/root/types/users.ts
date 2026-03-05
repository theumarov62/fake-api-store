interface Name {
  firstname: string;
  lastname: string;
}
interface Geolocation {
  lat: string;
  long: string;
}
interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: string;
  zipcode: string;
}
export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
}
