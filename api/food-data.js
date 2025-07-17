// Vercel serverless function to replace the Express API
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const foodData = [
      {
        name: "Boilded Egg",
        price: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/egg.png",
        type: "breakfast",
      },
      {
        name: "RAMEN",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/ramen.png",
        type: "lunch",
      },
      {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/chicken.png",
        type: "dinner",
      },
      {
        name: "CAKE",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/cake.png",
        type: "breakfast",
      },
      {
        name: "BURGER",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/burger.png",
        type: "lunch",
      },
      {
        name: "PANCAKE",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/pancake.png",
        type: "dinner",
      },
    ];

    res.status(200).json(foodData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}