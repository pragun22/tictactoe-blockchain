const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const check1 = "cell already filled";
    const check2 = "player 1 made move";
    const check3 = "player 2 made move";

    it("player1 won game1", async()=> {
    
        let tic = await tictactoe.deployed();
        await tic.joinplayer1({from:p1});
        await tic.joinplayer2({from:p2});  
        await tic.game(5,{from:p1});
        let st1 = await tic.gameStatus();
        await tic.game(3,{from:p2});
        let st2 = await tic.gameStatus();
        await tic.game(9,{from:p1});
        let st3 = await tic.gameStatus();
        await tic.game(2,{from:p2});
        let st4 = await tic.gameStatus();
        await tic.game(1,{from:p1});
        let st5 = await tic.gameStatus();
        let s1 = await tic.gamesDone();

        await tic.game(6,{from:p2});
        let st6 = await tic.gameStatus();
        await tic.game(5,{from:p1});
        let st7 = await tic.gameStatus();
        await tic.game(3,{from:p2});
        let st8 = await tic.gameStatus();
        await tic.game(9,{from:p1});
        let st9 = await tic.gameStatus();
        await tic.game(2,{from:p2});
        let st10 = await tic.gameStatus();
        await tic.game(1,{from:p1});
        let st11 = await tic.gameStatus();
        let s2 = await tic.gamesDone();


        assert.equal(
            st1,
            check2,
            "player 1 moved at 5"
        );
        assert.equal(
            st2,
            check3,
            "player 2 moved at 3"
        );
        assert.equal(
            st3,
            check2,
            "player 1 moved at 9"
        );
        assert.equal(
            st4,
            check3,
            "player 2 moved at 2"
        );
        assert.equal(
            st5,
            "game won by player 1",
            "player 1 moved at 1"
        );
        assert.equal(
            s1,
            1,
            "player 1 has won game 1"
        );

        assert.equal(
            st6,
            check3,
            "player 2 moved at 6"
        );
        assert.equal(
            st7,
            check2,
            "player 1 moved at 5"
        );
        assert.equal(
            st8,
            check3,
            "player 2 moved at 3"
        );
        assert.equal(
            st9,
            check2,
            "player 1 moved at 9"
        );
        assert.equal(
            st10,
            check3,
            "player 2 moved at 2"
        );
        assert.equal(
            st11,
            "game won by player 1",
            "player 1 moved at 1"
        );
        assert.equal(
            s2,
            2,
            "player 1 has won game 2"
        );
    });



});