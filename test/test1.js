const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[0];
    const p2 = accounts[1];
    const hacker = accounts[2];
    const st1 = "No player has joined yet";
    const st2 = "this case is not possible";
    const st3 =  "Waiting for player 2";
    const st4 = "Game is currently going on";
    it("game should start", async()=> {
    
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
            st3,
            "Player 2 trying to join as player1"
        );
        assert.equal(
            status3,
            st4,
            "Player 2 joined"
        );

    // return tictactoe.deployed()
    // .then(instance =>{
    //     tic = instance
    //     return tic.joinplayer1.call({from:p1})
    // })
    // .then(val =>{
    //     assert.equal(
    //         st2,
    //         val,
    //         "player 1 joined"
    //     );
    //     return tic.joinplayer2.call({from:p2})
    // })
    // .then(val=>{
    //     assert.equal(
    //         st3,
    //         val,
    //         "player 2 joined"
    //     );
    // });

});
});