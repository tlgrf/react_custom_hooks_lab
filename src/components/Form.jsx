import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // using the custom hook for the name field
  // this will read/write localStorage under the "name" key
  const [name, setName] = useLocalStorage("name", "");

  // same for the service number field
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          type="text"
          data-testid="service"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>

      {/* show a greeting if name exists, otherwise prompt */}
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;