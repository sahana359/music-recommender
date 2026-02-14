import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Recommendations from "./components/Recommendations";
import { getRecommendations } from "./services/api";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setResults([]); // Clear previous results
    try {
      const recs = await getRecommendations(query);
      console.log("Recommendations received in App:");
      console.log(recs);
      if (!recs || recs.length === 0) {
        setError("No recommendations found.");
        setResults([]);
      } else {
        setResults(recs);
      }
    } catch (err) {
      setError("Failed to fetch recommendations. Please try again.");
      setResults([]);
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Inter, sans-serif", backgroundColor: "rgb(15 6 38 / 88%)", minHeight: "100vh", position: "relative" }}>
      <div style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        maxWidth: "420px",
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(152, 135, 184, 0.3)",
        color: "rgba(255, 255, 255, 0.9)",
        padding: "14px 18px",
        borderRadius: "12px",
        fontSize: "0.85rem",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
      }}>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #9887b8, #7a6a9c)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: "1.1rem"
        }}>
          ⚡
        </div>
        <div style={{ lineHeight: 1.5 }}>
          <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Free-tier hosting — may take ~15s.{" "}
          </span>
          <a href="https://www.youtube.com/watch?v=j7ncdhlwny4" style={{ color: "#9887b8", textDecoration: "none", fontWeight: 500 }}>
            Watch demo →
          </a>
        </div>
      </div>
      <h1 style={{ textAlign: "center", color: "rgb(252 252 252)", marginBottom: "30px", fontWeight: 400, fontSize: "2.5rem", letterSpacing: "1px" }}>
        Music Recommendations
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div style={{ textAlign: "center", margin: "30px" }}>
          <div className="loader" style={{ display: "inline-block", width: 40, height: 40, border: "4px solid #ccc", borderTop: "4px solid rgb(15 6 38 / 88%)", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <div style={{ color: "#fff" }}>Loading recommendations...</div>
        </div>
      ) : error ? (
        <div style={{ textAlign: "center", color: "#d32f2f", margin: "30px" }}>{error}</div>
      ) : (
        <Recommendations results={results} />
      )}
    </div>
  );
}

export default App;
