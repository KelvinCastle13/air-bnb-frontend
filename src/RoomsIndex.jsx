export function RoomsIndex({rooms}) {
  return (
  <div>
    <h1>All Rooms ({rooms.length}) total</h1>
    {rooms.map((room) => (
      <div key={room.id}>
        <h2>{room.city}</h2>
        <p>{room.adress}</p>
        <p>{room.state}</p>
        <p>{room.price}</p>
        <p>{room.description}</p>
        <p>{room.home_type}</p>
        <p>{room.room_type}</p>
        <p>{room.total_occupancy}</p>
        <p>{room.total_bedroom}</p>
        <p>{room.total_bathroom}</p>
        <p>{room.user_id} </p>
      </div>
    ))}
  </div>
  );
} 