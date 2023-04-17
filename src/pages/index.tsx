import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
// manually type everything from index.tsx into index2. As your typing write down any section of code you don't understand
// additionally I left a handful of comments that start with QUESTION, when you see this look at the question and answer it in the file answers.txt
// you will likely run into questions you do not have an answer for, in that scenario articulate what you don't understand into a question, then google it,
// if you don't find the answer from your search word the question differently and ask again
// QUESTION explain why we broke this out into its own variable (hint DRY)
const DEFAULT_BOARD_LAYOUT = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
};
// QUESTION: Explain what a react component is and its main sub parts (hint UI, State, Functions)
const Home: NextPage = () => {
  // QUESTION: Explain currentPlayer, setCurrentPlayer, and useState
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [tiles, setTiles] = useState(DEFAULT_BOARD_LAYOUT);
  // QUESTION: explain what useEffect is with an empty dependency array
  useEffect(() => {
    // step 1
    const playerToStart = Math.random() > 0.5 ? "X" : "O";
    setCurrentPlayer(playerToStart);
    //
  }, []);

  // Added another useEffect however unlike the useEffect above this useEffect only fires off when the tiles are updated with a new value
  // QUESTION: how does useEffect knows to fire off only when the tiles are updated?
  useEffect(() => {
    console.log("checking for win");
    checkForWin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles]);

  // QUESTION: when does this function get called?
  const checkForWin = () => {
    // win combos:
    // horizontal
    // 0,1,2
    // 3,4,5
    // 6,7,8
    // vertical
    // 0,3,6
    // 1,4,7
    // 2,5,8
    // diagonal
    // 0,4,8
    // 2,4,6
    // mitch below you'll find an example to check for a horizontal pair. Please provide solutions for the other checks below
    // and remember if you catch yourself repeating code feel free to create a different function to refactor it into another function like we did with onTileClick
    if (tiles[0] === "X" && tiles[1] === "X" && tiles[2] === "X") {
      alert("X wins");
      // since there was a win lets clear the board
      setTiles(DEFAULT_BOARD_LAYOUT);
      // lets also randomly select who starts the next game
      const playerToStart = Math.random() > 0.5 ? "X" : "O";
      setCurrentPlayer(playerToStart);
    }

    if (tiles[0] === "O" && tiles[1] === "O" && tiles[2] === "O") {
      alert("O wins");
      // QUESTION what does SetTiles do when we pass in the value DEFAULT_BOARD_LAYOUT
      setTiles(DEFAULT_BOARD_LAYOUT);
      const playerToStart = Math.random() > 0.5 ? "X" : "O";
      // QUESTION what value does currentPlayer get assigned to here?
      setCurrentPlayer(playerToStart);
    }
  };

  const onTileClick = (index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => {
    if (tiles[index] !== "") {
      return;
    }

    // QUESTION what does SetTiles do when we pass in the value below? Don't understand what ...tiles means? Then google it and explain what ... does
    setTiles({ ...tiles, [index]: currentPlayer });
    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
  };
  return (
    <>
      <Head>
        <title>tic tac toe</title>
        <meta name="description" content="game of tic tac toe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10">
        <div className="text-center">its {currentPlayer}s turn</div>
        <div className="flex justify-center">
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(0);
            }}
          >
            {tiles[0]}
          </div>
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(1);
            }}
          >
            {tiles[1]}
          </div>
          <div
            className=" flex h-full  min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(2);
            }}
          >
            {tiles[2]}
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(3);
            }}
          >
            {tiles[3]}
          </div>
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(4);
            }}
          >
            {tiles[4]}
          </div>
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(5);
            }}
          >
            {tiles[5]}
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(6);
            }}
          >
            {tiles[6]}
          </div>{" "}
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(7);
            }}
          >
            {tiles[7]}
          </div>
          <div
            className="flex  h-full min-h-[200px] min-w-[200px] items-center justify-center border-2 border-black text-center text-8xl"
            onClick={() => {
              onTileClick(8);
            }}
          >
            {tiles[8]}
          </div>
        </div>
        <div>
          1. do rng in the start to determine who goes first
          <br />
          2. when player 1 clicks the tile it should change to their marker
          <br />
          3. check for a win
          <br />
          4. let players know who won
        </div>
      </main>
    </>
  );
};

export default Home;
