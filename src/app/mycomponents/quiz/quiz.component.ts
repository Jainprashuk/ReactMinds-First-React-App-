import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestionIndex = 0;
  questions: any[] = [
    {
      question: 'Which of the following commands can be used to check if Node.js is installed on your computer?',
      options: ['npm -v', 'node -version', 'node -v', 'npm --version'],
      correctAnswer: 'node -v'
    },
    {
      question: 'What is the primary purpose of Node.js and npm in the context of building React applications?',
      options: ['Node.js is used for styling React components, while npm manages version control', 'Node.js is responsible for handling HTTP requests in React applications, and npm installs React packages.', 'Node.js is a runtime environment for executing JavaScript code, and npm is a package manager for managing dependencies in React projects.', 'Node.js is a React-specific framework, and npm is a code editor for writing React code.'],
      correctAnswer: 'Node.js is a runtime environment for executing JavaScript code, and npm is a package manager for managing dependencies in React projects.'
    },
    {
      question: 'What is the purpose of the npx command in the context of creating a new React app using create-react-app?',
      options: ['It installs the create-react-app globally on the system.', 'It runs create-react-app without the need for a global installation.', 'It updates the existing React app to the latest version.', 'It initializes a new React app without configuring dependencies.'],
      correctAnswer: 'It runs create-react-app without the need for a global installation.'
    },
    {
      question: 'After running the command npx create-react-app my-react-app, what should you do to navigate into the newly created React app directory?',
      options: ['cd my-react-app', 'cd path/to/your/projects', 'cd create-react-app', 'cd my-react-app/my-react-app'],
      correctAnswer: 'cd my-react-app'
    },
    {
      question: 'Where is the main entry point for a React app created with create-react-app, and what is the typical filename for this entry point?',
      options: ['public/index.html', 'src/index.js', 'src/App.js', 'public/App.html'],
      correctAnswer: 'src/index.js'
    },
    {
      question: 'How can you add external libraries and dependencies, such as Axios for making HTTP requests, to your React project?',
      options: ['Copy-paste the library code directly into your components.', 'Use the import statement in your components without installing anything.', 'Run npm install axios in the terminal/command prompt.', 'Manually download the library files and include them in your project directory.'],
      correctAnswer: 'Run npm install axios in the terminal/command prompt.'
    },
    {
      question: 'What command is used to create a new React app using create-react-app, and what is the name of the app created in the provided example?',
      options: ['npm init react-app hello-world-app', 'npx init-react hello-world-app', 'npx create-react-app hello-world-app', 'npm create-react-app hello-world-app'],
      correctAnswer: 'npx create-react-app hello-world-app'
    },
    {
      question: 'What is the purpose of the npm start command in the context of a React app, as mentioned in the instructions?',
      options: ['It installs additional npm packages for the app.', 'It deploys the app to a production server.', 'It opens the app in the default web browser and starts the development server.', 'It compiles the React code into a production-ready bundle.'],
      correctAnswer: 'It opens the app in the default web browser and starts the development server.'
    },
    // Add more questions similarly
  ];
  selectedOption: string | null = null;
  score = 0;
  quizCompleted = false;

  ngOnInit(): void {
    // Initialize the component
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    // Check if the selected option is correct
    if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    // Move to the next question or end the quiz
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null; // Reset selected option for the next question
    } else {
      this.quizCompleted = true;
    }
  }

  submitQuiz(): void {
    // Display the final score
    alert(`Your score is: ${this.score}`);
  }
}
