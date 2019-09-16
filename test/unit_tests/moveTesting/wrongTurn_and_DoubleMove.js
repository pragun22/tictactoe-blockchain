const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "Its not your turn to play";
    const check2 = "player 1 made move";
    const check3 = "player 2 made move";
    it("Wrong turn(opponent's turn) test", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        
        let status1 = await tic.game(5,{from:p2});
        let st1 = await tic.gameStatus();

        assert.equal(
            st1,
            check1,
            "player 2 tried to play in player1's turn"
        );
    });
    
    it("Double move by a player", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        let status1 = await tic.game(5,{from:p1});
        let st1 = await tic.gameStatus();

        let status2 = await tic.game(7,{from:p1});
        let st2 = await tic.gameStatus();

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

});