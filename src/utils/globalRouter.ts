import { Router } from 'vue-router';

let globalRouter: Router;

export const setGlobalRouter = (router: Router) => {
  globalRouter = router;
};

export const getGlobalRouter = () => globalRouter;
