import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import IgracService from "../../services/IgracService";


export default function IgraciDodaj(){
    const navigate = useNavigate();

    async function dodaj(Igrac){
        const odgovor = await IgracService.post(Igrac);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        navigate(RoutesNames.Igrac_PREGLED);
    }

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        //alert('Dodajem Igrac');

        const podaci = new FormData(e.target);

        const Igrac = {
            naziv: podaci.get('naziv'),  // 'naziv' je name atribut u Form.Control
            trajanje: parseInt(podaci.get('trajanje')), //na backend je int
            cijena: parseFloat(podaci.get('cijena')),
            verificiran: podaci.get('verificiran')=='on' ? true : false            
        };

        //console.log(Igrac);
        dodaj(Igrac);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control type="text" name="ime" required />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control type="number" name="prezime" />
                </Form.Group>

                

                <hr />
                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={1} xxl={2}>
                        <Link className="btn btn-danger siroko" to={RoutesNames.Igrac_PREGLED}>
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={6} sm={6} md={9} lg={6} xl={1} xxl={10}>
                        <Button className="siroko" variant="primary" type="submit">
                            Dodaj
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>

    );
}