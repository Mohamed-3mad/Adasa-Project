import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro, faMagnifyingGlass, faStar, faArrowLeft, faArrowRight,
  faChevronLeft, faChevronRight, faBars, faXmark, faNewspaper,
  faLayerGroup, faGrip, faList, faTags, faShareNodes,
  faCheck, faHouse, faPenToSquare, faFolderOpen, faUserTie, faUsers,
  faAward, faBolt, faRotate, faPenNib, faUserPlus, faCamera,
  faGear, faMountainSun, faUser, faSliders,faBookOpen, faBullseye,faHandshake, faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  faCalendar as faCalReg,
  faClock as faClockReg,
  faCircleQuestion as faQReg,
  faEnvelope as envelopeReg,
} from '@fortawesome/free-regular-svg-icons'
import {
  faTwitter, faGithub, faLinkedinIn, faYoutube,
  faFacebookF, faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const map = {
  cameraRetro: faCameraRetro,
  search: faMagnifyingGlass,
  star: faStar,
  arrowLeft: faArrowLeft,
  arrowRight: faArrowRight,
  chevronLeft: faChevronLeft,
  chevronRight: faChevronRight,
  bars: faBars,
  xmark: faXmark,
  newspaper: faNewspaper,
  layerGroup: faLayerGroup,
  grip: faGrip,
  list: faList,
  tags: faTags,
  share: faShareNodes,
  envelope: envelopeReg,
  check: faCheck,
  house: faHouse,
  pen: faPenToSquare,
  question: faQReg,
  folder: faFolderOpen,
  userTie: faUserTie,
  users: faUsers,
  award: faAward,
  bolt: faBolt,
  rotate: faRotate,
  penNib: faPenNib,
  userPlus: faUserPlus,
  camera: faCamera,
  gear: faGear,
  mountain: faMountainSun,
  user: faUser,
  sliders: faSliders,
  clock: faClockReg,
  calendar: faCalReg,
  twitter: faTwitter,
  github: faGithub,
  linkedin: faLinkedinIn,
  youtube: faYoutube,
  facebook: faFacebookF,
  whatsapp: faWhatsapp,
  bookOpen: faBookOpen,
  bullseye: faBullseye,
  handshake: faHandshake,
  angleLeft: faAngleLeft,
}

export default function FaIcon({ name, className = '', ...rest }) {
  const icon = map[name]
  if (!icon) return null
  return <FontAwesomeIcon icon={icon} className={className} {...rest} />
}
