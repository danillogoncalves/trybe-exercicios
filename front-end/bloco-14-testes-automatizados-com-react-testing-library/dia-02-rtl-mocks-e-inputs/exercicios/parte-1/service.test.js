const service = require("./service");

describe('1 - Fazendo os testes do service.js.', () => {
  afterEach(() => jest.clearAllMocks());

  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber()).not.toBe(15);
    expect(service.randomNumber).toBeCalledTimes(2);
  })
  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    service.randomNumber = jest.fn()
      .mockImplementationOnce((a, b) => a / b);
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).lastCalledWith(4, 2);
    expect(service.randomNumber).toBeCalledTimes(1);
  })
  it('', () => {
    service.randomNumber = jest.fn()
      .mockImplementation((a, b, c) => a * b * c);
    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).lastCalledWith(2, 2, 2);
    expect(service.randomNumber).toBeCalledTimes(1);
    service.randomNumber.mockReset();

    service.randomNumber = jest.fn()
      .mockImplementation((a) => a * 2);
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).lastCalledWith(10);
    expect(service.randomNumber).toBeCalledTimes(1);
  })
  it('', () => {
    service.upperCaseString = jest.spyOn(service, 'upperCaseString')
      .mockImplementation((string) => string && string.toLowerCase());
    expect(service.upperCaseString('dAnIlLo')).toBe('danillo');
    service.firstLetter = jest.spyOn(service, 'firstLetter')
      .mockImplementation((string) => string && string.slice(1, 2));
    expect(service.firstLetter('danillo')).toBe('a');
    service.sumWorks = jest.spyOn(service, 'sumWorks')
      .mockImplementation((work1, work2, work3) => (work1 && work2 && work3) && `${work1} ${work2} ${work3}`);
    expect(service.sumWorks('Danillo', 'Gonçalves', 'Batista')).toBe('Danillo Gonçalves Batista');
    service.upperCaseString.mockRestore();
    expect(service.upperCaseString('dAnIlLo')).toBe('DANILLO');
  })
})
