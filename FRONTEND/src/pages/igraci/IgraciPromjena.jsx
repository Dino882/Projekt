import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import IgracService from "../../services/IgracService";
import { useEffect, useState } from "react";


export default function IgraciPromjena(){
    const navigate = useNavigate();
    const routeParams = useParams();
    const [Igrac, setIgrac] = useState({});

   async function dohvatiIgrac(){
        const o = await IgracService.getBySifra(routeParams.sifra);
        if(o.greska){
            console.log(o.poruka);
            alert('pogledaj konzolu');
            return;
        }
        setIgrac(o.poruka);
   }

   async function promjeni(Igrac){
    const odgovor = await IgracService.put(routeParams.sifra,Igrac);
    if (odgovor.greska){
        console.log(odgovor.poruka);
        alert('Pogledaj konzolu');
        return;
    }
    navigate(RoutesNames.Igrac_PREGLED);
}

   useEffect(()=>{
    dohvatiIgrac();
   },[]);

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
        //console.log(routeParams.sifra);
        //console.log(Igrac);
        promjeni(Igrac);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="naziv" 
                    defaultValue={Igrac.naziv}
                    required />
                </Form.Group>

                <Form.Group controlId="trajanje">
                    <Form.Label>Trajanje</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="trajanje"
                    defaultValue={Igrac.trajanje}
                     />
                </Form.Group>

                <Form.Group controlId="cijena">
                    <Form.Label>Cijena</Form.Label>
                    <Form.Control type="text" name="cijena" defaultValue={Igrac.cijena} />
                </Form.Group>

                <Form.Group controlId="verificiran">
                    <Form.Check label="Verificiran" name="verificiran" defaultChecked={Igrac.verificiran   } />
                </Form.Group>

                <hr />
                <Row>
                    <Col>
                        <Link className="btn btn-danger siroko" to={RoutesNames.Igrac_PREGLED}>
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button className="siroko" variant="primary" type="submit">
                            Promjeni
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>

    );
}