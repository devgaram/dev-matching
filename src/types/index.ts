export interface ErrorResponse {
  message: string,
}

// breeds: []
// height: 357
// id: "2bc"
// url: "https://cdn2.thecatapi.com/images/2bc.jpg"
// width: 500

export type Weight = {
  imperial: string;
  metric: string;
}

export type Breed = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  weight: Weight;
}

export type Cat = {
  breeds: Array<Partial<Breed>>;
  height: number;
  id: string;
  url: string;
  width: number;
}