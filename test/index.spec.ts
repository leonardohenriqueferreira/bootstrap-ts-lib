describe("src/index.ts", () => {
  it('should log "Bootstrap TypeScript Library"', () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation()

    require("../src/index.ts")

    expect(consoleSpy).toHaveBeenCalledWith("Bootstrap TypeScript Library")
    consoleSpy.mockRestore()
  })
})
