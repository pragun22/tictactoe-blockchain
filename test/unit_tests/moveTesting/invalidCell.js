const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "valid";
    const check2 = "Invalid move";
    
    it("Invalid cell index test", async()=> {
    
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
    });




});