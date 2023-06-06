import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function PostNew2({ image, title, created_at, text, name, _id }) {
	return (
		<>
			<Link to={`/product/${_id}`}>
				<Card>
					{/*<div style={{
					height: "20rem",
					backgroundPosition: "center",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					display: "block"

				}}>

			</div> */}
					<div style={{ position: "relative" }}>

						<Card.Img variant="top" src={image} alt={title} />
					</div>
					<Card.Body>
						<Card.Title>{title}</Card.Title>

						<Card.Text>
							{text}
						</Card.Text>
					</Card.Body>
					<Card.Footer>{name}&nbsp;{created_at}</Card.Footer>

				</Card>
			</Link>

		</>
	);
}

export default PostNew2;