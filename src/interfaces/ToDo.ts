export interface ToDo {
  id: any;
  email: any;
  username: any;
  password: any;
  name: {
    firstname: any;
    lastname: any;
  };
  address: {
    city: any;
    street: any;
    number: any;
    zipcode: any;
    geolocation: {
      lat: any;
      long: any;
    };
  };
  phone: any;
}
