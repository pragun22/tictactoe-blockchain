const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "Its not your turn to play";
    const check2 = "player 1 made move";
    const check3 = "player 2 made move";
    // const st3 =  "Waiting for player 2";
    // const st4 = "Game is currently going on";
    // const st5 = "Hacker trying to enter as player 1";
    // const st6 = "Hacker trying to enter as player 2";
    it("Wrong turn", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        let status1 = await tic.game(5,{from:p2});
        let st1 = await tic.gameStatus();
        // let status2 = await tic.game(10);
        // let st2 = await tic.gameStatus();

        assert.equal(
            st1,
            check1,
            "player 2 tried to play in player1's turn"
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
    
    it("Double move", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        let status1 = await tic.game(5,{from:p1});
        let st1 = await tic.gameStatus();

        let status2 = await tic.game(7,{from:p1});
        let st2 = await tic.gameStatus();
        // let status2 = await tic.game(10);
        // let st2 = await tic.gameStatus();

        assert.equal(
            st1,
            check2,
            "player 1 made a move"
        );
        assert.equal(
            st2,
            check1,
            "player 1 made a double move"
        );

    });


    it("hacker tried to make a move", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        // await tic.game(5,{from:hacker});
        // let st1 = await tic.gameStatus();
        await tic.game(5,{from:p1});
        let st2 = await tic.gameStatus();
        // await tic.game(7,{from:hacker});
        // let st3 = await tic.gameStatus();
        await tic.game(7,{from:p2});
        let st4 = await tic.gameStatus();

        // assert.equal(
        //     st1,
        //     check1,
        //     "hacker tried to make a move in player 1's turn"
        // );
        assert.equal(
            st2,
            check2,
            "player 1 made a move"
        );
        // assert.equal(
        //     st3,
        //     check1,
        //     "hacker tried to make a move in player 2's turn"
        // );
        assert.equal(
            st4,
            check3,
            "player 2 made a move"
        );

    });



});