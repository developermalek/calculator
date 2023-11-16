import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
import vtexInput from 'vtex-input';
import './App.css'
import { useState } from 'react';

function App() {

  const [state, setState] = useState(0)

  const [input, inputChange, form] = vtexInput({
    largura:0,
    altura: 0,
    comprimento:0,
    densidade:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.largura === 0 || input.altura === 0 || input.comprimento === 0 || input.densidade === '') {
      toast.error('Preencha todos os campos!')
      return
    }
    const cal = (input.largura * input.altura * input.comprimento * input.densidade)
    toast.success('Calculado com sucesso!')
    setState(cal.toFixed(2))
  }

  const handleReset = (e) => {
    e.preventDefault();
    e.target.reset
    form.clear();
    setState(0)
  }

  return (
     <Card style={{ width: '22rem' }}>
      <Card.Header as="h4" className="text-center">ESPUMAS A MEDIDA</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comprimento</Form.Label>
            <Form.Control type="number" name="comprimento" value={input.comprimento} onChange={inputChange} placeholder="Indique o comprimento em cm" />
            <Form.Text className="text-muted">
              Indique o comprimento em cm
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Largura</Form.Label>
            <Form.Control type="number" name="largura" value={input.largura} onChange={inputChange} placeholder="Dar largura em cm" />
            <Form.Text className="text-muted">
              Dar largura em cm
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Label>Altura</Form.Label>
            <Form.Control type="number" name="altura" value={input.altura} onChange={inputChange} placeholder="Indique a altura em cm" />
            <Form.Text className="text-muted">
              Indique a altura em cm
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Densidade</Form.Label>
            <Form.Select name='densidade' onChange={inputChange} value={input.densidade}>
              <option>Abra este menu</option>
              <option value={81000}>15D</option>
              <option value={93000}>20D</option>
              <option value={1.03000}>23D</option>
              <option value={1.17000}>27D</option>
              <option value={1.25000}>28D</option>
              <option value={1.28000}>28D</option>
              <option value={1.35000}>28D Premium</option>
              <option value={1.36500}>28D Macia</option>
              <option value={1.28000}>33D</option>
              <option value={1.63000}>33D Macia</option>
              <option value={1.70000}>35D</option>
              <option value={2.10000}>45D</option>
              <option value={2.20000}>80D</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Densidade da espuma
            </Form.Text>
          </Form.Group>
          <Form.Group className='d-flex justify-content-center gap-2'>
            <Button onClick={handleReset} className="w-100" variant="danger" type="reset">
              Limpar
            </Button>
            <Button className="w-100" variant="primary" type="submit">
              Calcular
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer className="text-center" style={{ minHeight: '12vh' }}>
        {
          state > 0 && <Alert variant="success">
            <h6 className='fs-5'>Preço final = <b>R$ {state}</b></h6>
          </Alert>
        }
      </Card.Footer>
    </Card>
  )
}

export default App
