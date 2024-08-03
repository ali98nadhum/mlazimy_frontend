import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import CategoryPage from "./components/Category/Category";
import SubCategoryPage from "./components/SubCategory/SubCategory";
import RegisterNotice from "./components/RegisterNotice/RegisterNotice";
import AboutPage from "./components/AboutPage/AboutPage";
import TrainingPage from "./components/TrainingPage/TrainingPage";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import {useStore} from "./store"

function App() {
  const { isDark } = useStore();
  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/subcategory/:id" element={<SubCategoryPage />} />
          <Route path="/register_notice" element={<RegisterNotice />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="*" element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
