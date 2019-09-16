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
    it("Both players joined success", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        let status1 = await tic.status.call();
        await tic.joinplayer1({from:p2});
        let status2 = await tic.status.call(); 
        await tic.joinplayer2({from:p2});
        let status3 = await tic.status.call();        
        assert.equal(
            status1,
            st3,
            "player 1 joined"
        );
    
        assert.equal(
            status2,
            st5,
            "Player 2 trying to join as player1"
        );
        assert.equal(
            status3,
            st4,
            "Player 2 joined"
        );
    });




});