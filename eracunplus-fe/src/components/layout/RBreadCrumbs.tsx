import { Breadcrumbs, Link, LinkProps, Typography } from '@mui/material';
import { useLocation } from "react-router"
import {Link as RouterLink } from "react-router-dom";
import { pageNames } from '../../routes/router';
import { memo } from 'react'

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

const RBreadCrumbs = () => {
  
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="#fff" to="/">
        Naslovna
      </LinkRouter>
      {pathnames.map((_ , index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="#fff" key={to}>
            {pageNames[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="#fff" to={to} key={to}>
            {pageNames[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default memo(RBreadCrumbs)