from itertools import combinations, product
import pycosat


def varnum(row, column, digit):
    assert row in range(1, 10) and column in range(1, 10)
    assert digit in range(1, 10)
    return 100 * row + 10 * column + digit


def exactly_one_of(literals):
    clauses = [[l for l in literals]]
    for pair in combinations(literals, 2):
        clauses.append([-l for l in pair])
    return clauses


def one_digit_in_every_cell():
    clauses = []
    for row, column in product(range(1, 10), repeat=2):
        clauses += exactly_one_of([varnum(row, column, digit)
                                   for digit in range(1, 10)])
    return clauses


def one_digit_in_every_row():
    clauses = []
    for row, digit in product(range(1, 10), repeat=2):
        clauses += exactly_one_of([varnum(row, column, digit)
                                   for column in range(1, 10)])
    return clauses


def one_digit_in_every_column():
    clauses = []
    for column, digit in product(range(1, 10), repeat=2):
        clauses += exactly_one_of([varnum(row, column, digit)
                                   for row in range(1, 10)])
    return clauses


def one_digit_in_every_block():
    clauses = []
    for row, column in product([1, 4, 7], repeat=2):
        for digit in range(1, 10):
            clauses += exactly_one_of(
                [varnum(row + a, column + b, digit)
                 for (a, b) in product(range(3), repeat=2)]
            )
    return clauses


def solve_puzzle(puzzle):
    assert len(puzzle) == 9
    assert all(len(row) == 9 for row in puzzle)

    clauses = []
    clauses += one_digit_in_every_cell()
    clauses += one_digit_in_every_row()
    clauses += one_digit_in_every_column()
    clauses += one_digit_in_every_block()

    for row, column in product(range(1, 10), repeat=2):
        if puzzle[row - 1][column - 1] != "*":
            digit = int(puzzle[row - 1][column - 1])
            assert digit in range(1, 10)
            clauses += [[varnum(row, column, digit)]]

    solution = pycosat.solve(clauses)
    if isinstance(solution, str):
        print("No solution")
        exit()

    assert isinstance(solution, list)

    for row in range(1, 10):
        for column in range(1, 10):
            for digit in range(1, 10):
                if varnum(row, column, digit) in solution:
                    print(digit, end="")
        print()


difficult_puzzle = [
    "8********",
    "**36*****",
    "*7**9*2**",
    "*5***7***",
    "****457**",
    "***1***3*",
    "**1****68",
    "**85***1*",
    "*9****4**"
]

solve_puzzle(difficult_puzzle)
