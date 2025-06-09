// Pubs will need to be in the form

export interface Pub {
  name: string; // pub name
  location: string; // google maps link for pub
  price: number; // price of pint
  url?: string; // pubs site
}

export const pubs: Pub[] = [
  {
    name: "Impala",
    location: "7-8 Liberty Street, Cork",
    price: 5.50,
    url: "https://www.instagram.com/impala_cork/"
  },
]
