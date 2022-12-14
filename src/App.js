import "./index.scss";

import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import { ThreeDots } from "react-loader-spinner";
import Container from "react-bootstrap/Container";

const Home = lazy(() => import("./views/Home/Home"));
const Contacts = lazy(() => import("./views/Contacts/Contacts"));
const Register = lazy(() => import("./views/Register/Register"));
const Login = lazy(() => import("./views/Login/Login"));
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const PublicRoute = lazy(() => import("./components/PublicRoute/PublicRoute"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <Header />
        <Suspense
          fallback={
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#5076ff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ justifyContent: "center" }}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

// ???? ??????????????

// state = {
//   contacts: [],
//   filter: "",
// };

// addContact = (obj) => {
//   this.setState((prevState) => ({
//     contacts: [obj, ...prevState.contacts],
//   }));
// };

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

// changeFilter = (evt) => {
//   this.setState({
//     filter: evt.currentTarget.value,
//   });
// };

// componentDidMount() {
//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({
//       contacts: JSON.parse(localStorage.getItem("contacts")),
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log(prevProps);
//   if (prevState !== this.state.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

// render() {
//   const { filter, contacts } = this.state;
//   const { addContact, changeFilter, deleteContact } = this;

//   return (
//     <div className="App">
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} ??ontactState={contacts} />
//       <div className="contactsHeading">
//         <h2>Contacts</h2>
//         <p>Total: {this.state.contacts.length}</p>
//       </div>
//       <Filter value={filter} handleChange={changeFilter} />
//       <ContactList
//         contacts={contacts}
//         filter={filter}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// }
