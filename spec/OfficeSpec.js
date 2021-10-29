describe("Office", function() {
  var office;

  beforeEach(function() {
    office = new Office();
  });

  it("should exist", function() {
    expect(office).toBeDefined();
  });

  it("should list all meeting rooms", function() {
    office.add("Meeting Room 1");
    office.add("Meeting Room 2");

    let office1 = office.rooms[0];
    expect(office.rooms[0].name).toEqual(office1.name);
  });

  describe("#add", function() {
    it("should create a new meeting room", function() {
      office.add("Meeting Room 1");
      let newRoom = office.rooms[0];
      expect(newRoom.name).toEqual("Meeting Room 1");
    });
  });

});