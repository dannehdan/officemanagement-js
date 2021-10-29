class MeetingRoom {

  constructor(name) {
    this.name = name;
    this.available = true;
  }

  makeUnavailable() {
    this.available = false;
  }

  makeAvailable() {
    this.available = true;
  }
}