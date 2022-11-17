import "./index.scss";

import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCurrentUser } from "./Redux/auth/auth-operations";
import { useDispatch } from "react-redux";

import Header from "./Components/Header/Header";
import { ThreeDots } from "react-loader-spinner";
import Container from "react-bootstrap/Container";

const Home = lazy(() => import("./Views/Home/Home"));
const Contacts = lazy(() => import("./Views/Contacts/Contacts"));
const Register = lazy(() => import("./Views/Register/Register"));
const Login = lazy(() => import("./Views/Login/Login"));
const PrivateRoute = lazy(() =>
  import("./Components/PrivateRoute/PrivateRoute")
);
const PublicRoute = lazy(() => import("./Components/PublicRoute/PublicRoute"));

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
              path="/contacts"
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

// на классах

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
//       <ContactForm onSubmit={addContact} сontactState={contacts} />
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
