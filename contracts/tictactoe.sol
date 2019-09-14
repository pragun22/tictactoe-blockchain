pragma solidity >=0.4.22 <0.6.0;

// "x" -> 1
// "o" -> 2

contract tictactoe {
    uint[] board = new uint[](10);
    address player1;
    address player2;
    uint[][] pattern = [[1,2,3],[4,5,6],[7,8,9], [1,4,7],[2,5,8],[3,6,9], [1,5,9],[3,5,7]  ];

    uint turn = 0;
    uint private p1_bet;
    uint private p2_bet;
    bool p1_in = false;
    bool p2_in = false;
    bool flag = false;
    uint num_games = 0;
    uint num_moves = 0;
    uint[] score = new uint[](2);
    uint hack = 0;
    string stats = "valid";

    function joinplayer1() public payable returns (string memory){
        if(p1_in){
            hack = 1;
            return "A game in progress";
        }
        hack = 0;
        p1_in = true;
        player1 = msg.sender;
        p1_bet = msg.value;
        return "You've joined the game";
    }
    function status() public view returns(string memory){
        if(hack == 0){
            if(!p1_in && !p2_in) return "No player has joined yet";
            if(!p1_in && p2_in) return "this case is not possible";
            if(p1_in && !p2_in) return "Waiting for player 2";
            if(p1_in && p2_in) return "Game is currently going on";
        }
        else if(hack == 1){
            return "Hacker trying to enter as player 1";
        }
        else if(hack == 2){
            return "Hacker trying to enter as player 2";
        }
    }

    function joinplayer2() public payable returns(string memory){
        if(!p1_in) return "wait for player1 to join";
        if(p2_in && player2 != msg.sender) 
        {
            hack = 2;
            return "someone else trying to join as player2";
        }
        player2 = msg.sender;
        p2_bet = msg.value;
        p2_in = true;
        hack = 0;
        return "Game begins!!!!!";
    }

    function init_board() public {
        for(uint i = 1;i <= 9;i++)
        {
            board[i] = 0;
        }
    }

    function move(uint cell, uint pl) public returns (int) {
        if(board[cell]!=0) return -1;
        board[cell] = turn + 1;
        if(isWin() == 1)
        {
            score[pl] += 1;
            return 1;
        }
        turn ^= 1;
        stats = "valid";
        return 0;
    }

    function isWin() public view returns (uint){
        for(uint i = 0;i < 8 ; i++)
        {
            uint[] memory b = pattern[i];
            if(board[b[0]] != 0 && board[b[0]] == board[b[1]] && board[b[0]] == board[b[2]])                return 1;
        }
        return 0;
    }

    function gameStatus() public view returns(string){
        return stats;
    }

    function gamesDone() public view returns(uint){
        return num_games;
    }

    function game(uint mov) public{
        if(!p1_in || !p2_in) 
        {
            stats = "Can't play a game without two players";
            return;
        }

        if(mov < 1 || mov > 9)
        {
            stats = "Invalid move";
            return;
        }
        if(num_games == 0 || num_games == 2){
            if(flag==false){
                init_board();
                num_moves = 0;
                turn = 0;
                flag = true;
            }
            if (msg.sender == player1 && turn==0)
            {
                int ret1 = move(mov,0);
                if(ret1==1){
                    stats = "game won by player 1";
                    num_games++;
                    flag = false;
                    return;
                }
                else if(ret1==-1){
                    stats = "cell already filled";
                    return;
                }
                num_moves++;
            }
            else if(msg.sender == player2 && turn==1){
                int ret2 = move(mov,1);
                if(ret2==1){
                    stats = "game won by player 2";
                    num_games++;
                    flag = false;
                    return;
                }
                else if(ret2==-1){
                    stats = "cell already filled";
                    return;
                }
                num_moves++;
            }
            else{
                stats = "Its not your turn to play";
                return;
            }
            if(num_moves==9)
            {
                flag = false;
                num_games++;
                stats = "Its a draw";
                return;
            }
            if(turn==0)
            {
                stats = "player 2 made move";
            }
            else
            {
                stats = "player 1 made move";
            }
        }
        else if(num_games == 1 || num_games == 3)
        {
            if(flag==false){
                num_moves = 0;
                turn = 0;
                flag = true;
            }
            if (msg.sender == player1 && turn==1)
            {
                int ret3 = move(mov,0);
                if(ret3==1){
                    stats = "game won by player 1";
                    num_games++;
                    flag = false;
                    return;
                }
                else if(ret3==-1){
                    stats = "cell already filled";
                    return;
                }
                num_moves++;
            }
            else if(msg.sender == player2 && turn==0){
                int ret4 = move(mov,1);
                if(ret4==1){
                    stats = "game won by player 2";
                    num_games++;
                    flag = false;
                    return;
                }
                else if(ret4==-1){
                    stats = "cell already filled";
                    return;
                }
                num_moves++;
            }
            else{
                stats = "Its not your turn to play";
                return;
            }
            if(num_moves==9)
            {
                flag = false;
                num_games++;
                stats = "Its a draw";
                return;
            }
            if(turn==1)
            {
                stats = "player 2 made move";
            }
            else
            {
                stats = "player 1 made move";
            }
        }
        if(num_games == 4)
        {
            uint total_bet = p1_bet+p2_bet;
            if(score[0] > score[1])
            {
                player1.transfer(total_bet);
            }
            else if( score[1] > score[0])
            {
                player2.transfer(total_bet);
            }
        }

    }
}