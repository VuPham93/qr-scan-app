import {useContext} from 'react';

import {StaffContext} from '../auth';

function useStaff() {
  return useContext(StaffContext);
}
export default useStaff;
