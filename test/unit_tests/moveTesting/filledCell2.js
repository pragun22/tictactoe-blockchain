const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "cell already filled";
    const check2 = "player 1 made move";
    const check3 = "player 2 made move";

    it("Player-1 moving in filled cell test", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        await tic.game(5,{from:p1});
        let st1 = await tic.gameStatus();
        await tic.game(7,{from:p2});
        let st2 = await tic.gameStatus();
        await tic.game(7,{from:p1});
        let st3 = await tic.gameStatus();

        assert.equal(
            st1,
            check2,
            "player 1 moved at 5"
        );
        assert.equal(
            st2,
            check3,
            "player 2 moved at 7"
        );
        assert.equal(
            st3,
            check1,
            "player 1 trying to move at occupied cell 7"
        );
    });



});