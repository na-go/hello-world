import { helloNago } from ".";

describe("helloNago()", () => {
  it("print message", () => {
    const log = jest.spyOn(console, "log").mockReturnValue();
    helloNago();
    expect(log).nthCalledWith(1, "Hello, Nago.");
    log.mockRestore();
  });
});
