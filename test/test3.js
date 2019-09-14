const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const st1 = "No player has joined yet";
    const st2 = "this case is not possible";
    const st3 =  "Waiting for player 2";
    const st4 = "Game is currently going on";
    const st5 = "Hacker trying to enter as player 1";
    const st6 = "Hacker trying to enter as player 2";
    it("can't start without player2", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        let status1 = await tic.gameStatus();

        await tic.game(5,{from:p1});
        let status2 = await tic.gameStatus();
        assert.equal(
            status1,
            "valid",
            "player 1 joined"
        );
    
        // assert.equal(
        //     status2,
        //     st3,
        //     "Player 2 trying to join as player1"
        // );
        assert.equal(
            status2,
            "Can\'t play a game without two players",
            "Starting game without player2"
        )
        // assert.equal(
        //     status3,
        //     st4,
        //     "Player 2 joined"
        // );

    });




});