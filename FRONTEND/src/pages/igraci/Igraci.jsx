import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import IgracService from '../../services/IgracService';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {RoutesNames} from '../../constants'


export default function Igraci(){
    const [Igraci, setIgraci] = useState();
    const navigate = useNavigate();


    async function dohvatiIgrace(){
        await IgracService.get()
        .then((odg)=>{
            setIgraci(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatiIgrace();
    },[]);

 

    async function obrisiAsync(sifra){
        const odgovor = await IgracService._delete(sifra);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatiIgrace();
    }

    function obrisi(sifra){
        obrisiAsync(sifra);
    }

    return(
        <>
           <Container>
            <Link to={RoutesNames.IGRAC_NOVI}> Dodaj </Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Igraci && Igraci.map((Igrac,index)=>(
                            <tr key={index}>
                                <td>{Igrac.ime}</td>
                                <td>{Igrac.prezime}</td>
                                
                                <td>
                                    
                                    {/* 
                                    {Igrac.verificiran==null 
                                    ? 'Nije definirano'
                                    : Igrac.verificiran ? 'DA' : 'NE'}
                                    */}
                                </td>
                                <td>
                                    <Button 
                                    onClick={()=>obrisi(Igrac.sifra)}
                                    variant='danger'
                                    >
                                        Obriši
                                    </Button>
                                        {/* kosi jednostruki navodnici `` su AltGR (desni) + 7 */}
                                    <Button 
                                    onClick={()=>{navigate(`/Igraci/${Igrac.sifra}`)}} 
                                    >
                                        Promjeni
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
}