const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "cell already filled";
    const check2 = "player 1 made move";
    const check3 = "player 2 made move";
    // const st3 =  "Waiting for player 2";
    // const st4 = "Game is currently going on";
    // const st5 = "Hacker trying to enter as player 1";
    // const st6 = "Hacker trying to enter as player 2";

    it("hacker tried to make a move in player1 and player2's turns", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        await tic.game(5,{from:p1});
        let st1 = await tic.gameStatus();
        
        await tic.game(5,{from:p2});
        let st2 = await tic.gameStatus();

        assert.equal(
            st1,
            check2,
            "player 1 moved at 5"
        );
        assert.equal(
            st2,
            check1,
            "player 2 trying to move at occupied cell 5"
        );
        // assert.equal(
        //     st3,
        //     check1,
        //     "hacker tried to make a move in player 2's turn"
        // );
        // assert.equal(
        //     st4,
        //     check3,
        //     "player 2 made a move"
        // );

    });



});