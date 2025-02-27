import { useEffect, useState } from "react";

const BIN_ID = import.meta.env.VITE_BIN_ID;
const API_KEY = import.meta.env.VITE_MASTER_KEY;

const Footer = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        headers: { "X-Master-Key": API_KEY },
      });
      const data = await res.json();
      const newCount = data.record.viewCount + 1;

      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "X-Master-Key": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ viewCount: newCount }),
      });

      setViewCount(newCount);
    };

    fetchViews();
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Dr. Dhananjay Kalbande. All rights reserved.</p>
        <p className="text-sm">Total Visitors: {viewCount}</p>
      </div>
    </footer>
  );
};

export default Footer;
