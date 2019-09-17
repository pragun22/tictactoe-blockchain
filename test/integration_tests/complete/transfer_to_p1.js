const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[8];
    const p2 = accounts[9];
    const hacker = accounts[7];
    const check1 = "cell already filled";
    const check2 = "player 1 made move";
    const check3 = "player 2 made move";

    it("Player-1 wins so transferring total bet amount to Player-1 testing", async()=> {
    
        let tic = await tictactoe.deployed();
        // let balance = tic.checkBalance();
        // let balance1 = await web3.eth.getBalance(p1);
        // assert.equal(balance.valueOf(), web3.utils.toWei("0","ether"), "yessss");
        await tic.joinplayer1({from:p1,value:web3.utils.toWei("4","ether")});
        await tic.joinplayer2({from:p2,value:web3.utils.toWei("4","ether")});  
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

        await tic.game(5,{from:p1});
        let st12 = await tic.gameStatus();
        await tic.game(3,{from:p2});
        let st13 = await tic.gameStatus();
        await tic.game(9,{from:p1});
        let st14 = await tic.gameStatus();
        await tic.game(2,{from:p2});
        let st15 = await tic.gameStatus();
        await tic.game(1,{from:p1});
        let st16 = await tic.gameStatus();
        let s3 = await tic.gamesDone();

        await tic.game(6,{from:p2});
        let st17 = await tic.gameStatus();
        await tic.game(5,{from:p1});
        let st18 = await tic.gameStatus();
        await tic.game(3,{from:p2});
        let st19 = await tic.gameStatus();
        await tic.game(9,{from:p1});
        let st20 = await tic.gameStatus();
        await tic.game(2,{from:p2});
        let st21 = await tic.gameStatus();
        await tic.game(1,{from:p1});
        let st22 = await tic.gameStatus();
        let s4 = await tic.gamesDone();

        // let balance = tic.checkBalance();
        // // let balance1 = await web3.eth.getBalance(p1);
        // assert.isGreater(balance.valueOf(), web3.utils.toWei("0","ether"), "yessss");
        // console.log(bal);

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

        assert.equal(
            st12,
            check2,
            "player 1 moved at 5"
        );
        assert.equal(
            st13,
            check3,
            "player 2 moved at 3"
        );
        assert.equal(
            st14,
            check2,
            "player 1 moved at 9"
        );
        assert.equal(
            st15,
            check3,
            "player 2 moved at 2"
        );
        assert.equal(
            st16,
            "game won by player 1",
            "player 1 moved at 1"
        );
        assert.equal(
            s3,
            3,
            "player 1 has won game 3"
        );

        assert.equal(
            st17,
            check3,
            "player 2 moved at 6"
        );
        assert.equal(
            st18,
            check2,
            "player 1 moved at 5"
        );
        assert.equal(
            st19,
            check3,
            "player 2 moved at 3"
        );
        assert.equal(
            st20,
            check2,
            "player 1 moved at 9"
        );
        assert.equal(
            st21,
            check3,
            "player 2 moved at 2"
        );
        assert.equal(
            st22,
            "game won by player 1",
            "player 1 moved at 1"
        );
        assert.equal(
            s4,
            4,
            "player 1 has won game 4"
        );

        // let bal1 = tic.getbalance.call({from:p1});
        // let balance = await web3.eth.getBalance(tic.owner);
        // console.log(balance);
        // console.log(bal1);
        // assert.notEqual(balance.valueOf(), balance1.valueOf(),"true");
        // assert.equal(bal1, 0, "true");
        var balances=[];
        await web3.eth.getBalance(accounts[8]).then((data)=>{balances[0]=data});
        await web3.eth.getBalance(accounts[9]).then((data)=>{balances[1]=data});
        // console.log(balances[0]);
        // console.log(balances[1]);
        assert.isTrue(parseFloat(balances[0])>parseFloat(balances[1]),"transfer to p1 success");
    });



});