import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Message from '../../components/MessageWrapper';
import ReactStars from "react-rating-stars-component";

import { Container } from './styles';
import Send from '../../components/Send';
import axios from 'axios';
import { toast } from 'react-toastify';

function Main() {

    const [user, setUser] = useState({
        name:'',
        dateBirth:'',
        city:'',
        email:'',
        rating:0,
    });

    const [valid, setValid] = useState({
        name:false,
        dateBirth:false,
        city:false,
        email:false,
    });

    const [invalid, setInvalid] = useState({
        name:false,
        dateBirth:false,
        city:false,
        email:false,
    });

    useEffect(()=>{
        window.scrollTo(0, window.innerHeight);
    },[valid]);

    function sendName(){
        if(user.name.match(/^[a-z0-9]+$/i)!=null &&  user.name){
            setValid({...valid,name:true});
            setInvalid({...invalid,name:false});
            window.scrollTo(0, window.innerHeight);
        }else{
            setValid({...valid,name:false});
            setInvalid({...invalid,name:true});
        }
        window.scrollTo(0, window.innerHeight);
    }

    function sendBirthDate(){
        if(user.dateBirth && new Date(user.dateBirth).toDateString() <= new Date().toDateString()){
            setValid({...valid,dateBirth:true});
            setInvalid({...invalid,dateBirth:false});
            window.scrollTo(0, window.innerHeight);
        }else{
            setValid({...valid,dateBirth:false});
            setInvalid({...invalid,dateBirth:true});
        }
    }

    function sendCity(){
        if(user.city){
            setValid({...valid,city:true});
            setInvalid({...invalid,city:false});
            window.scrollTo(0, window.innerHeight);
        }else{
            setValid({...valid,city:false});
            setInvalid({...invalid,city:true});
        }
    }

    function validateEmail(email) {
        const re =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}.[a-zA-Z]{2,3}$/;
        return re.test(String(email).toLowerCase());
    }

    function sendEmail(){
        if(validateEmail(user.email)){
            setValid({...valid,email:true});
            setInvalid({...invalid,email:false});
        }else{
            setValid({...valid,email:false});
            setInvalid({...invalid,email:true});
        }
    }
    
    function submitData(){
        axios.post('https://60638cb96bc4d60017fab448.mockapi.io/api/chat/user',{
            'aa':'aa'
        },{})
        .then(({status})=>{
            if(status==201){
                toast.success("Avaliação enviada!");
            }
        })
        .catch((e)=>{
            toast.error("Erro ao enviar avaliação!");
        })
    }

    return <Container>
        <Message chatbot >Olá eu sou o ChatNilson tudo bem? Para começarmos, preciso saber seu nome.</Message>
        <Message sended >
            <Input 
                placeholder="Nome e Sobrenome"
                value={user.name}
                invalid={invalid.name}
                onlyText={valid.name}
                onChange={(e)=>setUser({...user,name:e.target.value})}
                onSend={()=>sendName()}
            />
        </Message>

        <Message chatbot  show={valid.name}>Que satisfação,{user.name}. Agora que sei o seu nome, qual cidade e estado voce mora?</Message>
        <Message sended show={valid.name}>
            <Input 
                type="date"
                placeholder="Data de Nascimento" 
                value={user.dateBirth}
                invalid={invalid.dateBirth}
                onlyText={valid.dateBirth}
                onChange={(e)=>setUser({...user,dateBirth:e.target.value})}
                onSend={()=>sendBirthDate()}
            />
        </Message>

        <Message chatbot  show={valid.dateBirth}>Legal, agora que sabemos sua cidade e seu estado. Quando foi que você nasceu?</Message>
        <Message sended show={valid.dateBirth}>
            <Input
                type="text"
                placeholder="Cidade" 
                value={user.city}
                invalid={invalid.city}
                onlyText={valid.city}
                onChange={(e)=>setUser({...user,city:e.target.value})}
                onSend={()=>sendCity()}
            />
        </Message>
        <Message chatbot  show={valid.city}>Agora, me fala teu email por gentileza?</Message>
        <Message sended show={valid.city}>
            <Input 
                type="text"
                placeholder="Email"
                value={user.email}
                invalid={invalid.email}
                onlyText={valid.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                onSend={()=>sendEmail()}
            />
        </Message>
        <Message chatbot  show={valid.email}>Você finalizou o teste Faça uma avaliação sobre o processo que realizou até o momento. Nós agradecemos!</Message>
        <Message sended show={valid.email}>
            <ReactStars
                count={5}
                onChange={(value)=>setUser({...user,rating:value})}
                size={50}
                activeColor="#ffd700"
            />
        </Message>
        
        <Send show={valid.email} onClick={submitData} >Enviar</Send>
    </Container>;
}

export default Main;