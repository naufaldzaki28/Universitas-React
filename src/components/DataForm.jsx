import { useState, useEffect } from "react";

function DataForm({ addItem, editItem }) {
    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [tahun, setTahun] = useState("");

    useEffect(() => {
        if (editItem) {
            setName(editItem.name);
            setNim(editItem.nim);
            setJurusan(editItem.jurusan);
            setTahun(editItem.tahun);
        }
    }, [editItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && nim && jurusan && tahun) {
            addItem({ name, nim, jurusan, tahun });
            setName(""); setNim(""); setJurusan(""); setTahun("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="data-form">
            <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="NIM" value={nim} onChange={(e) => setNim(e.target.value)} required />
            <input type="text" placeholder="Jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)} required />
            <input type="text" placeholder="Tahun Angkatan" value={tahun} onChange={(e) => setTahun(e.target.value)} required />
            <button type="submit">{editItem ? "Update" : "Tambah"}</button>
        </form>
    );
}

export default DataForm;
