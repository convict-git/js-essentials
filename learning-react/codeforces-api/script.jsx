const rootElement = document.getElementById("root");

function Box({ custClassName, custSize, custStyles, ...restProps }) {
  let custClassStr = ` ${custClassName ? custClassName : ""}`.concat(
    custSize ? ` box-${custSize}` : ""
  );
  return (
    <div
      className={"box".concat(custClassStr)}
      style={{ backgroundColor: `pink`, ...custStyles }}
      {...restProps}
    ></div>
  );
}

function CodeforceInfo({ userName }) {
  const [output, setOutput] = React.useState("Please enter a codeforce handle");
  const timeoutRef = React.useRef(null); /* to refer the setTimeOut later */

  /* Async fetch from the API  to get the json for user
         needs to be done in useEffect(). Any side effect that's needed goes in
         useEffect() */
  React.useEffect(
    () => {
      if (userName) {
        setOutput("...");
        clearTimeout(timeoutRef.current); /* Clear the last timeout */

        timeoutRef.current = setTimeout(() => {
          console.log("Fetching");
          fetchUser(userName) /* Async */
            .then((data) => {
              const maxRating = data[0].maxRating;
              const maxRank = data[0].maxRank;
              const res = `Rating: ${maxRating}\n Rank: ${maxRank}`;
              setOutput(res);
            })
            .catch(() => {
              setOutput("Error fetching");
            });
        }, 500);
      } else {
        clearTimeout(timeoutRef.current);
        setOutput("Please enter a codeforce handle");
        return;
      }

      return () => {
        /* For clean up */
        clearTimeout(timeoutRef.current);
      };
    },
    [userName]
    /* ! NOTE: One major issue here is 
            the dependency is only on userName, and if let's say we gave input 'xyz'
            and tried fetch, and let's say we get an fetch error, after that unless we change 
            the input (userName), the fetch is not going to work. Hence you cannot re-fetch things.
            This can be handled by adding a stateState which needs to be changed 
            */
  );

  return <pre> {output} </pre>;
}

function App() {
  const [userName, setUserName] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUserName(event.target.elements.userName.value);
  }

  function handleChange(event) {
    event.preventDefault();
    setUserName(event.target.value);
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter codeforce handle:</label>
        <input id="userName" onChange={handleChange} autoComplete="off" />
        <button> fetch </button>
      </form>
      <code style={{ fontSize: "0.8em" }}>
        Eg. (tourist / vovuh / tymefighter / mr.convict){" "}
      </code>
      <hr style={{ width: "300px" }} />
      <CodeforceInfo userName={userName} />
    </Box>
  );
}
ReactDOM.render(<App />, rootElement);

function fetchUser(name) {
  /* Async function to fetch */
  return window
    .fetch(`https://codeforces.com/api/user.info?handles=${name};`)
    .then((r) => {
      return r.json();
    })
    .then((r) => r.result);
}
