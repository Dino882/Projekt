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
    navigate(RoutesNames.IGRAC_PREGLED);
}

   useEffect(()=>{
    dohvatiIgrac();
   },[]);

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        //alert('Dodajem Igrac');

        const podaci = new FormData(e.target);

        const Igrac = {
            ime: podaci.get('ime'),  // 'naziv' je name atribut u Form.Control
            prezime: podaci.get('prezime'), //na backend je int
                      
        };
        //console.log(routeParams.sifra);
        //console.log(Igrac);
        promjeni(Igrac);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="ime">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="ime" 
                    defaultValue={Igrac.ime}
                    required />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="prezime"
                    defaultValue={Igrac.prezime}
                     />
                </Form.Group>

                
                <hr />
                <Row>
                    <Col>
                        <Link className="btn btn-danger siroko" to={RoutesNames.IGRAC_PREGLED}>
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