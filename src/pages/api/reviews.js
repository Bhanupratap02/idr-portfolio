// pages/api/reviews.js
export default async function handler(req, res) {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJRbnRwFeLPmQRv0b78Nz2cIc';
    const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyCqtGE7I_VUwDFn0Xr7lH3McSellJZm7Nc';
// https://places.googleapis.com/v1/places/ChIJRbnRwFeLPmQRv0b78Nz2cIc
// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJRbnRwFeLPmQRv0b78Nz2cIc&key=AIzaSyCqtGE7I_VUwDFn0Xr7lH3McSellJZm7Nc&fields=reviews

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );

    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return res.status(404).json({ error: "No reviews found" });
    }

    // Take top 5 reviews
    const reviews = data.result.reviews.slice(0, 5);

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
