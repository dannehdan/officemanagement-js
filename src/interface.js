const office = new Office();

const updateRooms = () => {
  office.add("Meeting Room 1");
  document.querySelector("#office").innerText = office.rooms[0].name
}

updateRooms();