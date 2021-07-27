import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PLAYER } from '../../utils/mutations'
import { QUERY_PLAYERS } from '../../utils/queries'
import { Button, Modal } from 'react-bootstrap'


const PlayerForm = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [position, setPosition] = useState('');
    const [height, setHeight] = useState('');     //only works when number set
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
  
    const [addPlayer, { error }] = useMutation(ADD_PLAYER, {
      update(cache, { data: { addPlayer } }) {
        try {
          const { players } = cache.readQuery({ query: QUERY_PLAYERS });
  
          cache.writeQuery({
            query: QUERY_PLAYERS,
            data: { players: [...players, addPlayer] },
          });
        } catch (e) {
          console.error(e);
        }
      },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addPlayer({
            variables: { name, image, position, height, weight, age, number, games, points, assists, rebounds, steals, blocks },
          });
    
          setName('');
          setImage('')
          setPosition('')
          setHeight('')
          setWeight('')
          setAge('')
          setNumber('')
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
        +Add Player
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
             onChange={(e) => setName(e.target.value)}
             value={name}
             placeholder="Player Name"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setImage(e.target.value)}
             value={image}
             placeholder="Add Image Url"/>
           </div>
           <div class="form-group">
             <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setPosition(e.target.value)} value={position}>
               <option value="" disabled selected hidden>Choose Position...</option>
               <option value="Point Guard">Point Guard</option>
               <option value="Shooting Guard">Shooting Guard</option>
               <option value="Small Forward">Small Forward</option>
               <option value="Power Forward">Power Forward</option>
               <option value="Center">Center</option>
             </select>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setHeight(e.target.value)}
             value={height}
             placeholder="Height"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setWeight(e.target.value)}
             value={weight}
             placeholder="Weight (lbs)"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setAge(e.target.value)}
             value={age}
             placeholder="Age"/>
           </div>
           <div class="form-group">
             <input type="text" 
             className="form-control" id="exampleFormControlInput1" 
             onChange={(e) => setNumber(e.target.value)}
             value={number}
             placeholder="Jersey Number"/>
           </div>
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

export default PlayerForm