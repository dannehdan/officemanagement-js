class Office {

  constructor() {
    this.rooms = [];
  }

  add(name) {
    this.rooms.push(new MeetingRoom(name));
  }
}