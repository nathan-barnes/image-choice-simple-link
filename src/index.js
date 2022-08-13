import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
// import App from "./App";
import Layout from "./components/Layout.jsx";
import ImageCards from './components/imageCards.jsx'
import theme from "./MuiTheme";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="decision" element={<ImageCards type={'Decision'}/>} />
        <Route path="feelings" element={<ImageCards type={'Feelings'}/>} />
        <Route path="wants" element={<ImageCards type={'Food'}/>} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);

//Main.jsx
// const rootElement = document.getElementById('app');
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />}>
//           <Route
//             index
//             element={
//               <main style={{ padding: '1rem' }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//           <Route path=":invoiceId" element={<Invoice />} />
//         </Route>
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: '1rem' }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//     <CssBaseline />
//     <Layout />
//   </ThemeProvider>,
//   document.querySelector("#root")
// );

