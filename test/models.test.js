const {
  Game,
  Checker,
  capture,
  isSqTwoAway,
  isSqOneAway,
  defineBtwnSq,
  isSqVacant
} = require("../client/js/models");

describe("Game", function() {
  it("should have an n x n board", function() {
    const test = new Game(2);
    const expected = [
      [
        { piece: null, row: 0, col: 0, color: "white" },
        { piece: null, row: 0, col: 1, color: "black" }
      ],
      [
        { piece: null, row: 1, col: 0, color: "black" },
        { piece: null, row: 1, col: 1, color: "white" }
      ]
    ];
    expect(test.board).toEqual(expected);
  });
  it("should color the board", function() {
    const test = new Game(2);
    const expected = [
      [
        { piece: null, row: 0, col: 0, color: "white" },
        { piece: null, row: 0, col: 1, color: "black" }
      ],
      [
        { piece: null, row: 1, col: 0, color: "black" },
        { piece: null, row: 1, col: 1, color: "white" }
      ]
    ];
    expect(test.board).toEqual(expected);
  });
  it("should place pieces", function() {
    const test = new Game(8);
    test.initializeGame();

    const expected = [
      [
        { piece: null, row: 0, col: 0, color: "white" },
        {
          piece: new Checker("white", 0, 1),
          row: 0,
          col: 1,
          color: "black"
        },
        { piece: null, row: 0, col: 2, color: "white" },
        {
          piece: new Checker("white", 0, 3),
          row: 0,
          col: 3,
          color: "black"
        },
        { piece: null, row: 0, col: 4, color: "white" },
        {
          piece: new Checker("white", 0, 5),
          row: 0,
          col: 5,
          color: "black"
        },
        { piece: null, row: 0, col: 6, color: "white" },
        {
          piece: new Checker("white", 0, 7),
          row: 0,
          col: 7,
          color: "black"
        }
      ],
      [
        {
          piece: new Checker("white", 1, 0),
          row: 1,
          col: 0,
          color: "black"
        },
        { piece: null, row: 1, col: 1, color: "white" },
        {
          piece: new Checker("white", 1, 2),
          row: 1,
          col: 2,
          color: "black"
        },
        { piece: null, row: 1, col: 3, color: "white" },
        {
          piece: new Checker("white", 1, 4),
          row: 1,
          col: 4,
          color: "black"
        },
        { piece: null, row: 1, col: 5, color: "white" },
        {
          piece: new Checker("white", 1, 6),
          row: 1,
          col: 6,
          color: "black"
        },
        { piece: null, row: 1, col: 7, color: "white" }
      ],
      [
        { piece: null, row: 2, col: 0, color: "white" },
        {
          piece: new Checker("white", 2, 1),
          row: 2,
          col: 1,
          color: "black"
        },
        { piece: null, row: 2, col: 2, color: "white" },
        {
          piece: new Checker("white", 2, 3),
          row: 2,
          col: 3,
          color: "black"
        },
        { piece: null, row: 2, col: 4, color: "white" },
        {
          piece: new Checker("white", 2, 5),
          row: 2,
          col: 5,
          color: "black"
        },
        { piece: null, row: 2, col: 6, color: "white" },
        {
          piece: new Checker("white", 2, 7),
          row: 2,
          col: 7,
          color: "black"
        }
      ],
      [
        {
          piece: null,
          row: 3,
          col: 0,
          color: "black"
        },
        { piece: null, row: 3, col: 1, color: "white" },
        {
          piece: null,
          row: 3,
          col: 2,
          color: "black"
        },
        { piece: null, row: 3, col: 3, color: "white" },
        {
          piece: null,
          row: 3,
          col: 4,
          color: "black"
        },
        { piece: null, row: 3, col: 5, color: "white" },
        {
          piece: null,
          row: 3,
          col: 6,
          color: "black"
        },
        { piece: null, row: 3, col: 7, color: "white" }
      ],
      [
        { piece: null, row: 4, col: 0, color: "white" },
        {
          piece: null,
          row: 4,
          col: 1,
          color: "black"
        },
        { piece: null, row: 4, col: 2, color: "white" },
        {
          piece: null,
          row: 4,
          col: 3,
          color: "black"
        },
        { piece: null, row: 4, col: 4, color: "white" },
        {
          piece: null,
          row: 4,
          col: 5,
          color: "black"
        },
        { piece: null, row: 4, col: 6, color: "white" },
        {
          piece: null,
          row: 4,
          col: 7,
          color: "black"
        }
      ],
      [
        {
          piece: new Checker("black", 5, 0),
          row: 5,
          col: 0,
          color: "black"
        },
        { piece: null, row: 5, col: 1, color: "white" },
        {
          piece: new Checker("black", 5, 2),
          row: 5,
          col: 2,
          color: "black"
        },
        { piece: null, row: 5, col: 3, color: "white" },
        {
          piece: new Checker("black", 5, 4),
          row: 5,
          col: 4,
          color: "black"
        },
        { piece: null, row: 5, col: 5, color: "white" },
        {
          piece: new Checker("black", 5, 6),
          row: 5,
          col: 6,
          color: "black"
        },
        { piece: null, row: 5, col: 7, color: "white" }
      ],
      [
        { piece: null, row: 6, col: 0, color: "white" },
        {
          piece: new Checker("black", 6, 1),
          row: 6,
          col: 1,
          color: "black"
        },
        { piece: null, row: 6, col: 2, color: "white" },
        {
          piece: new Checker("black", 6, 3),
          row: 6,
          col: 3,
          color: "black"
        },
        { piece: null, row: 6, col: 4, color: "white" },
        {
          piece: new Checker("black", 6, 5),
          row: 6,
          col: 5,
          color: "black"
        },
        { piece: null, row: 6, col: 6, color: "white" },
        {
          piece: new Checker("black", 6, 7),
          row: 6,
          col: 7,
          color: "black"
        }
      ],
      [
        {
          piece: new Checker("black", 7, 0),
          row: 7,
          col: 0,
          color: "black"
        },
        { piece: null, row: 7, col: 1, color: "white" },
        {
          piece: new Checker("black", 7, 2),
          row: 7,
          col: 2,
          color: "black"
        },
        { piece: null, row: 7, col: 3, color: "white" },
        {
          piece: new Checker("black", 7, 4),
          row: 7,
          col: 4,
          color: "black"
        },
        { piece: null, row: 7, col: 5, color: "white" },
        {
          piece: new Checker("black", 7, 6),
          row: 7,
          col: 6,
          color: "black"
        },
        { piece: null, row: 7, col: 7, color: "white" }
      ]
    ];
    expect(test.board).toEqual(expected);
  });
});

