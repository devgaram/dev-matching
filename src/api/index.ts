import { ErrorResponse, Cat } from '../types'

export default class Api {
  origin: string;
  constructor() {
    this.origin = 'https://api.thecatapi.com/v1';
  }

  async request<T>(url: string): Promise<T> {
    try {
      const response: Response = await fetch(`${this.origin}/${url}`, {
        headers: {
          'x-api-key': '2ba91c15-c830-41c7-bc6c-743c85368824'
        }
      });
      
      if (response.ok) {
        const data: T = await response.json();
        return data;
      } else {
        const error: ErrorResponse = await response.json();
        throw Error(error.message);
      }
      
    } catch (error) {
      throw error;
    }
  }

  async getRandom(): Promise<Array<Cat>> {
    try {
      const data = await this.request<Array<Cat>>('images/search?limit=20');
      return data;
    } catch(error) {

    }
  }
}

