export async function Item_Post(name, image, wardrobeID) {
  const res = await fetch("https://localhost:7294/api/Items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, image, wardrobeID }),
  });

  if (!res.ok) {
    throw new Error("Nie udało się dodać");
  }

  const data = await res.json();
  return data;
}
