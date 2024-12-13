import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category1 from "./pages/categories/Category1";
import Category2 from "./pages/categories/Category2";
import PrivateForm from "./pages/contacts/PrivateForm";
import CompanyForm from "./pages/contacts/CompanyForm";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories/category1" element={<Category1 />}></Route>
        <Route path="/categories/category2" element={<Category2 />}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="privateform" element={<PrivateForm />}></Route>
          <Route path="companyform" element={<CompanyForm />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
