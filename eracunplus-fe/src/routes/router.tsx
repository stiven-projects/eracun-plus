import Skeleton from '@mui/material/Skeleton';
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';
import { createBrowserRouter } from "react-router-dom";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<Skeleton variant="rectangular" width="100%"/>}>
      <Component {...props} />
    </Suspense>
  );

const LayoutContainer = Loadable(lazy(() => import("../features/layout/LayoutContainer")));

const Naslovnica = Loadable(lazy(() => import("../features/naslovnica/Naslovnica")));
const KreirajRacun = Loadable(lazy(() => import("../features/kreiraj-racun/KreirajRacunContainer")));
const UlazniRacuni = Loadable(lazy(() => import("../features/lista-ulaznih-racuna/UlazniRacuniContainer")));
const IzlazniRacuni = Loadable(lazy(() => import("../features/lista-izlaznih-racuna/IzlazniRacuniContainer")));
const DetaljiRacuna = Loadable(lazy(() => import("../features/detalji-racuna/DetaljiRacunaContainer")));


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Naslovnica />
  },
  {
    path: "/kreiraj",
    element: <KreirajRacun />
  },
  {
    path: "/ulazni",
    element: <UlazniRacuni />
  },
  {
    path: "/izlazni",
    element: <IzlazniRacuni />
  },
  {
    path: "/detalji",
    element: <DetaljiRacuna />
  }
]

const layoutRoute: RouteObject[] = [
  {
    path: "/",
    element: <LayoutContainer />,
    children: routes
  }
]

export const pageNames: { [key: string]: string } = {
  '/kreiraj': 'Kreiraj račun',
  '/ulazni': 'Ulazni računi',
  '/izlazni': 'Izlazni računi',
  '/detalji': 'Detalji računa',
};

export const router: any = createBrowserRouter(layoutRoute);