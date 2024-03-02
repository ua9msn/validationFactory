import { Rules, values } from "./data";
import "./styles.css";
import { ValidationFactory } from "./validationFactory";

export default function App() {
  const Validations = Rules.map(ValidationFactory);

  const errors = Validations.map((fn) => fn(values));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {errors.map((error, index) => (
          <p key={index}>
            {error.fId} {error.error}
          </p>
        ))}
      </div>
    </div>
  );
}
