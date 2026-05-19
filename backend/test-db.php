<?php
require_once 'config/database.php';

echo "Успешное подключение к базе данных!";
?>



всё заебись, тест пройден подключение работает к дб
D:\myproject>cd backend

D:\myproject\backend>php -S localhost:8000 -t public
[Sun Apr 26 23:28:22 2026] PHP 8.5.5 Development Server (http://localhost:8000) started

на фронте заглушка не грузится и в браузере http://localhost:8000/api/hello - я не вижу никакого джейсона.
D:\myproject\frontend>npm start

> frontend@0.1.0 start
> react-scripts start

(node:11124) [DEP0176] DeprecationWarning: fs.F_OK is deprecated, use fs.constants.F_OK instead
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:11124) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(node:11124) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
Starting the development server...
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.31.188:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
No issues found.
Compiling...
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.31.188:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
No issues found.