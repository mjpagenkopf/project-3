// import {teams} from '../../assets/data/projectSec'
// import {Modal, Button} from 'react-bootstrap'
// import CreateModal from './CreateModal'

// export default function Create() {
//     const [showModal, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <div
//           className="d-flex align-items-center justify-content-center"
//           style={{ height: "100vh" }}
//         >
//           <Button variant="primary" onClick={handleShow}>
//             Launch demo modal
//           </Button>
//         </div>
//         <Modal show={showModal} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
// }
//     return (
//       <section className='w-full p-8 bg-gray-100'>
//         <div className='create'>
//         <h2 className='py-4 text-center text-gray-600 text-2xl font-bold uppercase '>
//             Name's Teams
//         </h2>
//         <button onClick={CreateModal}>Create New Team</button>
//         </div>
//         <div class="container">
//             <div class="row">
//                 {teams.map((team) => (
//                 <div class="col-9 portfolio">
//                     <div>
//                         <div>{`${team.name}`}</div>
//                         <div>{`${team.sport}`}</div>
//                     </div>
//                 </div>
//                 ))}
//             </div>
//         </div>
//       </section>
//     );
  
