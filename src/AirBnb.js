import NavBar from "./components/NavBar"
import css from './bnb.css'
import data from './data/data'
import Card from "./components/Card"

export default function AirBnb () {
    const cards = data.map(item => {
        return (
            <Card 
                id={item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <NavBar />
            <div className="cards">
            {cards}
            </div>
        </div>
    )
}