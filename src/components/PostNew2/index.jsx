import Card from 'react-bootstrap/Card';

function PostNew2({ image, title, created_at, text, name }) {
	return (
		<>
	
			<Card>
				{/*<div style={{
					height: "20rem",
					backgroundPosition: "center",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					display: "block"

				}}>

			</div> */}
				<div style={{position: "relative"}}>

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
		
		</>
	);
}

export default PostNew2;