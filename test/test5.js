const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "valid";
    const check2 = "Invalid move";
    // const st3 =  "Waiting for player 2";
    // const st4 = "Game is currently going on";
    // const st5 = "Hacker trying to enter as player 1";
    // const st6 = "Hacker trying to enter as player 2";
    it("Move index out of bound", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        let status1 = await tic.game(5,{from:p1});
        let st1 = await tic.gameStatus();
        let status2 = await tic.game(10);
        let st2 = await tic.gameStatus();

        assert.equal(
            st1,
            "player 1 made move" ,
            "valid move"
        );
        assert.equal(
            st2,
            check2,
            "invalid move"
        );
    
        // assert.equal(
        //     status2,
        //     st3,
        //     "Player 2 trying to join as player1"
        // );
        // assert.equal(
        //     status2,
        //     "Can\'t play a game without two players",
        //     "Starting game without player2"
        // )
        // assert.equal(
        //     status3,
        //     st4,
        //     "Player 2 joined"
        // );

    });




});