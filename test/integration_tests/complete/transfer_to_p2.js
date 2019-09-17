const tictactoe = artifacts.require("tictactoe");

contract("tictactoe", accounts =>{
    const p1 = accounts[18];
    const p2 = accounts[19];
    const hacker = accounts[7];

    it("Player-2 wins so transferring total bet amount to Player-2 testing", async()=> {
        let tic = await tictactoe.deployed();
        var balances1=[];
        await web3.eth.getBalance(accounts[18]).then((data)=>{balances1[0]=data});
        await web3.eth.getBalance(accounts[19]).then((data)=>{balances1[1]=data});
        // console.log(balances1[0]);
        // console.log(balances1[1]);
        await tic.joinplayer1({from:p1,value:web3.utils.toWei("4","ether")});
        await tic.joinplayer2({from:p2,value:web3.utils.toWei("4","ether")});  
        // Game 1 begins
        await tic.game(5,{from:p1});
      
        let stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "Move at 5 made succesfuly"
        )

        await tic.game(1,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "Its not your turn to play",
            "stopped player 1 from making consecutive moves"
        )


        await tic.game(1,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 1 succesful"
        )


        await tic.game(3,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 3 succesful"
        )

        await tic.game(4,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 4 succesful"
        )

        await tic.game(2,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 2 succesful"
        )

        await tic.game(7,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "game won by player 2",
            "Player 2 won"
        )

        // Game2
        await tic.game(1,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "Its not your turn to play",
            "stopped player 1 from making move again in next game"
        )


        await tic.game(1,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 1 succesful"
        )


        await tic.game(9,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 9 succesful"
        )

        await tic.game(2,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 2 succesful"
        )

        await tic.game(8,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 8 succesful"
        )
        await tic.game(8,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "cell already filled",
            "Player 2 tried already occupied cell"
        )

        await tic.game(3,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "game won by player 2",
            "Player 2 won"
        )

        // Seeing num_games now
        stats = await tic.gamesDone.call();
        assert.equal(
            stats,
            2,
            "counter working properly"
        )

        // game3

        await tic.game(5,{from:p1});
      
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "Move at 5 made succesfuly"
        )
        await tic.game(1,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 1 succesful"
        )


        await tic.game(3,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 3 succesful"
        )

        await tic.game(4,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 4 succesful"
        )
        await tic.game(7,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "game won by player 1",
            "Player 1 won"
        )

        // Game4 for draw

        await tic.game(1,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "Move at 1 made succesfuly"
        )
        await tic.game(2,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 2 succesful"
        )

        await tic.game(5,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 5 succesful"
        )

        await tic.game(9,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 9 succesful"
        )

        await tic.game(6,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 6 succesful"
        )

        await tic.game(4,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 4 succesful"
        )

        await tic.game(7,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 2 made move",
            "move at 7 succesful"
        )

        await tic.game(3,{from:p1});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "player 1 made move",
            "move at 3 succesful"
        )

        await tic.game(8,{from:p2});
        stats = await tic.gameStatus();
        assert.equal(
            stats,
            "Its a draw",
            "Game ended in draw"
        )
        // checking Game status
        stats = await tic.gamesDone.call();
        assert.equal(
            stats,
            4,
            "counter working properly"
        )
        // await tic.close();
        
        var balances=[];
        await web3.eth.getBalance(accounts[18]).then((data)=>{balances[0]=data});
        await web3.eth.getBalance(accounts[19]).then((data)=>{balances[1]=data});
        // console.log(balances[0]);
        // console.log(balances[1]);
        assert.isTrue(parseFloat(balances[0]) < parseFloat(balances[1]),"transfer to p2 success");
        // await tic.send();


    });



});