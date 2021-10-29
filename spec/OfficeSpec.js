describe("Meeting Room", function() {
  var office;

  beforeEach(function() {
    office = new Office();
  });

  it("should have a name", function() {
    expect(office).toBeDefined();
  });
});