describe("Checker", function() {
  it("should have an advance method", function() {
    const test = new Game(2);
    let black = new Checker("black", 0, 0);
    test.board[0][0].piece = black;
    black.advance(test.board[0][0], test.board[1][1]);
    const expected = [
      [
        { piece: null, row: 0, col: 0, color: "white" },
        { piece: null, row: 0, col: 1, color: "black" }
      ],
      [
        { piece: null, row: 1, col: 0, color: "black" },
        { piece: black, row: 1, col: 1, color: "white" }
      ]
    ];

    expect(test.board).toEqual(expected);
  });
});

describe("helper functions", function() {
  it("isSqOneAway", function() {
    const test = new Game(3);
    const actualRow = isSqOneAway("row", test.board[0][0], test.board[1][1]);
    const actualCol = isSqOneAway("col", test.board[0][0], test.board[1][1]);
    expect(actualRow).toBeTruthy();
    expect(actualCol).toBeTruthy();
  });
  it("isSqTwoAway", function() {
    const test = new Game(3);
    const actualRow = isSqTwoAway("row", test.board[0][0], test.board[2][2]);
    const actualCol = isSqTwoAway("col", test.board[0][0], test.board[2][2]);
    expect(actualRow).toBeTruthy();
    expect(actualCol).toBeTruthy();
  });
  it("defineBtwnSq", function() {
    const test = new Game(3);
    const actual = defineBtwnSq(test.board[0][0], test.board[2][2], test.board);
    const expected = test.board[1][1];
    expect(actual).toEqual(expected);
  });
  it("isSqVacant", function() {
    const test = new Game(3);
    const actual = isSqVacant(test.board[0][0]);
    expect(actual).toBeTruthy();
  });
  it("capture", function() {
    const test = new Game(2);
    test.board[0][0].piece = new Checker("white", 0, 0);
    capture(test.board[0][0], test.board);

    const expected = [
      [
        { piece: null, row: 0, col: 0, color: "white" },
        { piece: null, row: 0, col: 1, color: "black" }
      ],
      [
        { piece: null, row: 1, col: 0, color: "black" },
        { piece: null, row: 1, col: 1, color: "white" }
      ]
    ];
    expect(test.board).toEqual(expected);
  });
});
