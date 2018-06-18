import React, { Component } from 'react'
import './Servises.css'

import Title from './Title/Title'
import Card from './Card/Card'

const CardsData = [
  {
    "category": "іконка",
    "title": "Господарські спори",
    "text": "Господарські спори – спори, що виникають між суб’єктами господарської діяльності при укладенні й" +
    " виконанні господарських договорів, а також спори про відшкодування збитків.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "іконка",
    "title": "Адміністративні спори",
    "text": "Виникають між державними органами з одного боку і юридичними або фізичними особами з іншого боку і" +
    " регулюються адміністративно правовими нормами.",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "іконка",
    "title": "Цивільні спори",
    "text": "Спори, які виникають між учасниками цивільно-правових відносин і регулюються цивільним, трудовим," +
    " земельним, сімейним, цивільно-процесуальним галузями права.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "іконка",
    "title": "Трудові спори",
    "text": "Неврегульовані шляхом безпосередніх переговорів розбіжності між працівником і власником підприємства з" +
    " приводу застосування норм трудового законодавства.",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "іконка",
    "title": "Сімейні спори",
    "text": "Сімейні спори - Майнові і немайнові відносини між подружжям, батьками і дітьми, опікунами та підопічними регулюються нормами сімейного законодавства України.",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "іконка",
    "title": "Спадкові спори",
    "text": "Спадкові спори є одними із найскладніших у сфері цивільного права. В них стикаються як майновий інтерес на об’єкти спадщини, так й етичний інтерес з боку родичів спадкодавця.",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "іконка",
    "title": "Земельні спори",
    "text": "Земельні спори — це вид правовідносин, пов’язаних із розв’язанням розбіжностей, які випливають з" +
    " порушення права власності та права користування земельною ділянкою.",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "іконка",
    "title": "Повернення боргу",
    "text": "Стягнення заборгованості - діяльність, яка має на меті досудове виконання боржником своїх зобов'язань" +
    " або ж примус до повернення боргу в судовому порядку.",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "іконка",
    "title": "Сфера нерухомості",
    "text": "Спори з розділу нерухомості між співвласниками, визнання права власності на нерухомість в суді," +
    " оскарження укладених угод з нерухомістю тощо.",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]

class Services extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: {}
    }
  }
  componentWillMount() {
    this.setState({
      cards: CardsData
    })
  }

  render () {
    return (
      <section className='services-block'>
        <div className='container card-wrap'>
          <Title />
          <div className="app-card-list">
            {
              Object.keys(this.state.cards).map(key =>
                <Card key={key} index={key} details={this.state.cards[key]}/>)
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Services
