import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <div className={css.header}>
        <div className="container">
          <ul className={css.list}>
            <li className={css.iten}>
              <NavLink className={css.link} to="/">
                TO DO
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink className={css.link} to="/add-task">
                Add Task
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.main}>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
