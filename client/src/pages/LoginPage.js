import { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { login, register } from "../store/actions/actionUsers";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(formLogin)).then((result) => {
      if (result.msg === "Success") {
        navigate("/");
      }
    });
    setFormLogin({
      email: "",
      password: "",
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    dispatch(register(formRegister)).then((result) => {
      if (result) {
        handleJustifyClick("tab1");
      }
    });
  }

  function handleOnChangeLogin(e) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }

  function handleOnChangeRegister(e) {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <form onSubmit={handleLogin}>
            <MDBInput
              onChange={handleOnChangeLogin}
              value={formLogin.email}
              name="email"
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              onChange={handleOnChangeLogin}
              value={formLogin.password}
              name="password"
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />

            <MDBBtn type="submit" className="mb-4 w-100">
              Sign in
            </MDBBtn>
            <p className="text-center">
              Not a member?{" "}
              <a
                href="#!"
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </a>
            </p>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <form onClick={handleRegister}>
            <MDBInput
              onChange={handleOnChangeRegister}
              value={formRegister.name}
              name="name"
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
            />
            <MDBInput
              onChange={handleOnChangeRegister}
              value={formRegister.email}
              name="email"
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              onChange={handleOnChangeRegister}
              value={formRegister.password}
              name="password"
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />
            <MDBBtn type="submit" className="mb-4 w-100">
              Sign up
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
