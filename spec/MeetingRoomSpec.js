describe("Meeting Room", function() {
  var meetingRoom;

  beforeEach(function() {
    meetingRoom = new MeetingRoom();
  });

  it("should have a name", function() {
    let newRoom = new MeetingRoom("Meeting Room 1");

    expect(newRoom.name).toEqual("Meeting Room 1");
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