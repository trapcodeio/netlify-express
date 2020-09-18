const router = $.router;

router.get('/', (http) => {
  return http.view('index');
})
