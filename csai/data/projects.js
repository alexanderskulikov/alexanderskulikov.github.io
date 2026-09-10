// Generated from curriculum LaTeX sources. Keep this file data-only; rendering lives in main.js.
window.CSAI_PROJECTS = [
  {
    "title": "IWLS 2025 Competition on Boolean Circuit Synthesis",
    "term": "Spring 2025",
    "type": "Term project",
    "mentor": "Alexander S. Kulikov",
    "students": "Stanislav Alekseev, Timur Degteari, Gregory Emdin, Mikhail Goncharov, Ilia Kondakov, Fedor Kurmazov, Maksim Levitskii, Georgii Levtsov, Maksim Shevkoplias, Roman Shumilov",
    "keywords": [
      "synthesis",
      "research",
      "competition",
      "heuristics",
      "solvers"
    ],
    "description": "The goal of this project is to participate in the IWLS 2025 Programming Contest on Boolean Circuit Synthesis. In this competition, the participants are given the truth tables of 200 Boolean functions and the goal is to synthesize efficient circuits (over the \\ , \\ basis) computing these functions. The smaller are the circuits, the higher is the rank.",
    "report": "During three months, we have been designing and implementing various heuristics for the circuit synthesis problem. Mostly, we have been developing the following two areas. Deciphering functions. Since it is hard to generate a circuit for an arbitrary function, knowing actual meaning of a function would help, so we invested a lot of resources into that area. We looked at different characteristics (number of zeros, injectivity), also drew a picture for each output, where we split the input into two parts, interpret each one as a number, and a pixel (i,j) gets a color depending on an output when the first number is i and the second one is j. For some functions we managed to see what they do, for some we got some insights and made a final circuit using ABC. Circuit synthesis and simplification. As a baseline, we used the ABC tool. As was discovered this year, multiple calls of ABC may improve the circuit. Once the circuit was improved after more than 4500 calls. CIOPS and eSLIM were also used, simplifying some circuits by 40%. For a few benchmarks, we used our new tool that converts a Python code into a circuit. Currently, it supports all basic operations, but does not support loops and RAM access. As a result, we got the third place in the competition. 2025_iwls The report of our team can be found here. We are planning to make our code open source as part of the Cirbo package.",
    "image": "../csai-assets/images/projects/2025_circuits.png",
    "source": "curriculum/projects/IWLS.tex",
    "order": 0
  },
  {
    "title": "Generating Astronomy Olympiad Problems",
    "term": "Spring 2025",
    "type": "Term Project",
    "mentor": "Alexander Avdiushenko",
    "students": "Svyatoslav Suglobov",
    "keywords": [
      "LLM",
      "GenAI",
      "astronomy",
      "olympiad"
    ],
    "description": "Currently, Large Language Models (LLMs) are frequently used to generate challenging problems across various disciplines such as maths, physics, chemistry and biology. In this project, we aim to generate astronomy tasks with an LLM for a variety of competitions and levels.",
    "report": "We created a multi-agent console app that successfully generates astronomy tasks based on previous competitions. It allows extracting problems from PDF docs, searching with semantic using DeepSeek API or other LLM providers, also it generates solutions for astronomy tasks. astro_diagram The presented diagram illustrates the pipeline of a generator, designed to transform user prompt into refined, solvable task formulations and deliver final outputs through iterative enhancement. Each component in the flow performs a distinct role, contributing to a modular and intelligent system. The project has generated significant attention in the Olympiad community. The generator was used to produce original problems for the qualification tests of the Russian team at the International Astronomy Olympiad. Astronomy does not present unique challenges - we can extend the project to mathematics and physics Olympiad problems, provided a suitable dataset is available.",
    "image": "../csai-assets/images/projects/astro_topics.png",
    "source": "curriculum/projects/gen_astronomy_tasks.tex",
    "order": 1
  },
  {
    "title": "Duckiebot Autonomous Driving Stack",
    "term": "Spring 2025",
    "type": "Term Project",
    "mentor": "Ilia Nechaev, Tatiana Berlenko",
    "students": "Maria Fadeeva, Artem Grigorash, Egor Lomakin, Ivan Voevodskiy",
    "keywords": [
      "robotics",
      "computer vision",
      "autonomous driving",
      "ROS2"
    ],
    "description": "The goal of this project is to develop an autonomous driving stack for Duckiebot hardware platform using ROS2. The final system should enable the robot to navigate a city-like environment and follow road markings. The robot should be capable of: Following road markings autonomously Navigating through intersections Localize itself in the environment using April Tags placed at intersections Follow a predefined (possibly looped) route Emergency stop in front of large object Understand and follow traffic light colors",
    "report": "To achieve these goals, students had to understand the ROS2 framework, learn how to work with robot's sensors and actuators, and implement a set of nodes that can perform the target actions. Working with robots is not trivial, starting with the launch of the project. Robots operate in the real world with a great deal of uncertainty, and quite often a situation arises where a program that was just working perfectly starts to throw errors. The students coped perfectly with all the challenges. As a result, students implemented an application that can do each of the target actions and combine all of this in one ROS2 node that sequentially calls the rest nodes. See a demo and a project repository.",
    "image": "../csai-assets/images/projects/duckie.jpg",
    "source": "curriculum/projects/Duckiebot_autonomous_driving_stack.tex",
    "order": 2
  },
  {
    "title": "Jahnke - Emde Style Plots",
    "term": "Fall 2024",
    "type": "Term Project",
    "mentor": "Andrei Smolensky",
    "students": "Stanislav Alekseev",
    "keywords": [
      "plotting",
      "graphics",
      "math"
    ],
    "description": "A famous volume by E. Jahnke and F. Emde featured a collection of plots of bivariate functions of unparalleled quality and detail, all drawn by hand. The graphs plotted by computer software do not come even close to these century-old graphs. The goal of this project is to try to fill the gap between mesh-based graphs and these hand-drawn graphs including details such as level curves, gradient ascent and descent lines, saddle points and more.",
    "report": "We have successfully developed and implemented the three basic components of the Jahnke - Emde style plotting: Constructing the smooth level curves with a variation of the marching squares algorithm, components separation and interpolation. Efficient search of critical points with Hessian-based gradient descent, their clustering and classification by type. Building the gradient lines in computationally- and data-efficient manner. Each of these steps presented a challenge in optimization, and striking a balance between computational efficiency and precision required a careful analysis and testing. All of components have been combined in a working prototype using Plotly engine, and deliver a very decent result, accompanied with some extra decorations (pole caps, domain boundary scirt, etc.). The results are available on GitHub repository. jahnke_emde_gamma_structure",
    "image": "../csai-assets/images/projects/jahnke_emde_gamma.png",
    "source": "curriculum/projects/jahnke_emde_plots.tex",
    "order": 3
  },
  {
    "title": "RAID Operations on GPU with OpenCL",
    "term": "Spring 2025",
    "type": "Term Project",
    "mentor": "Kirill Krinkin",
    "students": "Stepan Maliarovskii",
    "keywords": [
      "RAID",
      "high performance",
      "profiling",
      "GPU",
      "OpenCL"
    ],
    "description": "The project investigates the feasibility of implementing RAID (Redundant Array of Independent Disks) functionality using GPU acceleration through OpenCL. Traditional RAID systems rely on CPU-based calculations for data striping, mirroring, and parity computations, which can become a bottleneck in high-performance storage systems. The initial focus is on establishing a stable OpenCL development environment and benchmarking basic parallel operations to understand the potential benefits and limitations of GPU-accelerated RAID, including memory constraints, data transfer overhead, and overall system performance compared to conventional CPU-based implementations.",
    "report": "The project has successfully established a working OpenCL environment on AMD GPU hardware and completed initial performance benchmarking. While computational kernels show promising performance improvements, overall system integration requires optimization to achieve net performance gains. Key Results OpenCL Environment Stabilized: Resolved critical GPU driver crashes by identifying Mesa driver incompatibility (version 24.3.0-devel) and downgrading to stable version 23.2.1-1ubuntu3.1 22.04.3 Memory Capacity Verified: Successfully processed vector operations on arrays up to 26 million elements by optimizing system VRAM usage through TTY mode execution Performance Benchmarks Established: Achieved 21% faster execution for vector addition operations on GPU (0.11s) compared to CPU (0.14s), demonstrating computational advantage Integration Challenges Identified: Total program execution time currently exceeds CPU-only implementation due to overhead factors requiring further investigation The immediate focus is on profiling overhead sources and optimizing data transfer patterns between CPU and GPU memory to achieve positive end-to-end performance gains before implementing specific RAID algorithms. Sources are available in GitHub repository. 2025_gpuraid.png",
    "image": "../csai-assets/images/projects/2025_gpuraida.png",
    "source": "curriculum/projects/gpu.tex",
    "order": 4
  },
  {
    "title": "Tic-tac-toe with Robot Arm",
    "term": "Spring 2025",
    "type": "Term Project",
    "mentor": "Kirill Krinkin",
    "students": "Mikhail Maliugin",
    "keywords": [
      "robotics",
      "computer vision",
      "robotic arm"
    ],
    "description": "This project tackles the complex challenge of integrating CV with robotic manipulation to create an autonomous Tic-Tac-Toe playing system using a Kinova Gen3 Lite robotic arm. The primary technical difficulty lies in achieving precise coordination between visual perception and physical actuation: the system must accurately detect AprilTag\\/ArUco markers in 3D space through camera calibration, transform these visual coordinates into the robot's reference frame, and execute precise gripper movements to manipulate game pieces without disturbing the board layout. The implementation addresses critical challenges such as compensating for camera distortion, maintaining consistent marker detection under varying lighting conditions, calculating accurate inverse kinematics for the robot arm based on visual input, and ensuring reliable gripper control for picking and placing markers at exact positions.",
    "report": "This project demonstrates sophisticated sensor-actuator integration through a complete perception-planning-action pipeline. The system uses computer vision to detect the game state and a minimax algorithm to determine optimal moves. These algorithmic decisions are then translated into precise physical actions by the Kinova Gen3 Lite robotic arm. The main challenge was ensuring the robot could accurately place markers while accounting for physical constraints and potential visual occlusions. The system maintains repeatable accuracy throughout multiple game cycles, allowing it to play complete games against human opponents without errors. Key Results: AprilTag/ArUco Marker Detection: Implemented marker detection system for field recognition and tracking game pieces on the physical board Camera Calibration System: Developed automatic calibration using chessboard images to ensure accurate marker detection and position measurement Game State Detection: Created algorithms to read marker positions from the camera and determine the current state of the Tic-Tac-Toe game Minimax Algorithm Implementation: Integrated the minimax algorithm for calculating optimal moves, enabling the robot to play strategically Kinova Gen3 Lite Robot Control: Implemented control functions for the robotic arm to execute physical movements and pieces markers on the board Gripper Control Integration: Developed gripper control functionality for manipulating physical pieces during gameplay Sources are available in GitHub repository.",
    "image": "../csai-assets/images/projects/2025_roboarm.png",
    "source": "curriculum/projects/roboarm.tex",
    "order": 5
  },
  {
    "title": "Manifold Learning: Geometric Structure Recovery Methods for Evolutionary Space Research",
    "term": "Spring 2025",
    "type": "Term Project",
    "mentor": "Eugene Stepanov, Kirill Krinkin",
    "students": "Bogdan Iashchenko, Petr Popov",
    "keywords": [
      "manifold learning",
      "bioinformatics",
      "embeddings",
      "multidimentional scaling"
    ],
    "description": "The goal of this project is to develop manifold learning techniques for analyzing evolutionary spaces through geometric structure recovery methods. The project aims to experiment with embedding strategies and implement a pipeline for processing, embedding and visualizing gene sequences. Starting with mathematical problem statements for embedding to Euclidean, spherical and hyperbolic spaces, and a code snippet for semidefinite embedding, the objective is to create working implementations of these algorithms. The main task is to transform pairwise distances from phylogenetic trees into meaningful geometric embeddings that can reveal the structure of evolutionary data, making it possible to visualize relationships between genes and identify evolutionary patterns.",
    "report": "The project successfully implemented four distinct embedding techniques and created a functional pipeline for genomic sequence analysis. Key Results: Implemented embedding algorithms: Classical MDS achieving zero RMSE for initially Euclidean data, spherical embedding achieving zero RMSE for initially spherical data using cosine Gram matrix and pivoted Cholesky decomposition, hyperbolic embedding achieving zero RMSE for initially hyperbolic data via Lorentzian eigendecomposition with Poincaré ball projection, and Maximum Variance Unfolding (MVU) Developed genomic sequence pipeline: Created a system that processes FASTA files, computes pairwise Levenshtein or Hamming distances, embeds the distance matrix into chosen space (Euclidean, spherical, or hyperbolic), and visualizes results in 3D when dimension equals 3 Performance results: Benchmark tests on 100-500 points showed spherical embedding as fastest (0.0007-0.0065 seconds), while tests on genomic sequences (500-10,000 sequences) demonstrated Euclidean embedding processing times from 0.0663 to 93.1289 seconds with RMSE values increasing with dataset size Practical applications demonstrated: The embeddings enable visualization where alike genes are placed closely to each other, reveal structural parameters of evolutionary space, and allow marking the probable location of the last common ancestor through identification of \"evolutionary hollows\" Sources are available in GitHub repository.",
    "image": "../csai-assets/images/projects/2025_manifold.png",
    "source": "curriculum/projects/manifold.tex",
    "order": 6
  },
  {
    "title": "Toward Better Depth Lower Bounds: Composition of Boolean Functions and the KRW Conjecture",
    "term": "Spring 2025",
    "type": "Diploma Project",
    "mentor": "Alexander S. Kulikov, Ivan Mihajlin",
    "students": "Nikolai Chukhin",
    "keywords": [
      "complexity",
      "formula complexity",
      "lower bounds"
    ],
    "description": "Proving formula depth lower bounds is a fundamental challenge in complexity theory, with the strongest known bound of roughly 3 n established by H stad over 25 years ago. The Karchmer-Raz-Wigderson (KRW) conjecture offers a promising approach to advance these bounds and separate P from NC^1. It suggests that the depth complexity of a function composition f g approximates the sum of the depth complexities of f and g. The Karchmer-Wigderson (KW) relation framework translates formula depth into communication complexity, restating the KRW conjecture as \\(CC(KW_f KW_g) CC(KW_f) + CC(KW_g)\\). Prior work has confirmed the conjecture under various relaxations, often replacing one or both KW relations with the universal relation or constraining the communication game through strong composition. The goal of this project is to resolve the KRW conjecture in the setting where the outer function is simple (for example, XOR).",
    "report": "In this work, we examine the strong composition \\(KW_XOR -13.5mu KW_f\\) of the parity function and a random Boolean function f. During the project, we proved that with probability 1-o(1), any protocol solving this composition requires at least \\(n^3 - o(1)\\) leaves (almost matching the upper bound). This result establishes a depth lower bound of \\( 3 n\\), matching H stad's bound, but is applicable to a broader class of inner functions, even when the outer function is simple. While strong composition bounds do not directly yield formula depth bounds, they are often instrumental in analyzing the standard composition (of the corresponding two functions), which directly relates to formula depth. Our proof utilizes formal complexity measures. First, we apply Khrapchenko's method to show that numerous instances of \\(f\\) remain unsolved after several communication steps. Subsequently, we transition to a different formal complexity measure to demonstrate that the remaining communication problem is at least as hard as \\(KW_OR -13.5mu KW_f\\). This hybrid approach not only achieves the desired lower bound, but also introduces a novel technique for analyzing formula depth, potentially informing future research in complexity theory. The results has been published in the proceedings of the 42nd International Symposium on Theoretical Aspects of Computer Science (STACS 2025).",
    "image": "../csai-assets/images/projects/composition.png",
    "source": "curriculum/projects/krw.tex",
    "order": 7
  },
  {
    "title": "Reinforcement Learning for an Adaptive Game AI Agent Based on Opponent’s Skill Level",
    "term": "Spring 2025",
    "type": "Diploma Project",
    "mentor": "Aleksandr Avdiushenko",
    "students": "Aleksandr Podkopaev",
    "keywords": [
      "Reinforcement Learning",
      "AI agents"
    ],
    "description": "Equality between players and their opponents in competitive games plays a significant role in creating an interesting and enjoyable gaming experience. Unfortunately, these games either do not have computer agents or, if they do, their difficulty level increases too rapidly, which may not be suitable for everyone. In this research, we will present methods for creating an adaptive agent that can adjust to the opponent’s skill level during the game using reinforcement learning. This approach to creating such an agent will help ensure a smoother increase in complexity for players.",
    "report": "In the initial research phase of the thesis, we examined existing RL-based approaches to opponent adaptation. Most of these solutions focused primarily on maximizing win rates rather than promoting fair and balanced gameplay. This analysis helped us identify the core components of the proposed approach. This work presents an approach for creating adaptive agents using RL algorithms that can respond to user behavior. With continued development, it has the potential to lead to agents that enhance the gaming experience by offering more engaging and personalized gameplay against computer opponents. The results are available on GitHub repository. However, there are several areas for future improvement. Firstly, our approach has not yet been tested on more complex games, which could reveal new challenges and potentially shift our methodology in a different direction. Additionally, with the appropriate integration of large language models (LLMs), it may be possible to develop agents capable of actively training players during gameplay rather than only afterward. With further refinement, such models could also be applied in educational contexts, supporting the learning of new material in an interactive and adaptive manner.",
    "image": "../csai-assets/images/projects/2025_adaptive_agent.png",
    "source": "curriculum/projects/adaptive_agent.tex",
    "order": 8
  }
];
