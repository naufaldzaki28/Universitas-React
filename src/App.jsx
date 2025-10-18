import { useState, useEffect } from "react";
import DataForm from "./components/DataForm";
import DataList from "./components/DataList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [view, setView] = useState("home");
  const [editIndex, setEditIndex] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("mahasiswaData");
    if (storedData) setItems(JSON.parse(storedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("mahasiswaData", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = item;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, item]);
    }
    setView("list");
    setShowDropdown(false);
  };

  const deleteItem = (index) => setItems(items.filter((_, i) => i !== index));
  const editItem = (index) => {
    setEditIndex(index);
    setView("add");
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">🎓 Universitas React</div>
          <ul className="nav-menu">
            <li onClick={() => setView("home")}>Beranda</li>

            {/* Fitur dropdown */}
            <li className="dropdown" onClick={() => setShowDropdown(!showDropdown)}>
              Fitur ▾
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li onClick={() => setView("add")}>Tambah Data</li>
                  <li onClick={() => setView("list")}>Lihat Data</li>
                </ul>
              )}
            </li>

            <li onClick={() => setView("about")}>About</li>
            <li onClick={() => setView("contact")}>Contact Us</li>
          </ul>
        </nav>

        {/* Content */}
        <div className="content">
          {view === "home" && (
            <div className="home">
              <h1>Selamat Datang di Universitas React</h1>
              <p>
                Universitas React merupakan tempat belajar teknologi modern dengan pendekatan praktis.
                Di sini, mahasiswa dapat mengembangkan kemampuan coding, desain, dan manajemen data
                secara interaktif dan menyenangkan.
              </p>
              <div className="home-buttons">
                <button onClick={() => setView("add")}>Tambah Data</button>
                <button onClick={() => setView("list")}>Lihat Data</button>
              </div>
            </div>
          )}

          {view === "add" && (
            <DataForm addItem={addItem} editItem={editIndex !== null ? items[editIndex] : null} />
          )}

          {view === "list" && (
            <div>
              <div className="list-header">
                <h2>Daftar Mahasiswa</h2>
                <button onClick={() => setView("add")}>Tambah Data Baru</button>
              </div>
              <DataList items={items} deleteItem={deleteItem} editItem={editItem} />
            </div>
          )}

          {view === "about" && (
            <div className="about">
              <h2>Tentang Universitas React</h2>
              <p>
                Universitas React adalah platform pendidikan modern yang fokus pada pengembangan keterampilan
                coding dan manajemen data. Kami menyediakan pengalaman belajar interaktif, proyek praktis,
                dan komunitas yang mendukung mahasiswa untuk berkembang secara maksimal.
              </p>
            </div>
          )}

          {view === "contact" && (
            <div className="contact">
              <h2>Contact Us</h2>
              <p>Email: info@universitasreact.ac.id</p>
              <p>Telepon: 021-12345678</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Universitas React. All rights reserved.</p>
        <p>
          Follow us:
          <a href="#">Instagram</a> |
          <a href="#">Facebook</a> |
          <a href="#">Twitter</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
