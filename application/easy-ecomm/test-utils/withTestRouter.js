import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export default function withTestRouter(tree, router = {}) {
  const {
    route = '',
    pathname = '',
    pagename = '',
    pagetype = '',
    query = {},
    asPath = '',
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      emit: () => null,
      off: () => null,
      on: () => null,
    },
  } = router;

  return (
    <RouterContext.Provider
      value={{
        asPath,
        back,
        beforePopState,
        events,
        isFallback,
        pagename,
        pagetype,
        pathname,
        prefetch,
        push,
        query,
        reload,
        replace,
        route,
      }}
    >
      {tree}
    </RouterContext.Provider>
  );
}
