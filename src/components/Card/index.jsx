import React from 'react';
import './styles.css'
import xButton from '../../assets/x-icon.png'

const ExpandedCard = (props) => {
    const showAnswer = () => {
        const containerAnswer = document.getElementById('answer-card')
        containerAnswer.style.display = 'block'
        
    }
    return (
        <div className='expanded-card'>
            <div className='container-card-title-x'>
                <h1 className='expanded-card-title'>Design Sprint</h1>
                <img onClick={() => props.popUpFunction('none')} className='x-button' src={xButton} alt="" />
            </div>  
            <p className='extend-card-paragraph'>O Design Sprint é um processo de cinco fases com restrição de tempo que usa o design thinking com o objetivo de reduzir o risco 
            ao trazer um novo produto, serviço ou recurso para o mercado.</p>
            <div className='questions-extend-card'>
                <p className='extend-card-paragraph'><strong>1- </strong>Como começou o Desing Sprint?</p>
                <p id='answer-card'><strong>Resposta:</strong> O conceito de Design Sprint foi desenvolvido em 2010 por uma equipe multidisciplinar trabalhando fora do Google Ventures. 
                As iterações iniciais da abordagem foram criadas por Jake Knapp e popularizadas por uma série de artigos de blog descrevendo a abordagem e relatando seus sucessos no Google. 
                À medida que ganhou reconhecimento da indústria, a abordagem foi refinada e adicionada por outros funcionários do Google, incluindo Braden Kowitz, Michael Margolis, John Zeratsky e Daniel Burkareal.</p>
                <p className='extend-card-paragraph'><strong>2- </strong>Quais os usos possíveis?</p>
                <p className='extend-card-paragraph'><strong>3- </strong>Quais são as fases do Design Sprint?</p>
                <p className='extend-card-paragraph'><strong>4- </strong>Quais são os entregavéis</p>
            </div>
            <button className='button-answer-expanded-card' onClick={showAnswer}>Exibir respostas</button>
 
        </div>
    );
};

export default ExpandedCard;