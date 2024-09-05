import React, { ChangeEvent, useCallback } from 'react'
import { useQueryString } from './useQueryString';
import debounce from 'lodash.debounce';

const useDebounceSearch = (queryName: string) => {
    const { updateQueryString } = useQueryString();
    const debounceSearch = debounce((searchTerm: string) => {
      updateQueryString(queryName, searchTerm);
    }, 500);
  
    const debounceRequest = useCallback(
      (searchTerm: string) => debounceSearch(searchTerm),
      [debounceSearch]
    );
    const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
      debounceRequest(e.target.value);
    };
    return { onChangeSearchText}
}

export default useDebounceSearch