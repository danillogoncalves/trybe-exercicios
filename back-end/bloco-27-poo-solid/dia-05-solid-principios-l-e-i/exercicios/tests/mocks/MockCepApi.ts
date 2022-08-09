import { ICepAPI } from "../../interfaces/ICepAPI";

class MockCepApi implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
      return `Teste: ${cep}, teste: ${number}!`;
  }
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `Teste: ${address}, teste: ${number}!`;
  }
}

export default MockCepApi;