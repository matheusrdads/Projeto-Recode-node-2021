import React, { useState, useEffect } from 'react';
import Form from '../../components/Form';
import mail from '../Products/assets/mail.png';
import whatsapp from '../Products/assets/whatsapp.png';

export default function Contact() {

    const [comentarios, setComentarios] = useState([]);

    function getComentario() {
        async function showComentarios() { 
            const url = "http://localhost:5001/";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setComentarios(resultado);

        }
        showComentarios();
    }

    useEffect(() => { getComentario() }, []);

    useEffect(() => { }, [comentarios]);

    return (
        <div className="container-fluid">

            <h3 className="text-white">Products</h3>

            <h2>Contacts</h2>
            <hr />
            <div className="container">

                <div className="row container-fluid">

                    <div className="col-6 ">
                        <img alt="" src={mail} />
                        <font>contact@fullstackmusic.com</font>

                    </div>
                    <div className="col-6">
                        <img alt="" src={whatsapp} />
                        <font>+1 876-999-9999</font>
                    </div>

                </div>
            </div>
           
            <Form/>

            <div className="text-white comments">
                <div className="col-sm-9">

                    {comentarios && comentarios.map(row => {
                        if (row.productname === null) { 
                            return (
                                <div className="text-dark" key={row.id}>  Usuário: {row.nome} <br />
                                                                    Mensagem: {row.msg}  <br />
                                                                    Data: {row.date} <hr />

                        </div>
                        )

                        } else{
                            return (
                                <div className="text-dark" key={row.id}>  Usuário: {row.nome} <br />
                                                                    Mensagem: {row.msg}  <br />
                                                                    Produto: {row.productname} <br />
                                                                    Data: {row.date} <hr />

                        </div>
                            )
                        }
                        })
                    }
                </div>
            </div>
        </div>
    );
}