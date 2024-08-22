import axios from "axios";
function App() {
  const token = localStorage.getItem("user_token");
  const getRequest = async (e) => {
    try {
      e.preventDefault();
      // fetch('url').then(res=> {return res.json()}).then(res => console.log(res))

      // (get ra post)
      const req = await axios({
        url: "http://localhost:9090/api/user/log",
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          email: "nikhil@gmail.com",
          password: "hello123",
        },
      });

      const accToken = req.data.accessToken;
      localStorage.setItem("user_token", accToken);
      window.location.href = "/country";
      //(delete ra edit)

      // const req = await axios({
      //   method: "delete",
      //   url: "http://localhost:8080/api/country/delete/:id",
      // });
      // const res = await req.data;
      // console.log(res);

      // const req = await axios({
      //   method: 'patch',
      //   url: 'http://localhost:8080/api/country/edit/:id',
      //   data:{
      //     title: 'fdjaklfjadslfjal'
      //   }
      // })
      // const res = await req.data
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  //get request
  //post request
  //patch request
  //delete request

  return (
    <div>
      <form onSubmit={getRequest}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input type="text" style={{ padding: "1rem" }} placeholder="Name" />
          <input
            type="text"
            placeholder="Country Code"
            style={{ padding: "1rem" }}
          />
          <input
            type="text"
            placeholder="Capital"
            style={{ padding: "1rem" }}
          />
          <input
            type="text"
            placeholder="Population"
            style={{ padding: "1rem" }}
          />
          <button style={{ padding: "1rem" }}>Add new country</button>
        </div>
      </form>
    </div>
  );
}

export default App;
