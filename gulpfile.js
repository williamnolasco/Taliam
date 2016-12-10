/*
Para utilizar Pug, primero tenemos que instalar gulp en el 
proyecto:
1.- Abrimos la consola en la direccion de proyecto
2.- Ponemos en consola: npm init -y , esto creara nuestro pack
age.json.
3.- Instalamos gulp en el proyecto: npm install --save-dev gulp, esto creara
una dependencia en nuestro package.json
4.- luego creamos un archivo.js, en donde pondremos todo las tareas
a realizar.
5.- instalamos pug en nuestro proyecto: npm intall gulp-pug --save-dev

Para utilizar browser-sync:
1.- La primera vez la instalamos globlamente en nuestra maquina, con
el link que esta en su web oficial
2.- Verficamos que tenemos browser-sync con el comando:
npm browser-sync --version
3.- instalamos browser-sync en nuestro proyecto, ponemos en consola:
npm install --save-dev browser-sync
3.- nos localizamos en nuesto proyecto en la temrinal, y ponemos:
browser-sync start --server --files "aqui colocamos los archivos que vigilara"
 esto indica que vigilara todo = "./*.*"
*/

var gulp = require('gulp'),
	pug = require('gulp-pug');

gulp.task('usandopug', function(){
	gulp.src('./dev/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default', function(){
	//gulp.watch('la ruta del archivo que se va a vigilar', ['nombre de la tarea a realizar cada ez que se haga un cambio en el archivo vigilado'])
	gulp.watch('./dev/**/*.pug', ['usandopug']);
});