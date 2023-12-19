import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const AutomaticBreadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" className="mt-2 pb-8 breadcrumb">
      <Link href="/main" color="inherit">
        Inicio
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography color="textPrimary" key={name}>
            {name}
          </Typography>
        ) : (
          <Link href={`${routeTo}`} color="inherit" key={name}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default AutomaticBreadcrumbs;

