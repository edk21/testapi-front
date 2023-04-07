import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Location from './components/Location/Location';

function App() {
  const apiUrl = "https://test-api-ckcd.onrender.com"
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "site--flink-back-end--jd2xpg8l2jfs.code.run"
  //     );
  //     console.log("response: ", response);
  //   };
  //   fetchData();
  // });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} />} />
        <Route path="/products" element={<Products apiUrl={apiUrl} />} />
        <Route path="/categories" element={<Categories apiUrl={apiUrl} />} />
        <Route path="/location" element={<Location apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
