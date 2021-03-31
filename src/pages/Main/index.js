import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Message from '../../components/MessageWrapper';

import { Container, Form } from './styles';
import Send from '../../components/Send';
import UserSchema from '../../schemas/UserSchema';
import axios from 'axios';
import { toast } from 'react-toastify';
import {  Formik } from 'formik';
import Rating from '../../components/Rating';

function Main() {

    const [confirmed, setConfirmed] = useState(getDefaultConfirmed());

    useEffect(()=>{
        window.scrollTo(0,window.innerHeight);
    },[confirmed]);

    function getDefaultConfirmed(){
        return {
            name:false,
            dateBirth:false,
            city:false,
            email:false,
        };
    }

    async function submit(values, {setSubmitting, setErrors, setStatus, resetForm}){
        await axios.post('https://60638cb96bc4d60017fab448.mockapi.io/api/chat/user',{
            ...values
        },{})
        .then(({status})=>{
            if(status==201){
                toast.success("Avaliação enviada!");
                setConfirmed(getDefaultConfirmed());
                resetForm({})
            }
        })
        .catch((e)=>{
            toast.error("Erro ao enviar avaliação!");
        })
        return true;
    }

    return <Container>
             <Formik
                initialValues={{
                    name:'',
                    dateBirth:'',
                    city:'',
                    email:'',
                    rating:0,
                }}
                validationSchema={UserSchema}
                onSubmit={submit}
            >       
                {({ errors, values, touched,setFieldValue, isSubmitting}) => {


                    function confirmName(){
                        if(!errors.name){
                            setConfirmed({...confirmed,name:true})
                        }else{
                            setConfirmed({...confirmed,name:false})
                            setConfirmed({...confirmed,dateBirth:false})
                            setConfirmed({...confirmed,city:false})
                            setConfirmed({...confirmed,email:false})
                        }
                    }

                    function confirmBirthDate(){
                        if(!errors.dateBirth){
                            setConfirmed({...confirmed,dateBirth:true})
                        }else{
                            setConfirmed({...confirmed,dateBirth:false})
                            setConfirmed({...confirmed,city:false})
                            setConfirmed({...confirmed,email:false})
                        }
                    }

                    function confirmCity(){
                        if(!errors.city){
                            setConfirmed({...confirmed,city:true})
                        }else{
                            setConfirmed({...confirmed,city:false})
                            setConfirmed({...confirmed,email:false})
                        }
                    }

                    function confirmEmail(){
                        if(!errors.email){
                            setConfirmed({...confirmed,email:true})
                        }else{
                            setConfirmed({...confirmed,email:false})
                        }
                    }

                    return <Form>
                        <Message chatbot >Olá eu sou o ChatNilson tudo bem? Para começarmos, preciso saber seu nome.</Message>
                        <Message sended >
                            <Input 
                                type="text"
                                name="name"
                                placeholder="Nome e Sobrenome"
                                value={values.name}
                                invalid={touched.name && errors.name}
                                touched={touched.name }
                                onlyText={confirmed.name}
                                onSend={()=>confirmName()}
                            />
                        </Message>

                        <Message chatbot  show={confirmed.name}>Que satisfação,{values.name}. Agora que sei o seu nome, qual cidade e estado voce mora?</Message>

                        <Message sended show={confirmed.name}>
                            <Input
                                type="text"
                                name="city"
                                placeholder="Cidade" 
                                value={values.city}
                                invalid={touched.city &&  errors.city}
                                touched={touched.city }
                                onlyText={confirmed.city}
                                onSend={()=>confirmCity()}
                            />
                        </Message>
                        <Message chatbot  show={confirmed.city}>Legal, agora que sabemos sua cidade e seu estado. Quando foi que você nasceu?</Message>
                        
                        <Message sended show={confirmed.city}>
                            <Input 
                                type="date"
                                name="dateBirth"
                                placeholder="Data de Nascimento" 
                                value={values.dateBirth}
                                invalid={touched.dateBirth && errors.dateBirth}
                                touched={touched.dateBirth }
                                data={values.name}
                                onlyText={confirmed.dateBirth}
                                onSend={()=>confirmBirthDate()}
                            />
                        </Message>
                        <Message chatbot  show={confirmed.dateBirth}>Agora, me fala teu email por gentileza?</Message>
                        <Message sended show={confirmed.dateBirth}>
                            <Input 
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                invalid={touched.email && errors.email}
                                touched={touched.email }
                                onlyText={confirmed.email}
                                onSend={()=>confirmEmail()}
                            />
                        </Message>
                        <Message chatbot  show={confirmed.email}>Você finalizou o teste Faça uma avaliação sobre o processo que realizou até o momento. Nós agradecemos!</Message>
                        <Message sended show={confirmed.email}>
                            <Rating
                                name="rating"
                                numberOfStars="5"
                                currentRating="0"
                                size={40}
                                onClick={(value)=>setFieldValue('rating',value)}
                                activeColor="#ffd700"
                            />
                        </Message>
                        <Send type="submit"  loading={isSubmitting} disabled={isSubmitting} show={confirmed.email} />
                    </Form>
                }}
        </Formik>
    </Container>;
}

export default Main;