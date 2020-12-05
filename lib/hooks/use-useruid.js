/**
 * @format
 * @flow
 */

import { useSelector } from 'react-redux'
import { userUidSelector } from 'store/selectors'

const useUidSelector = (): string => {
  const userUid = useSelector(userUidSelector)

  return userUid ?? ''
}

export default useUidSelector