import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "/src/assets/styles/StarModal.css";

function StarModal({
    credentials,
    show,
    toggle,
    links,
    core
})
{
    return (
        <Modal
	    id={credentials.id}
	    className="star-modal"
	    show={show}
	    onHide={toggle}
	>
	    <div className="space-modal">
            <Modal.Header closeButton>
                <Modal.Title>{credentials.title}</Modal.Title>
            </Modal.Header>
	    <Modal.Body>{core}</Modal.Body>
	    <div className="halo"></div>
            <Modal.Footer>
	        <ButtonGroup>
	            {
                        links.map((link, index) => {
                            return (
                                <Button
				    key={index}
				    variant="dark"
				    onClick={link.link}
				>{link.to}</Button>
			    );
			})
		    }
	        </ButtonGroup>
            </Modal.Footer>
	    </div>
        </Modal>
    );
}

export default StarModal;
