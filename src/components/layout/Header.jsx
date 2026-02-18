import logo from "../../assets/logo/logo_black.png"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Button from "../ui/Button";
import { useModal } from '../../sections/FormModal/ModalContext';
 
export function Header() {
const { openModal } = useModal();
return (
<div className="container mx-auto">
<Navbar fluid rounded>
<NavbarBrand href="https://flowbite-react.com">
<img src={logo} className="mr-3 h-15" alt="Pillai University" />
</NavbarBrand>
<div className="flex md:order-2">
<Button data="Enquire Now" onClick={openModal}></Button>
<NavbarToggle />
</div>
<NavbarCollapse>
<NavbarLink href="#aboutus">About Us</NavbarLink>
<NavbarLink href="#programs">Our Programs</NavbarLink>
<NavbarLink href="#placement">Placement</NavbarLink>
<NavbarLink href="#events">Events</NavbarLink>
<NavbarLink href="#research">Research</NavbarLink>
<NavbarLink href="#alumni">Alumni</NavbarLink>
</NavbarCollapse>
</Navbar>
</div>
 
);
}