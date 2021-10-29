describe("Meeting Room", function() {
  var meetingRoom;

  beforeEach(function() {
    meetingRoom = new MeetingRoom();
  });

  it("should have a name and be available", function() {
    let newRoom = new MeetingRoom("Meeting Room 1");

    expect(newRoom.name).toEqual("Meeting Room 1");
    expect(newRoom.available).toEqual(true);
  });

  describe("#makeUnavailable", function() {
    it("should make the room unavailable", function(){
      meetingRoom.makeUnavailable();
      expect(meetingRoom.available).toEqual(false);
    });
  });

  describe("#makeAvailable", function() {
    it("should make the room available", function(){
      meetingRoom.makeUnavailable();
      meetingRoom.makeAvailable();
      expect(meetingRoom.available).toEqual(true);
    });
  });


});

// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });