import hbo from "../assets/HBO.webp";
import paramount from "../assets/paramount_.jpg";
import widget from "../assets/Widget.jpg";
import moda from "../assets/zapatos.webp";
import libro from "../assets/libro.webp";
import xbox from "../assets/juego.webp";
import paco from "../assets/paco.webp";
import ofertas2 from "../assets/ofertas2.png";
import personal from "../assets/personal.png";
import bebes from "../assets/bebes.png";
import limpieza from "../assets/limpieza.png";
import bebidas from "../assets/bebidas.png";
import almacen from "../assets/almacen.png";
import mascotas from "../assets/mascotas.png";
import {TbTractor, TbPalette, TbBabyCarriage, TbShirt, TbMusic, TbBone, TbHourglassLow, TbCamera, TbMicrophone, TbPlug, TbArmchair, TbMoodBoy} from "react-icons/tb";
import {GiDelicatePerfume, GiSteeringWheel, GiOfficeChair} from "react-icons/gi";
import {HiOutlineDevicePhoneMobile, HiOutlineSquares2X2, HiOutlineBookOpen, HiOutlineTicket, HiOutlineBuildingOffice2, HiOutlinePlusCircle} from "react-icons/hi2";
import {IoGameControllerOutline, IoBalloonOutline, IoCarOutline, IoFastFoodOutline, IoConstructOutline, IoFootballOutline, IoWatchOutline, IoPeopleOutline} from "react-icons/io5";
import {FaGuitar} from "react-icons/fa";
import {AiOutlineTool} from "react-icons/ai";
import {FiMonitor} from "react-icons/fi";

