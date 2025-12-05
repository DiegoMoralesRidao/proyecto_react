import { FaCaretDown } from 'react-icons/fa'; // Icono de flecha para indicar despliegue

const Dropdown = ({ title, items }) => {
  // El despliegue del menú se gestiona completamente con CSS :hover
  // Esto es más simple y eficiente que usar estado (useState) solo para hover.
  return (
    // Contenedor principal: necesario para aplicar position: relative en CSS
    <div className="dropdown-container">
      
      {/* Título/Enlace principal */}
      <a href="#" className="dropdown-title">
        {title} 
        <FaCaretDown className="ml-1 transition-transform duration-200" size={10} />
      </a>

      {/* Contenido del menú: será posicionado absolutamente y ocultado/mostrado por CSS */}
      <ul className="dropdown-content">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="dropdown-item">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;