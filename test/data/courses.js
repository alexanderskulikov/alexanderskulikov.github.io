// Generated from curriculum LaTeX sources. Keep this file data-only; rendering lives in main.js.
window.CSAI_COURSES = [
  {
    "id": "matan1",
    "title": "Calculus 1: Foundations and Differential Calculus",
    "group": "Semester 1",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "1st semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The first part of the course of calculus consists in studying the basic concepts and theorems of differential calculus and functions of one real variable.",
    "prerequisites": [
      "Mathematics at the level of the school curriculum"
    ],
    "whereNeeded": [
      "In all subsequent mathematical disciplines of an analytical nature",
      "To understand the courses: Calculus 2, 3, Probability Theory, Mathematical Statistics, Convex optimization, Fundamentals of Machine learning",
      "For the formation of a common mathematical culture"
    ],
    "syllabus": [
      "Axiomatic of real numbers and concrete realizations",
      "Sets of real numbers. Supremum and infimum",
      "Number sequences, convergence",
      "The number e",
      "Series, summation",
      "Functions of one real variable. Limits, continuity, general topology of the real line",
      "Differentiation and derivatives. Rolle's, Fermat's, Cauchy's and Lagrange's theorems",
      "Higher derivatives. Mathematical analysis of functions",
      "Taylor's formula"
    ],
    "outcomes": [
      "To define basic mathematical notions in rigorous manner",
      "To evaluate qualitatively and quantitatively the asymptotical behavior of functions and sums",
      "To analyze local behavior of functions in various optimization problems",
      "To operate with abstract structures and implement them for solving naturally posed problems"
    ],
    "instructors": [
      {
        "name": "Alexander Shen",
        "image": "images/shen.jpg"
      },
      {
        "name": "Alexander Smal",
        "image": "images/smal.jpg"
      }
    ],
    "source": "curriculum/courses/matan_1.tex",
    "order": 0
  },
  {
    "id": "al1",
    "title": "Algebra 1: Linear Algebra",
    "group": "Semester 1",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "1st semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "This course addresses the underlying structures of computations: from modular arithmetic and complex numbers to polynomials and rationals function, vectors and matrices.",
    "prerequisites": [
      "Mathematics at the level of the school curriculum"
    ],
    "whereNeeded": [
      "In all subsequent mathematical courses",
      "For successful passing of various courses (for example, Algebra 2, Mathematical analysis 1, Algorithms 1, Machine learning)"
    ],
    "syllabus": [
      "Algebraic structures: ring, field, vector space, matrix",
      "Modular arithmetic: residue classes, congruences, Chinese remainder theorem",
      "Complex numbers: algebraic and geometric interpretation, trigonometric form, roots of unity",
      "Polynomials and rational functions: Bezout theorem, interpolation",
      "Linear algebra: linear independence, dimension, systems of linear equations, linear maps and their matrices"
    ],
    "outcomes": [
      "To use a variety of computational tools and notions",
      "To translate problems into the language of linear algebra and solve them",
      "To switch freely between different languages used for describing linear phenomena"
    ],
    "instructors": [
      {
        "name": "Andrei Smolensky",
        "image": "images/smolensky.jpg"
      }
    ],
    "source": "curriculum/courses/algebra_1.tex",
    "order": 1
  },
  {
    "id": "dm1",
    "title": "Discrete Mathematics 1: Logic and Combinatorics",
    "group": "Semester 1",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "1st semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The main goal of the course is to learn how to design and analyze discrete mathematical models in various areas of computer science.",
    "prerequisites": [
      "Mathematics: proofs, functions (logarithm, polynomial, exponent)",
      "Programming: https://www.python.org/about/gettingstarted/Python basics (input/output, loops, recursion)"
    ],
    "whereNeeded": [
      "For designing and analyzing efficient algorithms and programs",
      "For successful passing of the following courses: Algorithms, Probability Theory, Theoretical Computer Science, Mathematical Statistics, Fundamentals of Machine learning"
    ],
    "syllabus": [
      "Proofs",
      "Existence and optimality: constructive and nonconstructive proofs, proofs of nonexistence, proofs of optimality.",
      "Proofs from computational point of view: certificates, proof systems, complexity classes, interactive proofs, zero-knowledge proofs.",
      "Mathematical induction: strong induction, well-ordering principle, strengthened statements, nested statements.",
      "Logic",
      "Predicates: normal forms, Post's theorem, quantifiers.",
      "Satisfiability: SAT solvers, proofs systems, formal verification.",
      "Circuits: computational models, lower and upper bounds.",
      "Sets",
      "Cardinality: countable sets, diagonal argument.",
      "Orders: orders and mathematical induction, Dilworth's theorem.",
      "Combinatorics",
      "Enumeration: enumerating subsets, permutations, bracket sequences; branch and bound methods; dynamic programming; ILP solvers.",
      "Permutations and combinations: binomial coefficients, estimates.",
      "Recurrence relations: ways of solving recurrence relations, divide-and-conquer and backtracking algorithms.",
      "Catalan numbers: three proofs of the formula, various occurrences of Catalan numbers.",
      "Generating functions: basic rules of working with generating functions."
    ],
    "outcomes": [
      "To write down short and rigorous proofs of mathematical statements",
      "To estimate the running time of algorithms and programs",
      "To apply discrete mathematics ideas in various areas of computer science",
      "To implement brute force search, coding and decoding, reductions to the satisfiability problem"
    ],
    "instructors": [
      {
        "name": "Alexander Kulikov",
        "image": "images/kulikov.jpg"
      },
      {
        "name": "Ivan Mihajlin",
        "image": "images/mihajlin.jpg"
      }
    ],
    "source": "curriculum/courses/discrete_math_1.tex",
    "order": 2
  },
  {
    "id": "csb",
    "title": "Computer Science Basics with Python",
    "group": "Semester 1",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "1st semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "Our goal is to level up students' general knowledge in different areas of computer science and to teach them how to use a variety of tools to solve problems in Python.",
    "prerequisites": [
      "Mathematics and Computer Science at the level of the school curriculum"
    ],
    "whereNeeded": [
      "Creating and optimizing software, analyzing data, and improving system performance.",
      "Working as Software Developer, ML Engineer, Data Scientist, DevOps Engineer."
    ],
    "syllabus": [
      "Introduction to Software Engineering. Introduction to PyCharm and Python development.",
      "SSH. Working on a remote server. Networks. Docker. Docker compose",
      "Version control systems. CI/CD. Github actions",
      "Comparison of different programming languages.",
      "Testing. TDD. Logging. DevOps",
      "Introduction to DataBases. Sql and NoSQL databases.",
      "Client-server approach. REST API. Using Flask library."
    ],
    "outcomes": [
      "How to set up a development environment and write Python applications using PyCharm.",
      "To work on remote servers using SSH.",
      "To use Docker and Docker Compose for containerization.",
      "To work with version control systems and implement CI/CD pipelines using GitHub Actions.",
      "To compare different programming languages and choose the right one for the task.",
      "To apply testing methodologies, such as TDD, and implement logging and DevOps practices.",
      "To design and work with both SQL and NoSQL databases.",
      "To build client-server applications and REST APIs using the Flask library."
    ],
    "instructors": [
      {
        "name": "Alexander Avdiushenko",
        "image": "images/avdiushenko.jpg"
      },
      {
        "name": "Tatiana Berlenko",
        "image": "images/berlenko.jpg"
      }
    ],
    "source": "curriculum/courses/computer_science_basic.tex",
    "order": 3
  },
  {
    "id": "cprog",
    "title": "Programming basics with C",
    "group": "Semester 1",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "1st semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "This course introduces the Linux programming environment and the basics of C programming, which is essential for every programmer to understand computer and system programming.",
    "prerequisites": [
      "High school level of informatics"
    ],
    "whereNeeded": [
      "To study Computer architecture",
      "To study Operating systems development",
      "To make projects with robots in SmartCity Lab and Industrial robot Lab"
    ],
    "syllabus": [
      "Program compilation, linking, loading into memory, execution.",
      "Basic Syntax and Structure of C Programs",
      "Data Types, Variables, and Operators",
      "Control Structures (Conditional Statements and Loops)",
      "Functions and Recursion",
      "Arrays, Strings, and Pointers",
      "Structures, File I/O, and Preprocessor Directives",
      "Linux Shell and Command Line Interface",
      "Development Environment and tools",
      "Git and introduction to DevOps",
      "Networking for remote development",
      "Working with robots in SmartCity Lab",
      "Working with robots in Inductrial robot Lab"
    ],
    "outcomes": [
      "How to setup developmnent process in Linux environment",
      "How to create system level software",
      "To create and debug programs with C",
      "How to interact with Linux based embedded systems"
    ],
    "instructors": [
      {
        "name": "Kirill Krinkin",
        "image": "images/krinkin.jpg"
      }
    ],
    "source": "curriculum/courses/programming-basics-with-c.tex",
    "order": 4
  },
  {
    "id": "matan2",
    "title": "Calculus 2: Integration and Functions of Many Variables",
    "group": "Semester 2",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "2nd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The second part of the course of calculus begins with the definition of indefinite integral (antiderivative) and the basic rules of computations for them.",
    "prerequisites": [
      "Calculus 1",
      "Discrete Mathematics 1",
      "Algebra 1 and 2"
    ],
    "whereNeeded": [
      "In all subsequent mathematical disciplines of an analytical nature",
      "To understand the courses: Calculus 3, Probability Theory, Mathematical Statistics, Fundamentals of Machine learning",
      "To create a common mathematical culture"
    ],
    "syllabus": [
      "Antiderivatives",
      "Definite integrals. Fundamental theorem of calculus",
      "Applications of the definite integral: area, volume, length. Curves of infinite length and other fractals",
      "Numerical integration: trapezoid formula, Simpson formula. Combinatorial applications",
      "Improper integrals",
      "Metric spaces, examples, equivalent metrics",
      "General topology of the space R^n",
      "Continuous and differentiable functions of several variables. Partial derivatives. Gradient of a function",
      "Higher order derivatives and differentials",
      "Optimization problems in several variables. Training of neural networks",
      "Implicit function theorem",
      "Submanifolds and their tangent spaces. Lagrange multiplier theorem."
    ],
    "outcomes": [
      "To use integration in practical problems",
      "To make general topological reasoning about existence of extrema of functions on metric spaces",
      "To evaluate qualitatively and quantitatively the behavior of functions of several variables",
      "To formalize common sense optimization problems in rigorous terms and solve them exactly or numerically"
    ],
    "instructors": [
      {
        "name": "Alexander Shen",
        "image": "images/shen.jpg"
      },
      {
        "name": "Alexander Smal",
        "image": "images/smal.jpg"
      }
    ],
    "source": "curriculum/courses/matan_2.tex",
    "order": 5
  },
  {
    "id": "al2",
    "title": "Algebra 2: Analytic Geometry",
    "group": "Semester 2",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "2nd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The second part of the algebra course is dedicated to a deep dive into linear algebra, with a special focus on bilinear algebra, the study of geometry from an algebraic viewpoint.",
    "prerequisites": [
      "Algebra 1",
      "Discrete Mathematics 1",
      "Mathematical Analysis 1"
    ],
    "whereNeeded": [
      "For successful passing of the following courses: Mathematical analysis 2, Algorithms 1, Mathematical statistics, Machine learning"
    ],
    "syllabus": [
      "Operators: determinants, eigenvalues and eigenvectors, canonical forms",
      "Bilinear algebra: bilinear and quadratic forms, diagonalization",
      "Analytic geometry: Euclidean and Hermitian spaces, projections, reflections, orthogonalization",
      "Normal operators: orthogonal and unitary matrices, Hermitian matrices, eigendecomposition",
      "Decompositions and applications: SVD, QR and polar decompositions, PCA, least squares, low-rank approximations"
    ],
    "outcomes": [
      "To calculate determinants and use them",
      "To interpret geometric problems in terms of linear algebra",
      "To apply the tools of bilinear algebra to data analysis"
    ],
    "instructors": [
      {
        "name": "Andrei Smolensky",
        "image": "images/smolensky.jpg"
      }
    ],
    "source": "curriculum/courses/algebra_2.tex",
    "order": 6
  },
  {
    "id": "dm2",
    "title": "Discrete Mathematics 2: Probability and Graphs",
    "group": "Semester 2",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "2nd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The main goal of the course is to learn how to design and analyze discrete mathematical models in various areas of computer science.",
    "prerequisites": [
      "Proofs, logic, combinatorics (Discrete Mathematics 1)"
    ],
    "whereNeeded": [
      "For successful passing of the following courses: Algorithms, Probability Theory, Theoretical Computer Science, Mathematical Statistics, Fundamentals of Machine learning."
    ],
    "syllabus": [
      "Discrete probability theory",
      "Events: distributions; probability theory and combinatorics; process tree; birthday paradox; computing probabilities recursively.",
      "Independency: fractions; conditional probabilities; independent events; Bayes' formula; Lovász Local Lemma.",
      "Random variables: independent random variables; distributions; expectations; geometric distribution; Poisson distribution.",
      "Deviations: Markov inequality; variance; Chebyshev inequality; law of large numbers; central limit theorem; sampling method; Chernoff inequality.",
      "Probabilistic method: tournament paradox; Ramsey numbers; sum-free sets; maximum satisfiability.",
      "Probability in Computer Science: algorithms; verification; comparing files over a network; confidential computation; approximation algorithms; universal hashing; derandomization; universal hash function; error amplification.",
      "Graph theory",
      "Trees: DFS and BFS trees; minimum spanning tree; Cayley's formula; matrix-tree theorem.",
      "Cycles: topological ordering; strongly connected components; Eulerian and Hamiltonian cycles; traveling salesman problem; de Bruijn graphs and genome assembly.",
      "Flows: connectivity; flows; cuts; bipartite matchings; project selection; image segmentation.",
      "Matchings: independent sets and coverings; bipartite graphs; vertex covers; stable matchings.",
      "Colorings: greedy coloring; degrees and cliques; nonlocality of chromatic number; chromatic polynomial; coloring algorithms.",
      "Planarity: Euler's formula; nonplanar graphs; crossing number; planar graph coloring; special layouts."
    ],
    "outcomes": [
      "To compute probabilities of basic events as well as expectations and deviations of random variables",
      "To model various problems as graphs and to apply known graph tools for solving them"
    ],
    "instructors": [
      {
        "name": "Alexander Kulikov",
        "image": "images/kulikov.jpg"
      },
      {
        "name": "Ivan Mihajlin",
        "image": "images/mihajlin.jpg"
      }
    ],
    "source": "curriculum/courses/discrete_math_2.tex",
    "order": 7
  },
  {
    "id": "alg1",
    "title": "Algorithms 1: Basic Toolbox",
    "group": "Semester 2",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "2nd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, final exam",
    "summary": "This course provides an introduction to basic techniques used for algorithm design.",
    "prerequisites": [
      "Mathematics: proofs, functions (logarithm, polynomial, exponent)",
      "Programming: https://www.python.org/about/gettingstarted/Python basics (input/output, loops, recursion)"
    ],
    "whereNeeded": [
      "For designing and analyzing efficient algorithms and programs",
      "For successful passing of the following courses: Theoretical Computer Science, Machine Learning"
    ],
    "syllabus": [
      "Algorithms and complexity analysis",
      "Algorithms, complexity, asymptotics.",
      "Randomized algorithms.",
      "Amortized analysis",
      "Sorting algorithms",
      "Merge sort",
      "Heap sort",
      "Quick sort",
      "Lower bound for sorting algorithms",
      "Basic technics",
      "Greedy algorithms",
      "Dynamic programming",
      "Divide and conquer",
      "Data structures",
      "Binary heap",
      "Stack, queue",
      "Segment tree",
      "Binary search tree",
      "Hash table"
    ],
    "outcomes": [
      "To estimate the running time of algorithms and programs",
      "To describe and use basic algorithms and data structures",
      "To recognize problems that can be solved using techniques learned in this cours",
      "To design new algorithms for similar problems"
    ],
    "instructors": [
      {
        "name": "Pavel Mavrin",
        "image": "images/mavrin.jpeg"
      }
    ],
    "source": "curriculum/courses/algorithms_1.tex",
    "order": 8
  },
  {
    "id": "pp",
    "title": "Programming Paradigms",
    "group": "Semester 2",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "2th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "assignments, midterm, final exam",
    "summary": "Unlock the diverse world of programming paradigms with our comprehensive course, which offers a deep dive into various programming approaches, including imperative, declarative, procedural, functional, and logic programming, along with...",
    "prerequisites": [
      "Basic math concepts (Mathematical Analysis 1, Algebra, Discrete Mathematics 1)",
      "Programming: basic knowledge of some programming language: input-output, loops, recursion, classes, functions (Python, Programming Basics)"
    ],
    "whereNeeded": [
      "More specialized software engineering courses",
      "Working as Software Developer, ML Engineer, Data Scientist"
    ],
    "syllabus": [
      "Programming Paradigms: An overview of imperative, declarative, and procedural programming",
      "Procedural Programming: Learn the basics with languages like Python and C, and apply your knowledge through practical exercises",
      "Functional Programming: functions, recursion, immutability, with practical examples in Python and Haskell",
      "Logic Programming: Introduction to Prolog and its comparison with imperative programming",
      "Object-Oriented Programming (OOP): Understand OOP principles, objects, classes, inheritance, and polymorphism with practical sessions in Java, C++, and Python",
      "Programming Patterns: Learn and practice various programming patterns and antipatterns"
    ],
    "outcomes": [
      "To write programs using different programming paradigms",
      "To apply functional programming concepts in Python and Haskell",
      "To understand logic programming with Prolog",
      "To design and implement object-oriented programs in Java and Python",
      "To recognize and apply programming patterns and antipatterns",
      "To showcase your understanding through project defense sessions, receiving feedback to refine your skills"
    ],
    "instructors": [
      {
        "name": "Alexander Avdiushenko",
        "image": "images/avdiushenko.jpg"
      },
      {
        "name": "Tatiana Berlenko",
        "image": "images/berlenko.jpg"
      }
    ],
    "source": "curriculum/courses/programming_paradigms.tex",
    "order": 9
  },
  {
    "id": "matan3",
    "title": "Mathematical Analysis 3",
    "group": "Semester 3",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "3rd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "exam",
    "summary": "In the third part of the Calculus course, students study two big topics: measure theory (multidimensional integration), and functional series, including Fourier series and Fourier transform.",
    "prerequisites": [
      "Mathematical analysis 1 and 2.",
      "Algebra 1.",
      "Discrete mathematics 1"
    ],
    "whereNeeded": [
      "In all subsequent mathematical disciplines of an analytical nature",
      "To understand the courses: Probability Theory, Mathematical Statistics, Machine Learning",
      "To create a common mathematical culture"
    ],
    "syllabus": [
      "Abstract measure theory and Lebesgue measure in R^n",
      "Munipulations with integral, sums, derivatives and limits",
      "Most important theorems from Measure theory",
      "Change of variables in a multiple integrals and applications",
      "Hilbert space, orthogonal systems. Functional spaces",
      "Fourier decomposition of a periodic function",
      "Fourier transform"
    ],
    "outcomes": [
      "To understand the basic constructions of the measure theory and multiple integration",
      "To know the values of basic integrals used in probability theory and the derivation of the corresponding formulae",
      "To understand the scalar product on functions and how to use it in optimization problems",
      "To understand the basic of the Fourier analysis and its applications"
    ],
    "instructors": [
      {
        "name": "Fedor Bakharev",
        "image": "images/bakharev.jpg"
      }
    ],
    "source": "curriculum/courses/matan_3.tex",
    "order": 10
  },
  {
    "id": "arch",
    "title": "Computer Architecture",
    "group": "Semester 3",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "3rd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "This course provides an in-depth exploration of the fundamental principles and design methodologies of modern computer systems.The discipline introduces students to the architecture of the computer at multiple levels.",
    "prerequisites": [
      "High school level of physics",
      "Programming basics with C"
    ],
    "whereNeeded": [
      "To study Operating systems development",
      "To work with modern hardware",
      "To develop own processing units",
      "To work in the area of embodied AI and Cyber-physical systems",
      "To make projects with robots in SmartCity Lab and Industrial robot Lab"
    ],
    "syllabus": [
      "Combinational and Sequential logic.",
      "RISC-V instruction set architecture introduction: base and optional extensions",
      "ALU, memory organization",
      "Processor instructions encoding and their types",
      "Single-cycle processor: data path, control unit",
      "Multi-cycle processor: data path, control unit",
      "Pipelined processor, Pipeline hazards",
      "Hardware design with Verilog",
      "RISC-V Privileged Architecture",
      "ELF structure, application binary inteface"
    ],
    "outcomes": [
      "How to design custom processors and other hardware",
      "How to programm RISC-V with assembly language",
      "To make programms on the lowest level",
      "To support hardware on operating system level"
    ],
    "instructors": [
      {
        "name": "Kirill Krinkin",
        "image": "images/krinkin.jpg"
      }
    ],
    "source": "curriculum/courses/computer-architecture.tex",
    "order": 11
  },
  {
    "id": "prob",
    "title": "Probability Theory",
    "group": "Semester 3",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "3rd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The course is dedicated to the study of randomness in the continuous setting, which requires, as compared to the discrete case, a new language of probability densities and cumulative distributions functions.",
    "prerequisites": [
      "Mathematical analysis 2",
      "Discrete mathematics 2"
    ],
    "whereNeeded": [
      "For implementing any system including a non-trivial use of randomness",
      "For successful passing of the following courses: Mathematical statistics, Machine learning"
    ],
    "syllabus": [
      "PDF and CDF, important continuous distributions",
      "Markov, Chebyshev and Jensen inequalities",
      "Convergence: almost sure, in probability, in distribution; LLN and CLT",
      "Random processes",
      "Bayesian inference"
    ],
    "outcomes": [
      "To understand and analyze continuous probability distributions and their properties",
      "To apply the law of large numbers and the central limit theorem",
      "To apply concepts from information theory, such as entropy and mutual information, to measure uncertainty and information content.",
      "To explore and implement basic applications of continuous probability in machine learning"
    ],
    "instructors": [
      {
        "name": "Andrei Smolensky",
        "image": "images/smolensky.jpg"
      }
    ],
    "source": "curriculum/courses/probability.tex",
    "order": 12
  },
  {
    "id": "alg2",
    "title": "Algorithms 2: Data Structures",
    "group": "Semester 3",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "3rd semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homeworks, midterm, final exam",
    "summary": "This course provides an in-depth understanding of some of the fundamental algorithms and data structures from various areas of computer science.",
    "prerequisites": [
      "Mathematics: proofs, functions (logarithm, polynomial, exponent)",
      "Programming: https://www.python.org/about/gettingstarted/Python basics (input/output, loops, recursion)"
    ],
    "whereNeeded": [
      "For designing and analyzing efficient algorithms and programs",
      "For successful passing of the following courses: Theoretical Computer Science, Machine Learning."
    ],
    "syllabus": [
      "Graph algorithms",
      "Binary lifting method",
      "Depth-first search",
      "Biconnectivity. Strong connectivity",
      "2-SAT problem",
      "Minimal spanning tree",
      "Shortest paths",
      "Bipartite matchings",
      "Graphs games analysis",
      "String algorithms",
      "Substring search problem",
      "Aho-Corasick algorithm",
      "Math algorithms",
      "Number theory algorithms",
      "Cryptography algorithms",
      "Fast Fourier transformation"
    ],
    "outcomes": [
      "To describe and use fundamental algorithms",
      "To explain the mathematical concepts needed for the analysis of the behavior of algorithms",
      "To recognize problems that can be solved using techniques learned in this course",
      "To design new algorithms for similar problems"
    ],
    "instructors": [
      {
        "name": "Pavel Mavrin",
        "image": "images/mavrin.jpeg"
      }
    ],
    "source": "curriculum/courses/algorithms_2.tex",
    "order": 13
  },
  {
    "id": "fml",
    "title": "Fundamentals of Machine Learning",
    "group": "Semester 3",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "3th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "assignments, midterm, final exam",
    "summary": "The aim of the course is to demystify AI. This comprehensive course delves into both basic and advanced concepts of machine learning and deep learning.",
    "prerequisites": [
      "Vectors and matrices, SVD (Algebra)",
      "Bayes' theorem (Discrete Mathematics)",
      "Mean and variance (Probability theory)",
      "Differentiation (Mathematical Analysis 1), gradient descent (Mathematical Analysis 2)",
      "Programming: basic knowledge of the programming language Python (input-output, loops, recursion, classes, functions)"
    ],
    "whereNeeded": [
      "More specialized machine learning courses",
      "Working as Data Scientist, ML Engineer, ML Researcher"
    ],
    "syllabus": [
      "Machine Learning task examples, quality evaluation",
      "Matrix differentiation, chain rule",
      "Linear methods of classification and regression",
      "Stochastic gradient descent",
      "Decision trees, ensembles, gradient boosting",
      "Intro to neural networks, Backpropagation, Multi-Layer Perceptron (MLP)",
      "Intro to language modelling: bigrams",
      "Activations, BatchNorm",
      "WaveNet, convolutions",
      "Recurrent Neural Networks (RNN), attention, transformers"
    ],
    "outcomes": [
      "To navigate the vast field of machine learning",
      "To understand fundamental principles of the various methods",
      "To formalize tasks in the model learning language",
      "The advantages and disadvantages of neural networks",
      "To implement basic models in the programming language Python",
      "Problems that arise when training models"
    ],
    "instructors": [
      {
        "name": "Alexander Avdiushenko",
        "image": "images/avdiushenko.jpg"
      }
    ],
    "source": "curriculum/courses/fundamentals_of_ML.tex",
    "order": 14
  },
  {
    "id": "ae",
    "title": "Algorithm Engineering",
    "group": "Semester 3",
    "category": "Project-based",
    "categoryKey": "proj",
    "semester": "3th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "project work",
    "summary": "Algorithm Engineering is a branch of Computer Science that focuses on the design, analysis, implementation, optimization, profiling and experimental evaluation of computer algorithms, bridging the gap between algorithmics theory and...",
    "prerequisites": [
      "Basic algorithms and data structures (Algorithms 1)",
      "Object-oriented programming (OOP), programming patterns (Programming Paradigms)"
    ],
    "whereNeeded": [
      "Designing solutions for real-world problems with large datasets",
      "Profiling, tuning, and debugging performance-critical applications",
      "Building high-performance software (e.g., databases, compilers, AI systems)",
      "Working with embedded systems and memory-constrained environments",
      "Autonomous ground/air robots localization, mobile mapping (indoor/outdoor)"
    ],
    "syllabus": [
      "Shortest path algorithms and heuristics: Dijkstra, bidirectional Dijkstra, A^*, hub labeling, contraction hierarchies",
      "AI. Genetic algorithms for combinatorial optimisation: encoding design, selection–crossover–mutation, hybrid local search, adaptive parameter tuning",
      "EKF/UKF — linearization, Particle filters, scan matching, map representations"
    ],
    "outcomes": [
      "To profile and benchmark algorithms",
      "To translate theoretical ideas into efficient code",
      "To design experiments to compare algorithms",
      "To recognize and avoid algorithmic bottlenecks in production code",
      "To design motion/sensor models and tune process/measurement noise",
      "To implement algorithms for real-world problems"
    ],
    "instructors": [],
    "source": "curriculum/courses/algorithm-engineering.tex",
    "order": 15
  },
  {
    "id": "aml",
    "title": "Advanced Machine Learning",
    "group": "Semester 4",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "4th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "assignments, midterm, final exam",
    "summary": "Explore the depths of semi- and unsupervised learning, mastering clustering and the Expectation-Minimization algorithm through hands-on practice.",
    "prerequisites": [
      "Fundamentals of Machine Learning (ML)",
      "Bayes' theorem (Discrete Mathematics)",
      "Mean and variance (Probability theory)",
      "Programming: basic knowledge of the programming language Python (input-output, loops, recursion, classes, functions)"
    ],
    "whereNeeded": [
      "Even more specialized machine learning courses",
      "Working as Data Scientist, ML Engineer, ML Researcher"
    ],
    "syllabus": [
      "Clustering and EM Algorithm: Theory and practical applications",
      "Reinforcement Learning: From foundational principles to advanced applications like AlphaZero",
      "Generative Models: VAEs, GANs, CLIP, flows, and diffusion models with practical sessions",
      "Large Language Models: Tokenization, embeddings, and advanced prompting techniques",
      "LLM Challenges: Hallucinations, multi-agent systems, and optimization economics"
    ],
    "outcomes": [
      "To navigate the vast field of machine learning",
      "To gain hands-on experience with clustering and generative models",
      "To understand and tackle LLM-specific challenges",
      "Enhance your knowledge in both theoretical and practical aspects of AI"
    ],
    "instructors": [
      {
        "name": "Alexander Avdiushenko",
        "image": "images/avdiushenko.jpg"
      }
    ],
    "source": "curriculum/courses/advanced_ML.tex",
    "order": 16
  },
  {
    "id": "stat",
    "title": "Mathematical statistics",
    "group": "Semester 4",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "4th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, exam",
    "summary": "Mathematical statistics is a branch of mathematics that deals with the description and analysis of data for the construction of probabilistic models of random phenomena that gave rise to these data.",
    "prerequisites": [
      "Probability Theory: fundamentals, random variables, limit theorems",
      "Mathematical analysis 3: measure theory, integration",
      "Algebra: linear algebra, orthogonality",
      "Programming: basic knowledge of the programming language Python"
    ],
    "whereNeeded": [
      "To understand the course Machine Learning",
      "At work in any position related to with forecasting and analytics",
      "In life for a more critical and meaningful perception of information"
    ],
    "syllabus": [
      "Fundamentals of mathematical statistics: descriptive statistics, parameter estimation, confidence intervals, hypothesis testing, goodness of fit and homogeneity tests, linear regression",
      "Monte Carlo method, resampling methods",
      "Fundamentals of the Bayesian approach, Bayesian classification"
    ],
    "outcomes": [
      "visualize data for preliminary analysis",
      "evaluate unknown parameters of the model under training and determine the quality of the assessments received",
      "formulate problems in terms of statistical hypotheses and test them",
      "use bootstrap for parameter estimation and hypothesis testing",
      "work with linear models, determine their quality and use them for forecasting",
      "use the packages scipy.stats, pandas, matplotlib, sklearn, etc. to solve the problems described above on real data"
    ],
    "instructors": [
      {
        "name": "Andrei Smolensky",
        "image": "images/smolensky.jpg"
      }
    ],
    "source": "curriculum/courses/mathstat.tex",
    "order": 17
  },
  {
    "id": "hci",
    "title": "Human Computer Interaction",
    "group": "Semester 4",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "4th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "HCI course covers the essential concepts and best practices of Human-Computer Interaction (HCI), combining theoretical foundations with practical skills for designing user interfaces.",
    "prerequisites": [
      "No advanced programming is required."
    ],
    "whereNeeded": [
      "To present and justify product decisions, and deliver a product pitch.",
      "For teamwork with developers and product managers (handoff, specs, iteration).",
      "For roles related to product development, including product management, startup teams, and engineering-driven product roles."
    ],
    "syllabus": [
      "Module 1: User Research & Market Analysis (field research, competitors, UVP, hypothesis validation, interviews, surveys, usability testing)",
      "Module 2: Product Strategy & Interaction Design (UX strategy, personas, scenarios, JTBD, story mapping, IA, navigation, user flows)",
      "Module 3: Design Principles & Best Practices (visual hierarchy, layout principles, UI text, patterns, Fitts/Hick laws, rapid interface testing)",
      "Module 4: Basics of Visual Design & Branding (typography, color, grids, UI kits, brand identity, tone of voice, references)",
      "Module 5: Human Factors & Design to Dev (cognitive biases, accessibility, ergonomics, design systems, component approach, handoff)",
      "Final module: Product Pitch & Presentation (portfolio/case structure, storytelling, presentation design)"
    ],
    "outcomes": [
      "To plan and conduct user research, and summarize insights into actionable requirements.",
      "To define personas, user scenarios, information architecture, and user flows.",
      "To create wireframes and interactive prototypes in Figma, iterate quickly, and document design decisions.",
      "To apply usability heuristics, run usability testing, and turn findings into prioritized improvements.",
      "To prepare a design handoff (specs, components, states) and collaborate effectively with engineers.",
      "To present and defend a solution: product pitch, narrative, and a clear final demo."
    ],
    "instructors": [
      {
        "name": "Matvey Bryksin",
        "image": "images/matvey_bryksin.jpeg"
      }
    ],
    "source": "curriculum/courses/hci.tex",
    "order": 18
  },
  {
    "id": "db",
    "title": "Databases",
    "group": "Semester 5",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "5th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The course provides a practical introduction to databases with a strong emphasis on SQL.",
    "prerequisites": [
      "Prerequisite 1 (Course 1)",
      "Prerequisite 2 (Course 2)"
    ],
    "whereNeeded": [
      "For working with data in any modern field such as business, finance, or other data-driven industries.",
      "For gaining practical skills in SQL that are essential for software engineers, analysts, and data professionals.",
      "For building applications that rely on reliable data storage and processing.",
      "For analyzing and transforming data to make informed decisions.",
      "For understanding how databases support scalability, performance, and security in real-world systems."
    ],
    "syllabus": [
      "Introduction to Databases (0.5–1 session)",
      "SQL Essentials and Practical Usage (5–6 sessions)",
      "Relational Model and Database Design (1.5–2 sessions)",
      "Performance and Query Optimization (0.5–1 session)",
      "Transactions and Access Control (0.5–1 session)",
      "SQL and NoSQL (1 session)"
    ],
    "outcomes": [
      "to write SQL queries to retrieve, filter, and aggregate data.",
      "to design relational database schemas and apply normalization.",
      "to use joins, subqueries, and advanced SQL features to answer complex questions.",
      "to optimize queries with indexes and understand execution plans.",
      "to manage transactions and ensure data consistency.",
      "to implement access control and user privileges for database security.",
      "to compare relational databases with NoSQL solutions and know when to apply each."
    ],
    "instructors": [],
    "source": "curriculum/courses/databases.tex",
    "order": 19
  },
  {
    "id": "robotics",
    "title": "Robotics and Computer Vision",
    "group": "Semester 5",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "5th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The project-oriented course \"Robotics and Computer Vision\" aims to explore the environment techniques and tools for programming robots, encompassing embedded programming, middleware such as ROS2, and a variety of libraries that assist in...",
    "prerequisites": [
      "Programming basics with C",
      "Computer Architecture",
      "Linear Algebra",
      "Operating Systems"
    ],
    "whereNeeded": [
      "To work with modern robotics equipment",
      "To be able to create embodied autonomous agents",
      "To make projects with robots in SmartCity Lab and Industrial robot Lab"
    ],
    "syllabus": [
      "Introduction into Robotica",
      "Robot Operating System",
      "Introduction into Embedded Programming",
      "Control theory fundamentals",
      "Computer vision and applications with OpenCV",
      "Structure from Motion Algorithms",
      "Simultaneous Localization and Mapping",
      "Navigation for Mobile Robots",
      "GPU Programming fundamentals",
      "TPU programming fundamentals"
    ],
    "outcomes": [
      "To design robot from different perspectives (hardware, system and applied software)",
      "To implement autonomous robot behaviors",
      "To implement multi-robot distributed systems",
      "To create algorithms for robot perception, cognition and planning"
    ],
    "instructors": [
      {
        "name": "Kirill Krinkin",
        "image": "images/krinkin.jpg"
      }
    ],
    "source": "curriculum/courses/robotics.tex",
    "order": 20
  },
  {
    "id": "agile",
    "title": "Agile Scrum for AI Development",
    "group": "Semester 5",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "5th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "Scrum stands out as the predominant agile framework widely employed in diverse sectors, spanning from web development and computer games to robotics and Artificial Intelligence.",
    "prerequisites": [
      "None required"
    ],
    "whereNeeded": [
      "Mastery of Scrum practices enhances career prospects in AI and software development, particularly in environments focused on continuous delivery and rapid iterations.",
      "The course's focus on managing uncertainties and balancing speed with quality in Agile environments will be invaluable for students in real-world scenarios where they must adapt quickly to changes and unforeseen challenges.",
      "The course will strengthen students' collaboration, problem-solving and decision-making skills, essential for both technical and leadership roles."
    ],
    "syllabus": [
      "Introduction to Agile methodology in the age of AI. Overview of agile principles, comparison with traditional project management approaches, need for adaptability in AI projects",
      "Understanding the AI development lifecycle, key considerations at each stage in an agile context.",
      "Introduction to the SCRUM framework, artifacts, values, roles, meetings and more, adapting SCRUM for AI.",
      "Forming Agile AI teams–Scrum Roles and responsibilities, cross-functional, self-organising, team dynamics and collaboration.",
      "Agile requirements engineering–Product backlog in AI projects, Product Vision and Product Backlog, User Stories, MOSCOW and Definition of Done. Breaking down Epic user stories, planning poker estimation, MVP, Release planning. Sprint Planning for AI, Breaking down user stories into tasks and into sprint-sized increments, The Sprint goal, Sprint Backlog Adapting sprint planning for evolving AI requirements.",
      "Conducting AI Sprints, Implementing iterative model development, Agile practices for coding, testing, and integration, Intro to XP.",
      "Lego4Scrum Hackathon – Industry well known based technique to apply Scrum in practice.",
      "Coursework project feedback sessions, Final oral coursework demonstrations."
    ],
    "outcomes": [
      "The core principles of Agile methodology and the Scrum framework, including roles, artifacts, and meetings.",
      "To effectively apply Agile Scrum to manage uncertainty and adapt quickly to changes in AI projects.",
      "Techniques for creating, prioritising, and managing a Product Backlog tailored for AI, including estimation of user stories.",
      "Effective team collaboration, self-organisation, and iterative development processes within cross-functional teams."
    ],
    "instructors": [
      {
        "name": "Avgousta Kyriakidou",
        "image": "images/kyriakidou.jpg"
      }
    ],
    "source": "curriculum/courses/agile.tex",
    "order": 21
  },
  {
    "id": "advgraph",
    "title": "Advanced Graph Theory",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5-8 semesters, elective",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "This course delves into the advanced concepts of graph theory, building on the foundations laid in Discrete Mathematics courses.",
    "prerequisites": [
      "Proofs, logic, combinatorics (Discrete Mathematics 1)",
      "Fundamentals of Graph Theory (Discrete Mathematics 2)"
    ],
    "whereNeeded": [
      "Essential for theoretical research in mathematics and computer science",
      "Crucial for developing algorithms and solving complex problems in topics related to graph theory",
      "Provides foundational knowledge for postgraduate studies in mathematics and theoretical computer science"
    ],
    "syllabus": [
      "Paths and Cycles. Theorems: Ore's, Dirac's, Pósa's, Tutte's and Chvátal's Closure",
      "Matchings. Theorems: Gallai's, Berge's and Kőnig's, Tutte's, Petersen's for Cubic Graphs, Plummer's for Regular Graphs, Petersen's 2-Factor, Lovász's and Berge's Formula for Graph Deficiency",
      "Connectivity. Graph Block Decomposition, Theorems: Menger's, Dirac's, Mader's, Halin's for Triangles",
      "Colorings. Theorems: Vizing's, Brooks', Borodin's, Gallai's for k-Critical Graphs, Dirac's, Vizing's, Gupta's",
      "Planar Graphs. Cyclic Traversal of Boundaries, Articulation Points of Face Boundaries, Graph Triangulation, Theorems: Kuratowski's, Wagner's, Golovina-Yaglom on 3-Coloring Triangulations and Dual Graphs, Tait's Colorings, Thomassen's Theorem on 5-List-Coloring Planar Graphs",
      "Directed Graphs. Strongly Connected Components, Existence of Hamiltonian Cycle in Directed Graphs, Hamiltonian Path and Cycle in Strongly Connected Tournaments, Theorems: Rédei's on Hamiltonian Paths in Tournaments, Chvátal-Lovász, Gallai-Milgram, Dilworth's, Roy-Gallai, Galvin's, Alon-Tarsi",
      "Networks and Flows. Menger's Theorem, Maximum Flow in Arbitrary Networks, Dinic's algorithm",
      "Extremal Graph Theory. Ramsey Numbers for Trees and Complete Graphs, Edge Count in Graphs without K_m, n and Theorems of Turán for Graphs without K_n, Bondy-Simonovits for Even Cycles and Induced Ramsey for Bipartite and General Graphs",
      "Spanning Trees. Number of Spanning Trees, Prüfer Code, Theorems: Cayley's, Bowler-Carmesin on Covering and Packing, Nash-Williams"
    ],
    "outcomes": [
      "Analyze and solve advanced graph theoretical problems",
      "Conduct rigorous proofs and logical reasoning in graph theory"
    ],
    "instructors": [
      {
        "name": "Nikolai Chukhin",
        "image": "images/chukhin.jpg"
      }
    ],
    "source": "curriculum/courses/advanced_graph_theory.tex",
    "order": 22
  },
  {
    "id": "npalgo",
    "title": "Algorithms for NP-hard Problems",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "elective (5-8 semesters)",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "Many computational problems arising in practice are NP-hard meaning that it is unlikely that they can be solved efficiently.",
    "prerequisites": [
      "Discrete probability (Discrete Mathematics 2)",
      "Basic algorithms (Algorithms 1 and 2)"
    ],
    "whereNeeded": [
      "For designing algorithms for hard problems.",
      "For doing research in Theoretical Computer Science."
    ],
    "syllabus": [
      "Course overview. Algorithms for the Vertex Cover problem: O^*(1.619^n) exact algorithm, 2-approximation algorithm based on inclusion-wise maximal matching, parameterized algorithms.",
      "Kernels for the Vertex Cover problem.",
      "Kernel of size 2k for the Vertex Cover problem. Exact algorithms for the Hamiltonian Path problem: O^*(2^n) time and exponential space using dynamic programming, O^*(2^n) and polynomial space using the inclusion-exclusion formula.",
      "O^*(2^n) time and exponential space algorithm for the Hamiltonian Path problem using FFT. Color coding technique for the k-path problem. Multivariate polynomials over finite fields.",
      "Algebraic algorithms for the k-path problem.",
      "Approximation algorithms for TSP: inapproximability of the general case, 1.5-approximation for the Metric TSP, 2/3-approximation for MAX-ATSP.",
      "4- and 2 23-approximation for the Shortest Common Superstring problem.",
      "Approximation scheme for Euclidean TSP",
      "O^*(2^ n3) exact algorithms for MAX-CUT and MAX-2-SAT via fast matrix multiplication",
      "0.878-approximation algorithm for MAX-CUT and MAX-2-SAT via semidefinite programming",
      "Exact algorithms for the graph coloring problem: O^*(1.5^n) randomized algorithm for 3-coloring via a reduction to 2-SAT, O^*(3^n) for chromatic number using dynamic programming, O^*(2^n) for chromatic number using inclusion-exclusion",
      "Exact algorithms for 3-SAT: O^*(2^2n/3) algorithm for Unique 3-SAT based on branching w.r.t. a random permutation, O^*(1.5^n) algorithm based on local search, O^*((4/3)^n) algorithm based on random walks"
    ],
    "outcomes": [
      "To design approximation, exact, and parameterized algorithms.",
      "To distinguish between easy and hard computational problems.",
      "To implement algorithms for NP-hard problems."
    ],
    "instructors": [
      {
        "name": "Alexander Kulikov",
        "image": "images/kulikov.jpg"
      }
    ],
    "source": "curriculum/courses/algorithms_np.tex",
    "order": 23
  },
  {
    "id": "complexity",
    "title": "Complexity Theory",
    "group": "Electives",
    "category": "Mathematics",
    "categoryKey": "math",
    "semester": "elective (5-8 semesters)",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "In this class, we will try to understand the idea of computation itself. We will start by learning the necessary language and showing that there are problems that we can not solve even with unlimited resources.",
    "prerequisites": [
      "Discrete probability (Discrete Mathematics 2)",
      "Basic algorithms (Algorithms 1 and 2)"
    ],
    "whereNeeded": [
      "For distingushing between computationally hard and easy problems",
      "For doing research in Theoretical Computer Science",
      "For getting a million dollar prize for solving the P vs NP problem"
    ],
    "syllabus": [
      "Computability and uncomputability",
      "P vs NP",
      "Polinomial hierarchy",
      "Space complexity",
      "Randomized computation",
      "Complexity of boolean circuits",
      "Can an untrustworthy magician with infinite knowledge be useful?"
    ],
    "outcomes": [
      "The language of modern theoretical computer science",
      "To understand the complexity of problems through different lenses",
      "To navigate the web of complexity classes",
      "Cool staff"
    ],
    "instructors": [
      {
        "name": "Ivan Mihajlin",
        "image": "images/mihajlin.jpg"
      }
    ],
    "source": "curriculum/courses/complexity.tex",
    "order": 24
  },
  {
    "id": "security",
    "title": "AI-Enhanced Cybersecurity",
    "group": "Electives",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "7th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "This course addresses the fundamental concepts and principles of cybersecurity. It aims to provide students with the knowledge and skills necessary to protect and defend information systems, ensuring their integrity, authentication,...",
    "prerequisites": [
      "Basic programming skills"
    ],
    "whereNeeded": [
      "In subsequent courses on advanced cybersecurity topics.",
      "For professional roles in cybersecurity and information assurance."
    ],
    "syllabus": [
      "Introduction to Information Security, security concepts, security strategy.",
      "Attacks and Threats, types of malicious attacks, advanced persistent threats.",
      "Denial of Service Attacks",
      "Intrusion Detection and Prevention Systems, Scanning and Analysis Tools, Honeypots, Honeynets, and Padded Cell Systems.",
      "Access Control Fundamentals, Protecting Remote Connections, Firewalls.",
      "Basic Cryptography – Symmetric, Foundations of Cryptology, Cipher Methods, Cryptographic Algorithms, Cryptographic Tools.",
      "Basic Cryptography – Asymmetric Cryptography.",
      "Network Security Protocols, SSL, TLS, HTTPS.",
      "Risk Management, Risk Identification, Risk Assessment, Risk Control.",
      "Incident Response.",
      "Introduction to Forensics."
    ],
    "outcomes": [
      "To identify and analyze cyber threats and vulnerabilities.",
      "To design and implement appropriate security measures.",
      "To understand the ethical and legal implications of cybersecurity.",
      "To apply critical thinking and problem-solving skills in real-world scenarios."
    ],
    "instructors": [
      {
        "name": "Lefteris Zacharioudakis",
        "image": "images/zacharioudakis.png"
      }
    ],
    "source": "curriculum/courses/cybersecurity.tex",
    "order": 25
  },
  {
    "id": "crypto",
    "title": "Modern Cryptography",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5-8 semester (elective)",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "Modern communication is based on cryptography. Everyone needs to keep the information private not only statically but also when it is transferred over communication channels.",
    "prerequisites": [
      "Discrete probability, basic randomized algorithms (Discrete Mathematics 2)"
    ],
    "whereNeeded": [
      "To get a job in any field requiring the design of authentication, encryption, blockchains protocols.",
      "To become a computer science professional."
    ],
    "syllabus": [
      "Protocols and primitives: what Alice and Bob can do against Charlie?",
      "Background: all material in algorithms and complexity that you missed by chance.",
      "One-way functions.",
      "Trapdoor functions.",
      "Oblivious transfer.",
      "Cryptographic hash-functions.",
      "Security basics: indistinguishability and semantic security.",
      "Public-key encryption.",
      "Key agreement.",
      "Private-key encryption.",
      "Digital signatures.",
      "Bit commitment (bid in a sealed envelope).",
      "Secure distributed function evaluation.",
      "Blockchains."
    ],
    "outcomes": [
      "How to construct secure cryptographic protocols.",
      "How secure is modern cryptography (spoiler: not much).",
      "The real meaning of a lot of buzzwords :-)"
    ],
    "instructors": [
      {
        "name": "Edward Hirsch",
        "image": "images/hirsch.jpg"
      }
    ],
    "source": "curriculum/courses/crypto.tex",
    "order": 26
  },
  {
    "id": "filesystems",
    "title": "Introduction to File Systems",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5th or 7th semester",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homeworks, project, final exam",
    "summary": "The first goal of this course is to explain how to present a physical storage device (an HDD or an SSD) as a hierarchy of directories and files.",
    "prerequisites": [
      "Programming Basics with C",
      "Computer Architecture"
    ],
    "whereNeeded": [
      "To use databases efficiently.",
      "To implement databases and other storage systems.",
      "To design and implement Web services and networked applications.",
      "To design and implement reliable and highly available systems."
    ],
    "syllabus": [
      "POSIX and Windows APIs for accessing file systems.",
      "Virtual File System layer in the Linux kernel.",
      "On-disk layout of Ext4 and NTFS.",
      "B-trees, LSM-trees, Bloom filters and \"the power of 2 choices\".",
      "Journaling and request idempotency.",
      "Queue management, avoidance of long tails and head-of-line blocking.",
      "Erasure codes and RAID.",
      "Distributed systems and consensus algorithms."
    ],
    "outcomes": [
      "To analyse the performance of applications that work with the storage and the network.",
      "To use the storage and the network efficiently.",
      "To implement systems that are resilient in face of network outages, crashes and faulty hardware.",
      "To use the Golang programming language as well as to use the C language more efficiently."
    ],
    "instructors": [
      {
        "name": "Artem Anisimov",
        "image": "images/anisimov.jpg"
      }
    ],
    "source": "curriculum/courses/file_systems.tex",
    "order": 27
  },
  {
    "id": "information",
    "title": "Information Theory",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5-8 semester (elective)",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "homework, midterm, final exam",
    "summary": "The course is dedicated to studying approaches to defining the concept of \"amount of information\".",
    "prerequisites": [
      "Proofs, logic, combinatorics (Discrete Mathematics 1)",
      "Discrete probability theory (Discrete Mathematics 2)"
    ],
    "whereNeeded": [
      "For designing and analyzing algorithms.",
      "For data analysis and machine learning."
    ],
    "syllabus": [
      "Combinatorial approach: Hartley's formula",
      "Probabilistic approach: Shannon's entropy",
      "Information theory in coding theory",
      "Information theory in cryptography",
      "Communication complexity and formula complexity",
      "Algorithmic approach: Kolmogorov complexity",
      "Applications of Kolmogorov complexity"
    ],
    "outcomes": [
      "To compute the amount of information in an answer to a question, in a random variable, in a text, etc.",
      "To use information-theoretic method in various areas including data analysis and machine learning."
    ],
    "instructors": [
      {
        "name": "Alexander Smal",
        "image": "images/smal.jpg"
      }
    ],
    "source": "curriculum/courses/information.tex",
    "order": 28
  },
  {
    "id": "formal",
    "title": "Practical Formal Methods",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5-8 semesters (elective)",
    "workload": "6 ECTS, November 18-22",
    "assessment": "homework, research project",
    "summary": "This short course provides a brief but comprehensive introduction to practical applications of formal methods for specifying and designing software systems.",
    "prerequisites": [
      "Mathematical logic basics (Discrete Mathematics 1: Logic and Combinatorics)",
      "Basic data structures and algorithms (Algorithms 1: Basic Toolbox)"
    ],
    "whereNeeded": [
      "For analysing and understanding complex computations with many moving parts, such as concurrent and distributed algorithms, reactive systems, and communication protocols",
      "For being able to rigorously state and prove correctness of algorithms and data structures"
    ],
    "syllabus": [
      "State machines and their safety properties",
      "System specifications using temporal logic of actions",
      "Fairness and liveness, refinement",
      "A tool: TLA+",
      "Basics of Satisfiability Modulo Theories",
      "A tool: Z3 SMT Solver",
      "Introduction to deductive program verification and Hoare Logic",
      "A tool: Dafny Program Verifier"
    ],
    "outcomes": [
      "The principes behind machine-assisted formal reasoning",
      "To express a variety of correctness properties of systems, data structures, and algorithms",
      "To employ formal verification for ensuring the absence of bugs and vulnerabilities in correctness-critical software"
    ],
    "instructors": [
      {
        "name": "Ilya Sergey",
        "image": "images/sergey.jpg"
      }
    ],
    "source": "curriculum/courses/practical-formal-methods.tex",
    "order": 29
  },
  {
    "id": "mlsysd",
    "title": "ML System Design",
    "group": "Electives",
    "category": "Programming and AI",
    "categoryKey": "prog",
    "semester": "elective (5–8 semesters)",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "project work, midterm, final exam",
    "summary": "This course is a hands-on, project-oriented journey into the world of Machine Learning Systems Design, specifically crafted to guide you through the complete lifecycle of developing a real-world machine learning system from start to...",
    "prerequisites": [
      "Fundamentals of Machine Learning, Advanced Machine Learning",
      "Software Engineering"
    ],
    "whereNeeded": [
      "In Advanced Machine Learning Projects: To design, develop, and deploy scalable and reliable machine learning systems that can handle real-world data and applications.",
      "For Building and Optimizing ML Pipelines: To create end-to-end pipelines for data processing, model training, and deployment, ensuring efficiency and reproducibility.",
      "In Production-Level AI Solutions: To transition models from research to production, integrating them seamlessly into business operations and products.",
      "For Ensuring Ethical and Safe AI Deployment: To address ethical considerations, ensuring that your machine learning models are fair, unbiased, and safe in their application."
    ],
    "syllabus": [
      "Introduction to Machine Learning Systems Design. Production vs. Research",
      "Fundamentals of ML Systems Design. Lifecycle of an ML System.",
      "Design Doc for ML System",
      "Gathering Datasets and Data Annotation",
      "Data Engineering: data preprocessing, pipeline development, and data versioning.",
      "Exploratory Data Analysis (EDA) and Visualization",
      "Experiment Design: validation schemas, metrics, baseline solution",
      "Model Development: training pipeline and managing experiment versions",
      "Feature Engineering",
      "Model Evaluation",
      "Monitoring and Reliability",
      "Model Serving and Inference Optimization",
      "ML Safety and Ethical Machine Learning",
      "ML Service Integration and Model Deployment",
      "ML Infrastructure and Maintenance"
    ],
    "outcomes": [
      "To develop strong skills in conducting experiments, validating models, and optimizing performance through advanced feature engineering, model evaluation, and error analysis",
      "To design machine learning systems, from problem identification and dataset gathering to model deployment and integration into production environments.",
      "To monitor and maintain ML systems in production, detect and address model drift, and apply ethical considerations to create fair, unbiased, and reliable machine learning models."
    ],
    "instructors": [
      {
        "name": "Dmitry Botov",
        "image": "images/botov.jpeg"
      }
    ],
    "source": "curriculum/courses/ml-system-design.tex",
    "order": 30
  },
  {
    "id": "lean",
    "title": "Programming with Proofs",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5-8th semesters",
    "workload": "six days, 3 hours per day",
    "assessment": "homeworks, research project",
    "summary": "This short course provides an introduction to the basics of machine-assisted proofs and program verification in the Lean proof assistant.",
    "prerequisites": [
      "Mathematical logic basics (Discrete Mathematics 1: Logic and Combinatorics)",
      "Basic data structures and algorithms (Algorithms 1: Basic Toolbox)",
      "Basics of functional programming"
    ],
    "whereNeeded": [
      "For understanding the true meaning of a mathematical proof",
      "For being able to rigorously state and prove correctness of algorithms and data structures",
      "For doing research in AI-powered mathematics and verification"
    ],
    "syllabus": [
      "Types and functional programs",
      "Theorems and programs",
      "Different styles of a mechanised proof",
      "Inductive predicates and proofs",
      "Proofs of properties of functional and imperative programs",
      "Safety proofs of state-transition systems"
    ],
    "outcomes": [
      "The principles behind machine-assisted formal reasoning in Lean",
      "How to state and prove mathematical statements using a proof assistant",
      "How to express a variety of correctness properties of systems, data structures, and algorithms"
    ],
    "instructors": [
      {
        "name": "Ilya Sergey",
        "image": "images/sergey.jpg"
      }
    ],
    "source": "curriculum/courses/programming-with-proofs.tex",
    "order": 31
  },
  {
    "id": "publicspeaking",
    "title": "Public Speaking",
    "group": "Electives",
    "category": "Elective",
    "categoryKey": "opt",
    "semester": "5-8 semester (elective)",
    "workload": "6 ECTS, 3 hours per week",
    "assessment": "practice sessions",
    "summary": "This course provides practical skills for creating effective public presentations, covering structure, slides, delivery, and organizational aspects.",
    "prerequisites": [
      "None"
    ],
    "whereNeeded": [
      "For giving research talks",
      "For communicating your ideas clearly",
      "For pitching startups",
      "For defending a thesis"
    ],
    "syllabus": [
      "Introductory session, basic knowledge of algorithm for preparing public speech",
      "Structure of the speech, algorithm of writing speech plan",
      "Practicing the structure of the speech",
      "Delivery, overcoming stage anxiety",
      "Slides, visualization, media and design tools, algorithm for preparing slides",
      "Giving a research talk",
      "Using LaTeX, TikZ, PowerPoint, Manim, and other tools for creating high quality slides",
      "Doing research and writing papers",
      "Crafting a CV and passing an interview"
    ],
    "outcomes": [
      "To deliver well structured talks",
      "To structure your presentation",
      "To create high quality slides",
      "To overcome stage anxiety"
    ],
    "instructors": [
      {
        "name": "Alexander Kulikov",
        "image": "images/kulikov.jpg"
      },
      {
        "name": "Venera Shakirova",
        "image": "images/shakirova.png"
      }
    ],
    "source": "curriculum/courses/public_speaking.tex",
    "order": 32
  }
];
