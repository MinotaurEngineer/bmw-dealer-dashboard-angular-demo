const vehicles = [
  { id: 1, make: 'BMW', model: 'i4', name: 'A' },
  { id: 2, make: 'BMW', model: 'i7', name: 'B' }
];

export async function onRequest(context) {
  const [resource, id] = context.params.path;

  if (resource === 'vehicles') {
    if (id) {
      const vehicle = vehicles.find(v => v.id === parseInt(id));
      return vehicle
        ? new Response(JSON.stringify(vehicle), { headers: { 'Content-Type': 'application/json' } })
        : new Response('Vehicle Not Found', { status: 404 });
    }

    // Handle /api/vehicles
    return new Response(JSON.stringify(vehicles), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response('Not Found', { status: 404 });
}
