export interface ErrorResponse {
  message: string,
}

// breeds: []
// height: 357
// id: "2bc"
// url: "https://cdn2.thecatapi.com/images/2bc.jpg"
// width: 500

export type Cat = {
  breeds: Array<any>;
  height: number;
  id: string;
  url: string;
  width: number;
}