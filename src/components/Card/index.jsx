import React from 'react';
import './styles.css'

const ExpandedCard = () => {
    const showAnswer = () => {
        const containerAnswer = document.getElementById('answer-card')
        containerAnswer.style.display = 'block'
        
    }
    return (
        <div className='expanded-card'>
            <h1 className='expanded-card-title'>Design Sprint</h1>
            <h2 className='expanded-card-subtitle'>Engenharia de Software</h2>
            <p className='extend-card-paragraph'>O Design Sprint é um processo de cinco fases com restrição de tempo que usa o design thinking com o objetivo de reduzir o risco 
            ao trazer um novo produto, serviço ou recurso para o mercado.</p>
            <div className='questions-extend-card'>
                <p className='extend-card-paragraph'>1- Como começou o Desing Sprint?</p>
                <p id='answer-card'>Resposta: O conceito de Design Sprint foi desenvolvido em 2010 por uma equipe multidisciplinar trabalhando fora do Google Ventures. 
                As iterações iniciais da abordagem foram criadas por Jake Knapp e popularizadas por uma série de artigos de blog descrevendo a abordagem e relatando seus sucessos no Google. 
                À medida que ganhou reconhecimento da indústria, a abordagem foi refinada e adicionada por outros funcionários do Google, incluindo Braden Kowitz, Michael Margolis, John Zeratsky e Daniel Burkareal.</p>
                <p className='extend-card-paragraph'>2- Quais os usos possíveis?</p>
                <p className='extend-card-paragraph'>3- Quais são as fases do Design Sprint?</p>
                <p className='extend-card-paragraph'>4- Quais são os entregavéis</p>
            </div>
            <button className='button-answer-expanded-card' onClick={showAnswer}>Exibir respostas</button>
 
        </div>
    );
};

export default ExpandedCard;