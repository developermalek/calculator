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
            <Form.Label>Largura</Form.Label>
            <Form.Control type="number" name="largura" value={input.largura} onChange={inputChange} placeholder="Dê largura em cm" />
            <Form.Text className="text-muted">
              Dê largura em cm
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Label>Altura</Form.Label>
            <Form.Control type="number" name="altura" value={input.altura} onChange={inputChange} placeholder="Informe a altura em cm" />
            <Form.Text className="text-muted">
              Informe a altura em cm
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comprimento</Form.Label>
            <Form.Control type="number" name="comprimento" value={input.comprimento} onChange={inputChange} placeholder="Informe o comprimento em cm" />
            <Form.Text className="text-muted">
              Informe o comprimento em cm
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Densidade</Form.Label>
            <Form.Select name='densidade' onChange={inputChange} value={input.densidade}>
              <option>Abra este menu</option>
              <option value={810}>15</option>
              <option value={930}>20</option>
              <option value={1030}>23</option>
              <option value={1170}>27</option>
              <option value={1230}>28</option>
              <option value={1350}>28 Premium</option>
              <option value={1365}>28 Macia</option>
              <option value={1280}>33</option>
              <option value={1630}>33 Macia</option>
              <option value={1700}>35</option>
              <option value={2100}>45</option>
              <option value={2200}>80</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Densidad de las espumas
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
