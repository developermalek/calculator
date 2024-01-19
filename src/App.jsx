import { Card, Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import vtexInput from 'vtex-input';
import './App.css'
import { useState } from 'react';
import whatsapp from "./assets/Whatsapp.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import measurment from "./assets/measurment.png"
function App() {

  const [state, setState] = useState(0)

  const [input, inputChange, form] = vtexInput({
    largura:"" ,
    altura: "",
    comprimento:"" ,
    densidade: "" 
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
  <>
   <Container>
     <Row>

      <Col lg={6}>

        <Card className='lg-my-4'>
            <Card.Header as="h4" className="text-center">ESPUMAS A MEDIDA</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comprimento</Form.Label>
                        <Form.Control
                            type="number"
                            name="comprimento"
                            value={input.comprimento}
                            onChange={inputChange}
                            placeholder="Indique o comprimento em cm"/>
                        <Form.Text className="text-muted">
                            Indique o comprimento em cm
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Largura</Form.Label>
                        <Form.Control
                            type="number"
                            name="largura"
                            value={input.largura}
                            onChange={inputChange}
                            placeholder="Dar largura em cm"/>
                        <Form.Text className="text-muted">
                            Dar largura em cm
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Altura</Form.Label>
                        <Form.Control
                            type="number"
                            name="altura"
                            value={input.altura}
                            onChange={inputChange}
                            placeholder="Indique a altura em cm"/>
                        <Form.Text className="text-muted">
                            Indique a altura em cm
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Densidade</Form.Label>
                        <Form.Select aria-label="Default select example" name='densidade' onChange={inputChange} value={input.densidade}>
                            <option>Abra este menu</option>
                            <option value={0.000810}>D15 Branca</option>
                            <option value={0.000930}>D20 Branca</option>
                            <option value={0.001030}>D23 Branca</option>
                            <option value={0.001170}>D27 Branca</option>
                            <option value={0.001250}>D28 Azul</option>
                            <option value={0.001280}>D28 Chumbo</option>
                            <option value={0.001350}>D28 Premium Verde clara</option>
                            <option value={0.001315}>D33 Laranja</option>
                            <option value={0.001630}>D33 Macia Laranja claro</option>
                            <option value={0.001700}>D35 Amarela</option>
                            <option value={0.002100}>D45 Chumbo</option>
                            <option value={0.002200}>Aglomerado D80</option>
                            <option value={0.001365}>D28 Macia Branca</option>
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
            <Card.Footer className="text-center" style={{ minHeight: '22vh' } }>
                { state > 0 &&
                <Alert variant="success">
                    <h6 className='fs-5'>Preço final =
                        <b>R$ {state}</b>
                    </h6>
                </Alert>
                }
            </Card.Footer>
        </Card>
      </Col>
      <Col lg={6}>
        <Card >
            <Card.Header as="h4" className="text-center">Medição de Espuma</Card.Header>
            <Card.Body>
                <img className='measurment' src={measurment} alt="measurment"/>
                <div className='d-flex justify-content-between px-5'>
                  <div >
                    <h2 className='pe-2 fw-bold'>Para o seu pedido, converse com a gente</h2>
                  <a className='text-center' href="https://wa.me/message/SD52ZLYIG763D1?src=qr">Clique Aqui:(11)98969-0709</a>
                  </div>
                  <div>
                  <img className='whatsapp-image w-100' src={whatsapp} alt="Whatsapp"/>
                  </div>
                      
                </div>

            </Card.Body>
        </Card>
      </Col>
  
    </Row>
  </Container>
</>


  )
}

export default App
