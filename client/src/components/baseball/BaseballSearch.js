import React, { useState } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { searchBaseballData } from '../../utils/API';


const BaseballSearch = () => {

    
    //state for holding mlb data return
    const [searchedPlayer, setSearchedPlayer] = useState([]);
    //state for holdling searched field data
    const [searchBaseballInput, setSearchBaseballInput] = useState('');
    //to add for tracking favorite players via local storage, then possibly graphql to backend
    // const [savedPlayerIds, setSavedPlayerIds] = useState(getSavedPlayerIds());
    //useEffect hook for saving players to local storage
    // useEffect(() => {
    //     return () => savedPlayerIds(savedPlayerIds);
    // });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!searchBaseballInput) {
            return false;
        }

        try {
            const response = await searchBaseballData(searchBaseballInput);

            if (!response.ok) {
                throw new Error('something went wrong');
            }

            const { items } = await response.json();

            const playerData = items.map((player) => ({
                playerId: player.search_player_all.queryResults.row.player_id,
                playerName: player.search_player_all.queryResults.row.name_display_first_last
            }));

            setSearchedPlayer(playerData);
            setSearchBaseballInput('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <Jumbotron fluid className='text-light bg-dark'>
            <Container>
                <h1>Search for Player</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                    <Col xs={12} md={8}>
                        <Form.Control
                        name='searchBaseballInput'
                        value={searchBaseballInput}
                        onChange={(e) => setSearchBaseballInput(e.target.value)}
                        type='text'
                        size='lg'
                        placeholder='enter player name'
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <Button type='submit' variant='success' size='lg'>
                        Submit Search
                        </Button>
                    </Col>
                    </Form.Row>
                </Form>
            </Container>
        </Jumbotron>

        <Container>
            <CardColumns>
                {searchedPlayer.map((player) => {
                    return (
                        <Card key={player.playerId} border='dark'>
                            <Card.Body>
                                <Card.Title>{player.playerName}</Card.Title>
                                <p className='small'>More Info Coming...</p>
                                {/* <Card.Text>Auth info to enter below</Card.Text>
                                <Button
                                    disabled={savedPlayerIds?.some((savedPlayerId) =>
                                    savedPlayerId === player.playerId)}
                                    className='btn-block btn-info'
                                    onClick={() => handleSavedPlayer(player.playerId)}
                                    {...savedPlayerIds?.some((savedPlayerId) => savedPlayerId === player.playerId)
                                        ? 'This player has already been saved!'
                                        : 'Save this Player!'}>
                                </Button> */}
                            </Card.Body>
                        </Card>
                    )
                })
            }
            </CardColumns>
        </Container>
        </>
    )


};

export default BaseballSearch;