import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_STATS } from '../../utils/mutations'
import { Button, Modal } from 'react-bootstrap'


const UpdatePlayerForm = ({id}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [position, setPosition] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('') 
    const [number, setNumber] = useState('')
    const [games, setGames] = useState('')
    const [points, setPoints] = useState('')
    const [assists, setAssists] = useState('')
    const [rebounds, setRebounds] = useState('')
    const [steals, setSteals] = useState('')
    const [blocks, setBlocks] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [updatePlayer, { error }] = useMutation(UPDATE_STATS) 

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await updatePlayer({
            variables: { id, games, points, assists, rebounds, steals, blocks },
          });
    
          setGames('')
          setPoints('')
          setAssists('')
          setRebounds('')
          setSteals('')
          setBlocks('')
        } catch (e) {
          console.error(e);
        }
      };

      return (
        <>
       <Button className="teamButton" variant="primary" onClick={handleShow}>
        +Update Stats
       </Button>

       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Where are you</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <form
         className="flex-row justify-center justify-space-between-md align-center"
         onSubmit={handleFormSubmit}
         >
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setGames(e.target.value)}
             value={games}
             placeholder="Games Played"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setPoints(e.target.value)}
             value={points}
             placeholder="Total Points"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setAssists(e.target.value)}
             value={assists}
             placeholder="Total Assists"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setRebounds(e.target.value)}
             value={rebounds}
             placeholder="Total Rebounds"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setSteals(e.target.value)}
             value={steals}
             placeholder="Total Steals"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setBlocks(e.target.value)}
             value={blocks}
             placeholder="Total Blocks"/>
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
             Add Player
           </Button>
         </Modal.Footer>
       </Modal>
      </>
       )
}

export default UpdatePlayerForm