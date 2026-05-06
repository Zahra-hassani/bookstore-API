export async function getAllBooks() {
  const data = await fetch("http://localhost:8000/api/v2/book");
  const response = await data.json();
  return response;
}

export async function sampleBooks() {
  const data = await fetch("http://localhost:8000/api/v2/book");
  const response = await data.json();
  return response;
}