const initialState = {
    offers: [],
    vendidos: [],
    description: "",
    categories: [
          {
            "id": "MLA1071",
            "name": "Animales y Mascotas",
            "icon": <TbBone className="category-icon"/>
          },
          {
            "id": "MLA1051",
            "name": "Celulares y Teléfonos",
            "icon": <HiOutlineDevicePhoneMobile className="category-icon"/>
          },
          {
            "id": "MLA1648",
            "name": "Computación",
            "icon": <FiMonitor className="category-icon"/>
          },
          {
            "id": "MLA1384",
            "name": "Bebés",
            "icon": <TbBabyCarriage className="category-icon"/>
          },
          {
            "id": "MLA1039",
            "name": "Cámaras y Accesorios",
            "icon": <TbCamera className="category-icon"/>
          },
          {
            "id": "MLA1367",
            "name": "Antigüedades y Colecciones",
            "icon": <TbHourglassLow className="category-icon"/>
          },
          {
            "id": "MLA1368",
            "name": "Arte, Librería y Mercería",
            "icon": <TbPalette className="category-icon"/>
          },
          {
            "id": "MLA1144",
            "name": "Consolas y Videojuegos",
            "icon": <IoGameControllerOutline className="category-icon"/>
          },
          {
            "id": "MLA1500",
            "name": "Construcción",
            "icon": <IoConstructOutline className="category-icon"/>
          },
          {
            "id": "MLA1743",
            "name": "Autos, Motos y Otros",
            "icon": <IoCarOutline className="category-icon"/>
          },
          {
            "id": "MLA5725",
            "name": "Accesorios para Vehículos",
            "icon": <GiSteeringWheel className="category-icon"/>
          },
          {
            "id": "MLA1512",
            "name": "Agro",
            "icon": <TbTractor className="category-icon"/>
          },
          {
            "id": "MLA1182",
            "name": "Instrumentos Musicales",
            "icon": <FaGuitar className="category-icon"/>
          },
          {
            "id": "MLA1246",
            "name": "Belleza y Cuidado Personal",
            "icon": <GiDelicatePerfume className="category-icon"/>
          },
          {
            "id": "MLA407134",
            "name": "Herramientas",
            "icon": <AiOutlineTool className="category-icon"/>
          },
          {
            "id": "MLA1276",
            "name": "Deportes y Fitness",
            "icon": <IoFootballOutline className="category-icon"/>
          },
          {
            "id": "MLA5726",
            "name": "Electrodomésticos y Aires Ac.",
            "icon": <TbPlug className="category-icon"/>
          },
          {
            "id": "MLA1000",
            "name": "Electrónica, Audio y Video",
            "icon": <TbMicrophone className="category-icon"/>
          },
          {
            "id": "MLA2547",
            "name": "Entradas para Eventos",
            "icon": <HiOutlineTicket className="category-icon"/>
          },
          {
            "id": "MLA1574",
            "name": "Hogar, Muebles y Jardín",
            "icon": <TbArmchair className="category-icon"/>
          },
          {
            "id": "MLA1459",
            "name": "Inmuebles",
            "icon": <HiOutlineBuildingOffice2 className="category-icon"/>
          },
          {
            "id": "MLA1430",
            "name": "Ropa y Accesorios",
            "icon": <TbShirt className="category-icon"/>
          },
          {
            "id": "MLA1168",
            "name": "Música, Películas y Series",
            "icon": <TbMusic className="category-icon"/>
          },
          {
            "id": "MLA1499",
            "name": "Industrias y Oficinas",
            "icon": <GiOfficeChair className="category-icon"/>
          },
          {
            "id": "MLA3937",
            "name": "Joyas y Relojes",
            "icon": <IoWatchOutline className="category-icon"/>
          },
          {
            "id": "MLA1132",
            "name": "Juegos y Juguetes",
            "icon": <TbMoodBoy className="category-icon"/>
          },
          {
            "id": "MLA3025",
            "name": "Libros, Revistas y Comics",
            "icon": <HiOutlineBookOpen className="category-icon"/>
          },
          {
            "id": "MLA409431",
            "name": "Salud y Equipamiento Médico",
            "icon": <HiOutlinePlusCircle className="category-icon"/>
          },
          {
            "id": "MLA1540",
            "name": "Servicios",
            "icon": <IoPeopleOutline className="category-icon"/>
          },
          {
            "id": "MLA9304",
            "name": "Souvenirs, Cotillón y Fiestas",
            "icon": <IoBalloonOutline className="category-icon"/>
          },
          {
            "id": "MLA1403",
            "name": "Alimentos y Bebidas",
            "icon": <IoFastFoodOutline className="category-icon"/>
          },
          {
            "id": "MLA1953",
            "name": "Otras categorías",
            "icon": <HiOutlineSquares2X2 className="category-icon"/>
          },
    ],
    searchProduct: [],
    productDetail: {},
    imageDetail: "",
    cart: [],
    questions: [],
    benefits: [
        {
            background: widget,
            gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(16, 27, 58, 1)",
            text: "Sin cargo con el nivel 6",
            company: "Disney+ y Star+",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg",
            id: 1
        },
        {
            background: hbo,
            gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(58, 4, 82, 1)",
            days: "7 DIAS GRATIS",
            text: "Hasta 50% OFF",
            company: "HBO Max",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
            id: 2
        },
        {
            background: paramount,
            gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(0, 95, 243, 1)",
            days: "7 DIAS GRATIS",
            text: "Sin cargo con el nivel 6",
            company: "Paramount+",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png",
            id: 3
        }
    ],

    discover: [
        {
            category: ": MODA",
            text: "HASTA 40% OFF Y 6X SIN INTERES",
            image: moda,
            id: 1
        },
        {
            category: "",
            text: "HASTA 10% OFF EN LIBROS",
            image: libro,
            id: 2
        },
    ],

    interests: [
        {
            category: ": BELLEZA",
            text: "HASTA 40% OFF Y 6X SIN INTERES",
            image: paco,
            id: 1
        },
        {
            category: ": GAMING",
            text: "HASTA 25% OFF Y 6X SIN INTERES",
            image: xbox,
            id: 2
        },
    ],
    supermarket: [
        {
            text: "Ofertas",
            image: ofertas2,
            id: 1
        },
        {
            text: "Cuidado Personal",
            image: personal,
            id: 2
        },
        {
            text: "Bebes",
            image: bebes,
            id: 3
        },
        {
            text: "Limpieza",
            image: limpieza,
            id: 4
        },
        {
            text: "Bebidas",
            image: bebidas,
            id: 5
        },
        {
            text: "Almacen",
            image: almacen,
            id: 6
        },
        {
            text: "Mascotas",
            image: mascotas,
            id: 7
        },
      ],
      brands: [],
      locations: [],
    payments: [
        {
          title: "Tarjeta de credito",
          text: "Ver promociones bancarias",
          image: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg",
          id: 1
        },
        {
          title: "Tarjeta de debito",
          text: "Ver más",
          image: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg",
          id: 2
        },
        {
          title: "Cuotas sin tarjeta",
          text: "Conocé Mercado Credito",
          image: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg",
          id: 3
        },
        {
          title: "Efectivo",
          text: "Ver más",
          image: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg",
          id: 4
        },

    ],

    loading: false,
};

export default initialState;