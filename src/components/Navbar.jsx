import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Aplikasi Data Mahasiswa</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/mahasiswa" className="nav-link">Data Mahasiswa</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Tambah Mahasiswa</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;