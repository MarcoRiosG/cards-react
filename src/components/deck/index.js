import { useEffect, useState } from 'react';

import Card from '../card/card'

const Deck = (props)  => {

    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      (async () => {
        setCards(await (await fetch(`http://localhost:4000/${props.path}`)).json())
      })();
    }, [props.path]);
  
    return <div>
        <h3>{props.title}</h3>
        <div className="deck">{cards.map((card, index) => {
          const number = card.slice(0, -1);
          const symbol = card.slice(-1);
          return <Card symbol={symbol} number={number} key={index} flipped={parseInt(props.flipped) > index}/>
        })}</div>
      </div>
    }

export default Deck
  
  // class Deck extends React.Component{
  
  //   constructor(props){
  //     super(props);
  //     this.state ={
  //       cards: []
  //     }
  //   }
    
  
  //   componentDidMount() {
  //     (async () => {
  //       const cards = await (await fetch(`http://localhost:4000/${this.props.path}`)).json()
  //       this.setState({
  //         cards:cards
  //       })
  //    })();
  //   }
  
  //   render() {
  //     return <div>
  //         <h3>{this.props.title}</h3>
  //         <div className="deck">{this.state.cards.map((card, index) => {
  //           const number = card.slice(0, -1);
  //           const symbol = card.slice(-1);
  //           return <Card symbol={symbol} number={number} key={index} flipped={parseInt(this.props.flipped) > index}/>
  //         })}</div>
  //       </div>
  //   }
  // }

