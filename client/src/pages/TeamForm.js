import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_TEAM } from '../utils/mutations'
import { QUERY_TEAMS } from '../utils/queries'
import { Button, Modal } from 'react-bootstrap'


const TeamForm = () => {
    const [name, setName] = useState('');
    const [coach, setCoach] = useState('');
    const [season, setSeason] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [addTeam, { error }] = useMutation(ADD_TEAM, {
      update(cache, { data: { addTeam } }) {
        try {
          const { teams } = cache.readQuery({ query: QUERY_TEAMS });
  
          cache.writeQuery({
            query: QUERY_TEAMS,
            data: { teams: [...teams, addTeam] },
          });
        } catch (e) {
          console.error(e);
        }
      },
    });


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addTeam({
            variables: { name, coach, season },
          });
    
          setName('');
          setCoach('')
          setSeason('')
          handleClose()
        } catch (e) {
          console.error(e);
        }
      };

    return (
    <>
      <Button className='head-create' variant="primary" onClick={handleShow}>
        +Add Team
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Where are you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="flex-row justify-center justify-space-between-md align-center">
          <div class="form-group">
            <input
            className="form-input w-100" id="exampleFormControlInput1" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Player Name"/>
          </div>
          <div class="form-group">
            <input
            className="form-input w-100" id="exampleFormControlInput1" 
            placeholder="Add your coach name..."
            value={coach}
            onChange={(e) => setCoach(e.target.value)}
          />
          </div>
          <div class="form-group">
            <input
            className="form-input w-100" id="exampleFormControlInput1" 
            placeholder="Enter season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
          </div>
          {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
          )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default TeamForm