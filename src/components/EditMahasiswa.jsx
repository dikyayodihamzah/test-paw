import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class EditMahasiswa extends Component {

    constructor(props){
        super();
        this.state = {
            name: "",
            nim: "",
            jurusan: "",
            email: "",
            nohp: ""
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNim = this.onChangeNim.bind(this);
        this.onChangeJurusan = this.onChangeJurusan.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNohp = this.onChangeNohp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(id) {
        axios.get('http://localhost:5000/'+id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    nim: res.data.nim,
                    jurusan: res.data.jurusan,
                    email: res.data.email,
                    nohp: res.data.nohp,
                })
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeNim(e) {
        this.setState({ nim: e.target.value})
    }
    onChangeJurusan(e) {
        this.setState({ jurusan: e.target.value})
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value})
    }
    onChangeNohp(e) {
        this.setState({ nohp: e.target.value})
    }
    onSubmit(e, id) {
        e.preventDefault();
        const mahasiswa = {
            name: this.state.name,
            nim: this.state.nim,
            jurusan: this.state.jurusan,
            email: this.state.email,
            nohp: this.state.nohp
        }

        console.log(mahasiswa);

        axios.post('http://localhost:5000/update/'+id, mahasiswa)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Perbarui Data Mahasiswa</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Nama Lengkap: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>NIM: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.nim}
                            onChange={this.onChangeNim}
                        />
                    </div>
                    <div className="form-group">
                        <label>Jurusan: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.jurusan}
                            onChange={this.onChangeJurusan}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nomor Handphone: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.nohp}
                            onChange={this.onChangeNohp}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Perbarui Data" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditMahasiswa;