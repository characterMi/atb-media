import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const Feed = lazy(() => import("./components/Feed"));
const VideoDetail = lazy(() => import("./components/VideoDetail"));
const ChannelDetail = lazy(() => import("./components/ChannelDetail"));
const SearchFeed = lazy(() => import("./components/SearchFeed"));

const RouteWithinSuspense = ({ child }) => (
  <Suspense
    fallback={
      <div style={{ display: "flex", placeContent: "center" }}>Loading...</div>
    }
  >
    {child}
  </Suspense>
);

function App() {
  return (
    <HashRouter>
      <Box sx={{ backgroundColor: "#000" }} className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<RouteWithinSuspense child={<Feed />} />} />
          <Route
            path="/video/:id"
            element={<RouteWithinSuspense child={<VideoDetail />} />}
          />
          <Route
            path="/channel/:id"
            element={<RouteWithinSuspense child={<ChannelDetail />} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<RouteWithinSuspense child={<SearchFeed />} />}
          />
        </Routes>
      </Box>
    </HashRouter>
  );
}

export default App;
