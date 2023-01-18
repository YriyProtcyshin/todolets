import { Table } from 'components/Table/Table';
import css from './AddTask.module.css';

import json from '../../Outlet.json';

const products = json.filter(
  item => item['Territory Manager'] === 'Yuriy Protsyshin'
);

export const AddTask = () => {
  return (
    <div className={css.add_task}>
      <Table products={products} />
    </div>
  );
};
