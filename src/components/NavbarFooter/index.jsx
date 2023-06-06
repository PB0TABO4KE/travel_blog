import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
function NavbarFooter() {
	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container className='footer'>
					<Navbar.Brand href="#home">Travel Blog</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
						</Nav>
						<Nav>
							<Nav.Link eventKey={2} href="/">
								Главная
							</Nav.Link>
							<Nav.Link eventKey={3} href="#memes">
								КАТЕГОРИИ
							</Nav.Link>
							<Nav.Link eventKey={4} href="/posts">
								Все посты
							</Nav.Link>
							<Nav.Link eventKey={5} href="/contacts">
								Контакты
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarFooter;