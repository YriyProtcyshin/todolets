import { AddTask } from 'pages/AddTask/AddTask';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="add-task" element={<AddTask />} />
      </Route>
    </Routes>
  );
};
