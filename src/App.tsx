import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

// Temporary inline placeholders cos don't have pages files atm 
import Home from './pages/Home';
import Company from './pages/Company';
import Trainees from './pages/Trainees';
import Careers from './pages/Careers';
import Courses from './pages/Courses';
import Apply from './pages/Apply';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="trainees" element={<Trainees />} />
        <Route path="careers" element={<Careers />} />
        <Route path="courses" element={<Courses />} />
        <Route path="apply" element={<Apply />} />
      </Route>
    </Routes>
  );
}

export default App;