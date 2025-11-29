import { Menubar } from 'primereact/menubar';
import { NavLink } from 'react-router'; 

function Navbar() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      template: (item, options) => (
        <NavLink to="/" className={options.className}> 
          {item.label} 
        </NavLink>
      )
    },
    {
      label: 'Implementación',
      icon: 'pi pi-fw pi-book',
      template: (item, options) => (
        <NavLink to="/Implementación" className={options.className}>
          {item.label}
        </NavLink>
      )
    }
  ];

  return (
    <Menubar model={items} />
  );
}

export default Navbar;