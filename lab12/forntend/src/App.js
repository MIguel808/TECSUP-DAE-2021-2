import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
class App extends Component {
  constructor(props) {
    super(props);
    this.state =({
      prestamos:[],
      pos:null,
      titulo:'Nuevo',
      id:0,
      codigo:'',
      libroid:'',
      cliente:'', 
      fechaPrestamo:'',
      fechaDevolucion:'',
    })
    this.cambioUsuario = this.cambioUsuario.bind(this);
    this.cambioFechaPrestamo = this.cambioFechaPrestamo.bind(this);
    this.cambioFechaDevolucion = this.cambioFechaDevolucion.bind(this);
    this.cambioLibroId = this.cambioLibroId.bind(this);
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  cambioUsuario(e){
    this.setState({
      usuario : e.target.value
    })
  }

  cambioFechaPrestamo(e){
    this.setState({
      fechaprestamo : e.target.value
    })
  }
  cambioFechaDevolucion(e){
    this.setState({
      fechaDevolucion : e.target.value
    })
  }

  cambioLibroId(e){
    this.setState({
      libroid : e.target.value
    })
  }
  componentDidMount(){
    axios.get('https://localhost:8000/prestamo')
    .then(res=> {
      this.setState({series:res.data})
    })
  }
  mostrar(cod,index){
    axios.get('https://localhost:8000/prestamo'+cod)
    .then(res => {
      this.setState({
        pos: index,
        titulo:'Nuevo',
        id:0,
        codigo:'',
        libroid:'',
        cliente:'', 
        fechaPrestamo:'',
        fechaDevolucion:'',
      })
    })
  }
  guardar(e){
    e.preventDefault();
    let cod = this.state.id;
    const datos = {
      libroid: this.state.libroid,
      release_date: this.state.fechaPrestamo,
      release_date: this.state.fechaDevolucion,
    }
    if(cod>0){
      //edición de un registro
      axios.put('https://localhost:8000/prestamo'+cod,datos)
      .then(res =>{
        let indx = this.state.pos;
        this.state.series[indx] = res.data;
        var temp = this.state.series;
        this.setState({
          pos:null,
          titulo:'Nuevo',
          id:0,
          codigo:'',
          libroid:'',
          cliente:'', 
          fechaPrestamo:'',
          fechaDevolucion:'',
        });
      }).catch((error) =>{
        console.log(error.toString());
      });
    }else{
      //nuevo registro
      axios.post('https://localhost:8000/prestamo',datos)
      .then(res => {
        this.state.series.push(res.data);
        var temp = this.state.series;
        this.setState({
          id:0,
          codigo:'',
          libroid:'',
          cliente:'', 
          fechaPrestamo:'',
          fechaDevolucion:'',
        });
      }).catch((error)=>{
        console.log(error.toString());
      });
    }
  }
  eliminar(cod){
    let rpta = window.confirm("Desea Eliminar?");
    if(rpta){
      axios.delete('https://localhost:8000/prestamo'+cod)
      .then(res =>{
        var temp = this.state.series.filter((serie)=>serie.id !== cod);
        this.setState({
          series: temp
        })
      })
    }
  }
  render() {
    return (
    <div>
      <Container>
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>libro id</th>
              <th>cliente</th>
              <th>Fecha Prestamo</th>
              <th>Fecha Devolucion</th>
            </tr>
          </thead>
          <tbody>
            {this.prestamos.prestamos.map((prestamos,index) =>{
              return (
                <tr key={prestamos.id}>
                  <td>{prestamos.libroid}</td>
                  <td>{prestamos.cliente}</td>
                  <td>{prestamos.fechaPrestamo}</td>
                  <td>{prestamos.fechaDevolucion}</td>
                  <td>
                  <Button variant="success" onClick={()=>this.mostrar(prestamos.id,index)}>EDITAR</Button>
                  <Button variant="danger" onClick={()=>this.eliminar(prestamos.id,index)}>ELIMINAR</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <hr />
        <h1>{this.state.titulo}</h1>
        <Form onSubmit={this.guardar}>
            <input type="hidden" value={this.state.id} />
            <Form.Group className="mb-3">
              <Form.Label>Cliente</Form.Label>
              <Form.Control type="text" value={this.state.cliente} onChange={this.cambioUsuario} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Libro</Form.Label>
              <Form.Control type="text" value={this.state.libroid} onChange={this.cambioLibroId} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Prestamo</Form.Label>
              <Form.Control type="date" value={this.state.cliente.fechaPrestamo} onChange={this.cambioFechaPrestamo} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha Devolucion</Form.Label>
              <Form.Control type="date" value={this.state.fechaDevolucion} onChange={this.cambioFechaDevolucion} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
        </Form>
      </Container>
    </div>)
  }
}
export default App;
