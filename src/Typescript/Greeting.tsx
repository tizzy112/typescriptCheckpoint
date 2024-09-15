// Step 1: Defining an interface for the props
interface GreetingProps {
  name: string; // The `name` prop is a string
}

// Step 2: Defining the functional component and apply the GreetingProps interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Return the JSX (React.FC handles the return type)
  return <div>Hello, {name}!</div>;
};

// Step 4: Export the component
export default Greeting;
