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

function PrettyOutput({ rank, rating, img }) {
  console.log(rank, rating, img);
  return (
    <div>
      <pre>
        {rank} {rating}
      </pre>
      <img src={img}></img>
    </div>
  );
}

function CodeforceInfo({ userName }) {
  const [output, setOutput] = React.useState({
    msg: "Please enter a codeforce handle",
    ok: false,
  });
  const timeoutRef = React.useRef(null); /* to refer the setTimeOut later */
  const retryTimeoutRef = React.useRef(null);
  let isRetrying = false;

  function clearAllTimeOuts() {
    clearTimeout(timeoutRef.current); /* Clear the last timeout */
    clearTimeout(retryTimeoutRef.current);
  }

  function fetchData() {
    setOutput({ msg: isRetrying ? "Retrying ..." : "...", ok: false });

    timeoutRef.current = setTimeout(() => {
      setOutput({ msg: "Fetching ...", ok: false });

      fetchUser(userName) /* Async */
        .then((data) => {
          isRetrying = false;
          const res = {
            msg: "Fetch Success!",
            ok: true,
            value: {
              rating: data[0].maxRating,
              rank: data[0].maxRank,
              titlePhoto: data[0].profilePicLink,
            },
          };
          setOutput(res);
        })
        .catch(() => {
          setOutput({ msg: "Error fetching", ok: false });
          clearAllTimeOuts();
          retryTimeoutRef.current = setTimeout(fetchData, 5000); /* Retrying */
          isRetrying = true;
        });
    }, 500);
  }

  /* Async fetch from the API  to get the json for user
         needs to be done in useEffect(). Any side effect that's needed goes in
         useEffect() */
  React.useEffect(
    () => {
      clearAllTimeOuts();
      if (userName) {
        fetchData();
        return () => {
          clearAllTimeOuts(); /* For clean up */
        };
      } else {
        setOutput({ msg: "Please enter a codeforce handle", ok: false });
        return; /* No clean ups required */
      }
    },
    [userName]
    /* ! NOTE: One major issue here is 
            the dependency is only on userName, and if let's say we gave input 'xyz'
            and tried fetch, and let's say we get an fetch error, after that unless we change 
            the input (userName), the fetch is not going to work. Hence you cannot re-fetch things.
            This can be handled by adding a stateState which needs to be changed 
            */
  );

  return (
    <div>
      <pre id="output"> {output.msg} </pre>
      <div>
        {output.ok ? (
          <PrettyOutput
            rank={output.value.rank}
            rating={output.value.rating}
            img={output.value.titlePhoto}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
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
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="userName">Enter codeforce handle:</label>
        <input id="userName" onChange={handleChange} autoComplete="off" />
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
