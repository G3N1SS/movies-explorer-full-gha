import adaptive1 from '../images/russiantravel.jpg'
import adaptive2 from '../images/gitarist.jpg'
import adaptive3 from '../images/Architecture.jpg'
import adaptive4 from '../images/noviy-kovcheg.png'
import adaptive5 from '../images/focus.jpg'
import multi from '../images/mesto.png'
import karti from '../images/karti.png'
import learn from '../images/learn.png'
import bakery from '../images/bakery.png'

const EmailRegex = "^\\S+@\\S+\\.\\S+$"
const MaxScreen = 1171
const MediumScreen = 971
const SmallScreen = 650
const InitMoreMaxScreen = 16
const InitLessMaxScreen = 12
const InitMediumScreen = 8
const InitSmallScreen = 5
const StepMaxScreen = 4
const StepMediumScreen = 3
const StepSmallScreen = 2

const adaptive =[
  {
    name: 'Путешествия по России',
    link: 'https://g3n1ss.github.io/russian-travel-react/#',
    img: adaptive1
  },
  {
    name: 'Портфолио Гитариста',
    link: 'https://g3n1ss.github.io/gitarist-portfolio/',
    img: adaptive2
  },
  {
    name: 'Architecture',
    link: 'https://g3n1ss.github.io/architecture/',
    img: adaptive3
  },
  {
    name: 'Сложно сосредоточиться',
    link: 'https://1zh0ra.github.io/slozhno-sosredotochitsya/',
    img: adaptive5
  },
  {
    name: 'Карты подскажут',
    link: 'https://g3n1ss.github.io/Karti-Podshazhut/',
    img: karti
  }
]

const multipage = [
  {
    name: 'Новый Ковчег',
    link: 'https://g3n1ss.github.io/noviy-kovcheg/',
    img: adaptive4
  },
  {
    name: 'Mesto Russia',
    link: 'https://g3n1ss.github.io/mesto/',
    img: multi
  }
]

const staticSite = [
  {
    name: 'Научиться учиться',
    link: 'https://g3n1ss.github.io/how-to-learn-react/',
    img: learn
  },
  {
    name: 'Bakery',
    link: 'https://g3n1ss.github.io/bakery-landing-page/',
    img: bakery
  }
]

export {
  EmailRegex,
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen,
  adaptive,
  multipage,
  staticSite
}