function DataList({ items, deleteItem, editItem }) {
    if (items.length === 0) return <p>Belum ada data.</p>;

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Jurusan</th>
                    <th>Tahun</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.nim}</td>
                        <td>{item.jurusan}</td>
                        <td>{item.tahun}</td>
                        <td>
                            <button onClick={() => editItem(index)}>Edit</button>
                            <button onClick={() => deleteItem(index)}>Hapus</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataList;
